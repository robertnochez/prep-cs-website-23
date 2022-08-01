import React from "react";

import PREPLesson from "./Lesson";

function PREPLesson4() {
    return (
        <PREPLesson
          header="Control"
          description="This lesson expands on if-statements by adding on elif and else. After the examples of the if-elif-else 
          control block we will seek help from environment diagrams. "
          slideSrc={`https://docs.google.com/presentation/d/1tYj55paUcDWMzwKnX1XXUodm_fFnL9AmHrTTpK7MgMk/embed?start=false&loop=false&delayms=3000`}
          prevLesson={null}
          nextLesson=""
          videoSrc={``}
          lessonDownload="./prepDownloads/prep_lesson4.zip"
          slideLink={`https://docs.google.com/presentation/d/1tYj55paUcDWMzwKnX1XXUodm_fFnL9AmHrTTpK7MgMk/edit?usp=sharing`}
         > </PREPLesson>
  
  )
        
}

export default PREPLesson4;
