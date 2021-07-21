import React from "react";
import "../../App.css";

import MainNav from "../../components/MainNav";

import { Header } from "semantic-ui-react";

class Lesson1 extends React.Component {
    render(props) {
        return (
        <div>
            <MainNav />
            <Header as={"h1"}>Hello!</Header>
        </div>
        );
    }
}

export default Lesson1
