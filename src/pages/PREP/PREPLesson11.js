import React from "react";

import PREPLesson from "./Lesson";

function PREPLesson11() {
    return (
        <PREPLesson
          header="Recursion Practice"
          description="More recursion practice! This lesson includes the examples repeat-digits, ping-pong, and compress."
          slideSrc={`https://docs.google.com/presentation/d/1mJcWZGugDJvWAfoYe2AfRolY5wJZdFP0p8YCbwNkEEQ/embed?start=false&loop=false&delayms=3000`}
          prevLesson={null}
          nextLesson=""
          slideLink="https://docs.google.com/presentation/d/1mJcWZGugDJvWAfoYe2AfRolY5wJZdFP0p8YCbwNkEEQ/edit?usp=sharing"
          lessonDownload="./prepDownloads/prep_lesson11.zip"
          videoSrc={``}
        />
    )
}

export default PREPLesson11;
