import React from "react";
import "../../App.css";

import MainNav from "../../components/MainNav";
import Slide from "../../components/Slide";
import Footer from "../../components/Footer";

import { Header } from "semantic-ui-react";

function Lesson(props) {
    return (
    <div>
        <MainNav />
        <Header as={"h1"}>{props.header}</Header>
        <Header as={"h3"}>{props.description}</Header>
        <Slide src={props.slideSrc} />
        <Footer />
    </div>
    );
}

export default Lesson
