import React, { useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";
import { FiMenu } from "react-icons/fi";
import styles from "@/styles/Mobile.module.css";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import Things from "@/components/Things";
import ContactForm from "@/components/ContactForm";
import AngularRect from "@/media/icons/AngularRect";
import Footer from "@/components/Footer";

export default function Home() {
  const size = useWindowSize();
  const [siginVisible, setSiginVisible] = useState(false);
  const [modalSigin, setModalSigin] = useState(false);

  const handlePressMenu = () => {
    const hamb = document.getElementById("hambSigin");
    const button = document.getElementById("buttonSigin");
    const changeStyles = (widthHamb: string, opacity: string) => {
      hamb?.style?.setProperty("width", widthHamb);
      button?.style.setProperty("opacity", opacity);
      setSiginVisible(!siginVisible);
    };
    if (!siginVisible && size?.width! < 760) changeStyles("0px", "1");
    else changeStyles("30px", "0");
  };

  const handlePressSigin = () => {
    handlePressMenu();
    setModalSigin(!modalSigin);
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
        </header>

        <div className={styles.container}>
          {/* Banner Section */}
          <section className={styles.banner}>
            {size?.width! > 760 && (
              <Image
                src={"/images/BGarrow.png"}
                alt="arrow background"
                className={styles["arrow-background"]}
                width={size?.width / 1.5}
                height={700}
                style={{ position: "absolute", right: 0 }}
              />
            )}
            <h1>Organize</h1>
            <p>your daily jobs</p>
            <span className={styles.text}>The only way to get things done</span>
            <button
              className={styles["todo-button"]}
              id={"todoList"}
              onClick={() => alert("todo list")}
            >
              Go to To-do list
            </button>
          </section>
        </div>

        {/* Contact Section */}
        <section className={styles["todo-section"]}>
          <h2>To-do List</h2>
          <p>
            {`Drag and drop to set your main priorities, check when done and
            create what's new.`}
          </p>
        </section>

        <Things maxWidth={size.width} />

        <ContactForm />

        <Footer width={size.width} />
      </>
    );
}
