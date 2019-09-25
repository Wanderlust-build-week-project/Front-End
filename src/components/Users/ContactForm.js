import React from "react";

function ContactForm() {
  return (
    <div>
      <h2>I'm a contact form</h2>
      <form action="https://formspree.io/gsc229@gmail.com" method="POST">
        <input type="text" name="name" />
        <input type="email" name="_replyto" />
        <textarea type="text"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default ContactForm;
