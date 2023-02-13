import React, { useState } from "react";
import Input from "../Input";
import styles from "../../styles/Landing.module.css";
import {
  getUserInfos,
  handleLoginForm,
  handleRegisterForm,
} from "@/services/requests";
import { useRecoilState } from "recoil";
import { Authentication } from "@/atoms/Authentication";

interface ModalProps {
  onClose: () => void;
}

const Modal = (props: ModalProps) => {
  const [formData, setFormData] = useState({ user: "", password: "" });
  const [{ isAuth }, setIsAuth] = useRecoilState(Authentication);
  const handleInputChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const hasUser = await getUserInfos(formData.user);
    if (!hasUser) {
      await handleRegisterForm(
        {
          email: formData.user,
          password: formData.password,
        },
        setIsAuth
      );
      setFormData({ user: "", password: "" });
      props.onClose();
    } else {
      await handleLoginForm(
        {
          email: formData.user,
          password: formData.password,
        },
        setIsAuth
      );
      setFormData({ user: "", password: "" });
      props.onClose();
    }
  };

  return (
    <div className={styles["register-modal"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["close-container"]}>
          <p className={styles["close-modal"]} onClick={props.onClose}>
            close
          </p>
        </div>

        <div className={styles["form-modal"]}>
          <h2>
            Sign in
            <p>to access your list</p>
          </h2>
          <Input
            inputName="user"
            title="User:"
            required
            value={formData.user}
            onChange={handleInputChange}
            type={"text"}
            inputClassName={styles["input-modal"]}
            labelClassName={styles["label-modal"]}
          />
          <Input
            inputName="password"
            title="Password:"
            required
            value={formData.password}
            onChange={handleInputChange}
            type={"password"}
            inputClassName={styles["input-modal"]}
            labelClassName={styles["label-modal"]}
            containerClassName={styles["input-container-modal"]}
          />
          <input type="submit" value={"Sign in"} onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
