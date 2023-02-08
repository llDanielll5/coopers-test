import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    <>
      <Head>
        <title>Test Coopers</title>
        <meta
          name="description"
          content="Test to work in Full Stack Developer position"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {/* Header Section */}
        <header>
          <nav>
            <h2>Logo</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>

        {/* Banner Section */}
        <section className="banner">
          <h1>Welcome to our landing page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Learn More</button>
        </section>

        {/* Form Section */}
        <section className="form">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />

            <button type="submit">Submit</button>
          </form>
        </section>

        {/* Contact Section */}
        <section className="contact">
          <h2>Contact Information</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul>
            <li>Phone: 123-456-7890</li>
            <li>Email: info@example.com</li>
            <li>Address: 123 Main Street, Anytown USA</li>
          </ul>
        </section>

        {/* Footer Section */}
        <footer>
          <p>Copyright &</p>
        </footer>
      </div>
    </>
  );
}
