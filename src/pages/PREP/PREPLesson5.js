import React from "react";

import PREPLesson from "./Lesson";

function PREPLesson5() {
    return (
        <PREPLesson
          header="Control: The 'While' Loop"
          description=" The while loop is a great addition to any coder’s toolbox. In this lesson we will introduce the while
          loop: how it works and why we would include them in our code with practice problems to follow up."
          slideSrc={`https://docs.google.com/presentation/d/e/2PACX-1vRdU8YMN8JVxd4xFE6Wbs2GTR33mRv6094Trrfsu4QrS0OPH0ReLLEIuKf7jcUfug0tOOkrt-QnUmLC/embed?start=false&loop=false&delayms=3000`}
          prevLesson={null}
          nextLesson=""
          lessonDownload="./prepDownloads/prep_lesson5.zip"
        />
    )
}

export default PREPLesson5;
