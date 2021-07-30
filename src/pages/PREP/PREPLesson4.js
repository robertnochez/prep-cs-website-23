import React from "react";

import PREPLesson from "./Lesson";

function PREPLesson4() {
    return (
        <PREPLesson
          header="Control"
          description="This lesson expands on if-statements by adding on elif and else. After the examples of the if-elif-else 
          control block we will seek help from environment diagrams. "
          slideSrc={`https://docs.google.com/presentation/d/e/2PACX-1vQvchYex4y1esn7nbRjOPzfH2NdtvoPEvNqjEr74cDGj5ajb5lomUR4SML-JYVc4E4mMt__w99bsNGR/embed?start=false&loop=false&delayms=3000`}
          prevLesson={null}
          nextLesson=""
          lessonDownload="./prepDownloads/prep_lesson4.zip"
        />
    )
}

export default PREPLesson4;
