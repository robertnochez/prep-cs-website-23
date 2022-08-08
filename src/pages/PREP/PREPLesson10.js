import React from "react";

import PREPLesson from "./Lesson";

function PREPLesson10() {
    return (
        <PREPLesson
          header="Recursion Practice"
          description="This is a day dedicated to extra recursion practice since practice is a very useful way to get a clear 
          understanding of things. We will talk about the Recursive Leap of Faith and further review practice problems which 
          require recursive solutions."
          slideSrc={`https://docs.google.com/presentation/d/1sP262-5tTVqSEXDxZK0hj-uU9nkZls69yn5KUSArm1w/embed?start=false&loop=false&delayms=3000`}
          prevLesson={null}
          nextLesson=""
          slideLink="https://docs.google.com/presentation/d/1sP262-5tTVqSEXDxZK0hj-uU9nkZls69yn5KUSArm1w/edit?usp=sharing"
          lessonDownload="./prepDownloads/prep_lesson10.zip"
          videoSrc={``}
        />
    )
}

export default PREPLesson10;
