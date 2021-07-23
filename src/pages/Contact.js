import React from "react";
import "./../App.css";

import NavBar from "../components/NavBar";
import ContactImage from "../images/Contact.png";
import TitleAndImageBlock from "../components/TitleAndImageBlock";
import Footer from "../components/Footer";
import CodeBlock from "../components/CodeBlock";

function Contact(props) {
  return (
    <div>
      <NavBar
        title="Contact"
        description="Any questions, comments, concerns or suggestions are welcome!"
        img={ContactImage}
      />

      <TitleAndImageBlock
        background={true}
        firstTitle="Contact Us!"
        firstDescription="*Insert the form here*"
      />

      <Footer />
    </div>
  );
}

export default Contact;
