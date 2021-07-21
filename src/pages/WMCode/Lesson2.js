import React from "react";
import "../../App.css";

import MainNav from "../../components/MainNav";

import { Header } from "semantic-ui-react";

function Lesson2(props) {
  return (
    <div>
      <MainNav />
      <Header as={"h1"}>This is a Second Sample Page Link</Header>
    </div>
  );
}

export default Lesson2;
