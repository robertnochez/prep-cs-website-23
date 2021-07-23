import React from "react";
import "../../App.css";

import MainNav from "../../components/MainNav";
import Footer from "../../components/Footer";
import Slide from "../../components/Slide";

import { Header } from "semantic-ui-react";

function Lesson9() {
  return (
    <div>
      <MainNav />
      <div className="wmcode-page">
        <Header as={"h1"}>Lesson </Header>
        <Slide />
      </div>
      <Footer />
    </div>
  );
}

export default Lesson9;
