import React from "react";
import "../../App.css";

import MainNav from "../../components/MainNav";
import Slide from "../../components/Slide";

import { Header } from "semantic-ui-react";

function Lesson(props) {
    return (
    <div>
        <MainNav />
        <Header as={"h1"}>{props.header}</Header>
        <Header as={"h3"}>{props.description}</Header>
        <Slide src="https://docs.google.com/presentation/d/16-TB_tYLa2fRPUUI3vaibTFIufKwhFVqgPRfYtwIp7A/edit#slide=id.ge351035e32_1_65" />
        <p>Taught by Karen, Cris, and Jesus</p>
    </div>
    );
}

export default Lesson
