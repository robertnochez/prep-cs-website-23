import React from "react";

import PREPLesson from "./Lesson";

function PREPLesson1() {
    return (
      <PREPLesson
        header="Welcome to PREP!"
        description="Hello everyone! Welcome to PREP CS 2021. Today, we'll introduce the CS instructors, show the set up
        for the class, and provide logistics. We will go over how to download Python, the text editor, and how to use the
        terminal to create folders and organize files."
        slideSrc={`https://docs.google.com/presentation/d/e/2PACX-1vSx-nn2Z3LpzeM-J9xufvDpZms5n8SdB1eZn0_JrYmADSb2_sdN4p_g_-A0dBMzkf9la6_Lgr7p3-my/embed?start=false&loop=false&delayms=3000`}
        prevLesson={null}
        nextLesson=""
        lessonDownload="./prepDownloads"
        released={true}
      />
    )
}

export default PREPLesson1;
