import React from "react";

function ContactForm() {
  return (
    <div>
      <iframe
        src="https://services.cognitoforms.com/f/tZLFQi60nEmyd7HBDttjkw?id=1"
        /*  style={{position:relative},{width:1px},{min-width:100%},{*width:100%}"} */
        frameborder="0"
        scrolling="yes"
        seamless="seamless"
        height="542"
        width="100%"
      ></iframe>
      <script src="https://services.cognitoforms.com/scripts/embed.js"></script>
    </div>
  );
}

export default ContactForm;
