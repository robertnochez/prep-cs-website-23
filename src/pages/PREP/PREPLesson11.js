import React from "react";

import PREPLesson from "./Lesson";

function PREPLesson11() {
    return (
        <PREPLesson
          header="Recursion Practice"
          description="More recursion practice! This lesson includes the examples repeat-digits, ping-pong, and compress."
          slideSrc={`https://docs.google.com/presentation/d/e/2PACX-1vTT5NPR5C8z75JsKh6OEsml7FhXhPRm7AMQF-SE0SGOIlSKj236Pbz7whKZYbLOSvduL01lKPtyB-dr/embed?start=false&loop=false&delayms=3000`}
          prevLesson={null}
          nextLesson=""
          slideLink="https://docs.google.com/presentation/d/1ZOwdl71_wb0Kykwi2glBSVSzk0NNKvF6kCHQFc9y7C8/edit?usp=sharing"
          lessonDownload="./prepDownloads/prep_lesson11.zip"
        />
    )
}

export default PREPLesson11;
