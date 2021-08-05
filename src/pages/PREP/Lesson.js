import React from "react";
import "../../App.css";

import MainNav from "../../components/MainNav";
import Slide from "../../components/Slide";
import Footer from "../../components/Footer";
import Video from "../../components/Video";

import { Header, Button } from "semantic-ui-react";

function Lesson(props) {
  return (
    <div>
      <MainNav />
      <Header as={"h1"}>{props.header}</Header>
      <a href={props.lessonDownload} download>
        <Button basic color="blue">
          Download Lesson Folder
        </Button>
      </a>
      <Header as={"h3"}>Description:</Header>
      <Header as={"h4"}>{props.description}</Header>
      <Header as={"h3"}>
        Slides
        <a href={props.slideLink} target="_blank" rel="noopener noreferrer">
          (link)
        </a>
        :
      </Header>
      <Slide src={props.slideSrc} />
      <Header as={"h3"}>Recording:</Header>
      <Video src={props.videoSrc} />
      {props.children}
      <Footer />
    </div>
  );
}

export default Lesson;
