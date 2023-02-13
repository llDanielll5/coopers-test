import { SwitchLoginErrors } from "@/utils/switchLoginErrors";
import { SwitchRegisterErrors } from "@/utils/switchRegisterErrors";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { UserType } from "types";
import { auth, db } from "./firebase";

export const addNewUser = async (data: any, uid: any) => {
  await setDoc(doc(db, "users", uid), data);
};

export const getUserInfos = async (uid: string) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

export const loginLocalStorage = (authValues: any) => {
  localStorage.setItem("userData", JSON.stringify(authValues));
  localStorage.setItem("isAuth", "true");
};

export const changeLocalState = async (
  authUser: any,
  { email }: any,
  setState: any
) => {
  const userValues: UserType = {
    email: email,
    todos: [],
  };

  addNewUser(userValues, email)
    .then(async () => {
      await updateProfile(authUser.user, { displayName: email }).then(() => {
        loginLocalStorage(userValues);
        setState({ isAuth: true });
        alert("Conta criada para o email " + email);
      });
    })
    .catch((error: any) => {
      const user = auth.currentUser!;
      deleteUser(user).then(() => {
        localStorage.clear();
        auth.signOut();
      });
      console.log(error.message);
    });
};

export const handleRegisterForm = async (
  { email, password }: any,
  setState: any
) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password).then(
      (authUser) => changeLocalState(authUser, { email }, setState)
    );
  } catch (error: any) {
    SwitchRegisterErrors(error);
  }
};

export const changeLoginState = async (authUser: any, setState: any) => {
  const userResult = await getUserInfos(authUser.user.email);
  loginLocalStorage(userResult);
  setState({ isAuth: true });
  alert("Conta logada para o email " + authUser.user.email);
};

export const handleLoginForm = async (
  { email, password }: any,
  setState: any
) => {
  // setLoading(true);
  try {
    await signInWithEmailAndPassword(auth, email, password).then((authUser) =>
      changeLoginState(authUser, setState)
    );
  } catch (error: any) {
    //   setLoading(false);
    SwitchLoginErrors(error);
  }
};
