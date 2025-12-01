import React from "react";

function Contact() {
  return (
    <section>
      <h2>Kontakt</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div>
          <label htmlFor="email">E-Mail:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label htmlFor="message">Nachricht:</label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit">Absenden</button>
      </form>
    </section>
  );
}

export default Contact;

