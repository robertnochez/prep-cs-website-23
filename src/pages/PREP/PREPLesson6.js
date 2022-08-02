import React from "react";

import PREPLesson from "./Lesson";
import CodeBlock from "../../components/CodeBlock";
import { Header } from "semantic-ui-react";

function PREPLesson6() {
  return (
    <>
      <PREPLesson
        header="Iterables and the 'For' Loop"
        description="What are iterables? What are the different types of iterables? Today we will discuss for loops and when
          to use them instead of while loops."
        slideSrc="https://docs.google.com/presentation/d/1DHNrBRLOOGrodgbjH5KAMgr_L24ts0Y9qQGjjq8qNDQ/edit?usp=sharing/embed?start=false&loop=false&delayms=3000"
        prevLesson={null}
        nextLesson=""
        videoSrc=""
        slideLink={`https://docs.google.com/presentation/d/1DHNrBRLOOGrodgbjH5KAMgr_L24ts0Y9qQGjjq8qNDQ/edit?usp=sharing`}
        lessonDownload="./prepDownloads/prep_lesson6.zip"
      >
      </PREPLesson>
    </>
  );
}

export default PREPLesson6;
