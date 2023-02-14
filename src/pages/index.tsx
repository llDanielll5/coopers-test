/* eslint-disable @next/next/no-img-element */
//@ts-nocheck
import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { FiMenu } from "react-icons/fi";
import styles from "@/styles/Landing.module.css";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import Things from "@/components/Things";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import { BsCheck } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { HiOutlineLogout } from "react-icons/hi";
import { auth } from "@/services/firebase";
import { Authentication } from "@/atoms/Authentication";
import { useRouter } from "next/router";
import RectSVGForm from "@/media/icons/Rect";

interface TodoType {
  title: string;
  done: boolean;
}

const checkStyle = { width: "20px", height: "20px", color: "#4AC959" };
const doneCheckStyle = { width: "20px", height: "20px", color: "white" };
const todoInitial = { title: "type some todo", done: false };

export default function LandingPage() {
  const dragItem = useRef();
  const router = useRouter();
  const size = useWindowSize();
  const dragOverItem = useRef();
  const [siginVisible, setSiginVisible] = useState(false);
  const [modalSigin, setModalSigin] = useState(false);
  const [{ isAuth }, setIsAuth] = useRecoilState(Authentication);
  const [todoList, setTodoList] = useState<TodoType[]>([todoInitial]);
  const [doneList, setDoneList] = useState<TodoType[]>([]);

  const handlePressMenu = () => {
    const hamb = document.getElementById("hambSigin");
    const button = document.getElementById("buttonSigin");
    const changeStyles = (widthHamb: string, opacity: string) => {
      hamb?.style?.setProperty("width", widthHamb);
      button?.style.setProperty("opacity", opacity);
    };
    if (!siginVisible && size?.width! < 760) changeStyles("0px", "1");
    else if (siginVisible && size?.width! < 760) changeStyles("30px", "0");
    setSiginVisible(!siginVisible);
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      setIsAuth({ isAuth: false });
      localStorage.clear();
    });
  };

  const handlePressSigin = () => {
    handlePressMenu();
    setModalSigin(!modalSigin);
  };

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(position);
  };

  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    const copyListItems = [...todoList];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setTodoList(copyListItems);
  };

  const eraseAll = () => {
    setTodoList([todoInitial]);
  };

  useEffect(() => {
    const button = document.getElementById("buttonSigin");
    if (size.width! > 760) {
      button?.style.setProperty("opacity", "1");
    } else button?.style.setProperty("opacity", "0");
  }, [size.width]);

  useEffect(() => {
    const authed = localStorage.getItem("isAuth");
    if (authed === "false" || !authed) setIsAuth({ isAuth: false });
    else setIsAuth({ isAuth: true });
  }, []);

  const renderTodoItem = (item: TodoType, index: number) => {
    const handleSelectTodo = () => {
      const clone = [...todoList];
      const change = !clone[index].done;
      clone[index].done = change;
      setTodoList(clone);

      const doneItem = doneList.find((i) => i === item);
      if (doneItem) {
        const indexDone = doneList.findIndex((v, i, arr) => v === item);
        const remove = doneList.splice(indexDone, 1);
        console.log(remove);
      } else {
        const done = [];
        done.push(...doneList);
        done.push(item);
        setDoneList(done);
      }
    };

    return (
      <div className={styles.dragall}>
        <div
          className={styles.dragtodo}
          draggable
          onDragStart={(e) => dragStart(e, index)}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragEnd={drop}
        >
          <div className={styles.checkbox} onClick={handleSelectTodo}>
            {item.done && <BsCheck style={checkStyle} />}
          </div>
          <p className={styles["drag-text"]}>{item.title}</p>
        </div>
      </div>
    );
  };

  const renderDoneList = (item: TodoType, index: number) => {
    return (
      <div className={styles.dragall}>
        <div className={styles.dragtodo}>
          <div className={styles["checkbox-done"]}>
            {item.done && <BsCheck style={doneCheckStyle} />}
          </div>
          <p className={styles["drag-text"]}>{item.title}</p>
        </div>
      </div>
    );
  };

  if (!size.width) return null;
  else
    return (
      <>
        <Head>
          <title>Test Coopers</title>
          <meta
            name="description"
            content="Test to work as a Full Stack Developer"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Header Section */}
        <header className={styles.header}>
          <div className={styles.logo} />
          {isAuth ? (
            <div className={styles["logout-container"]}>
              <HiOutlineLogout
                onClick={handleLogout}
                className={styles.logout}
              />
            </div>
          ) : (
            <>
              <div className={styles["sigin-container"]}>
                <button
                  className={styles["signin-button"]}
                  id={"buttonSigin"}
                  onClick={handlePressSigin}
                >
                  Entrar
                </button>
                <FiMenu
                  className={styles.hambMenu}
                  id={"hambSigin"}
                  onClick={handlePressMenu}
                />
              </div>
            </>
          )}
        </header>

        <div className={styles.container}>
          {/* Banner Section */}
          <section className={styles.banner}>
            {size?.width! > 760 && (
              <>
                <Image
                  src={"/images/BGarrow.png"}
                  alt="arrow background"
                  className={styles["arrow-background"]}
                  width={size?.width / 3}
                  height={450}
                  style={{
                    position: "absolute",
                    right: 0,
                    zIndex: 2,
                    top: 30,
                    maxWidth: 500,
                  }}
                />
                <Image
                  src={"/images/sede.png"}
                  alt="arrow background"
                  className={styles["arrow-background"]}
                  width={size?.width / 4}
                  height={350}
                  style={{
                    position: "absolute",
                    right: "5%",
                    zIndex: 2,
                    top: 80,
                    maxWidth: 350,
                  }}
                />
              </>
            )}
            <h1>Organize</h1>
            <p>your daily jobs</p>
            <span className={styles.text}>The only way to get things done</span>
            <button
              className={styles["todo-button"]}
              id={"todoList"}
              onClick={() => router.push("#todo")}
            >
              Go to To-do list
            </button>
          </section>
        </div>

        {/* Contact Section */}
        <section className={styles["todo-section"]} id={"todo"}>
          <h2>To-do List</h2>
          <p>
            {`Drag and drop to set your main priorities, check when done and
            create what's new.`}
          </p>
        </section>

        <div className={styles["todo-lists"]}>
          <div className={styles["todo-card"]}>
            <div className={styles["todo-top-banner"]} />
            <h2>To-do</h2>
            <h3>Take a breath. {"\n"}Start doing.</h3>
            <div className={styles["drag-container"]}>
              {todoList.map((item, index) => renderTodoItem(item, index))}
              <button className={styles["erase-all"]} onClick={eraseAll}>
                erase all
              </button>
            </div>
          </div>
          <div className={styles["done-card"]}>
            <div className={styles["done-top-banner"]} />
            <h2>Done</h2>
            <h3>Congratulations!</h3>
            <p>You have done {4} tasks</p>
            {doneList.map((item, index) => renderDoneList(item, index))}
            <button className={styles["erase-all"]}>erase all</button>
          </div>
        </div>

        <Things maxWidth={size.width} />

        {size.width > 760 && (
          <div className={styles["picture-form-container"]}>
            <div style={{ marginRight: "140px" }}>
              <RectSVGForm />
            </div>
            <img
              alt="contact"
              src="/images/attendance.png"
              className={styles["image-form"]}
            />
          </div>
        )}
        <ContactForm />

        <Footer width={size.width} />

        {modalSigin && <Modal onClose={() => setModalSigin(false)} />}
      </>
    );
}
