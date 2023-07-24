import React from "react";

import PREPLesson from "./Lesson";
import CodeBlock from "../../components/CodeBlock";
import { Header } from "semantic-ui-react";

function PREPLesson7() {
  return (
    <PREPLesson
      header="Review and HOFs"
      description="Today's lesson continues on the topics of loops by introducing iterators and generators. "
      slideSrc={`https://docs.google.com/presentation/d/1KhLUVm1d_jVHDKr80sV3BlTdKe4tP8UaI8PTT0NgWzM/embed?start=false&loop=false&delayms=3000`}
      prevLesson={null}
      nextLesson=""
      slideLink={`https://docs.google.com/presentation/d/1KhLUVm1d_jVHDKr80sV3BlTdKe4tP8UaI8PTT0NgWzM/edit?usp=sharing`}
      lessonDownload="./prepDownloads/prep_lesson7.zip"
    >
    <Header as={"h3"}>Practice Problem Solutions:</Header>
    
    </PREPLesson>
  );
}
/*
 */
export default PREPLesson7;
