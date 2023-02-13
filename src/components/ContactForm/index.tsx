import MailIcon from "@/media/icons/Mail";
import React, { useState } from "react";
import styles from "../../styles/Landing.module.css";
import Input from "../Input";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles["form-container"]}>
      <div className={styles["form-title-content"]}>
        <div className={styles["box-green-form"]}>
          <MailIcon />
        </div>
        <h2>
          Get in <span>Touch</span>
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          inputName="name"
          title="Your name"
          type={"text"}
          placeholder="type your name here..."
          value={formData.name}
          onChange={handleInputChange}
        />

        <div className={styles["double-inputs"]}>
          <Input
            title="Email*"
            inputName="email"
            placeholder="example@example.com"
            type={"text"}
            value={formData.email}
            onChange={handleInputChange}
            containerClassName={styles["input-double"]}
          />
          <Input
            title="Telephone*"
            inputName="telephone"
            placeholder="(  ) ____-____"
            type={"text"}
            value={formData.phone}
            onChange={handleInputChange}
            containerClassName={styles["input-double"]}
          />
        </div>

        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          placeholder="Type what you want to say to us"
          aria-placeholder="what-want-to-say-to-us"
        />

        <button type="submit">Send now</button>
      </form>
    </div>
  );
};

export default ContactForm;
