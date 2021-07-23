import React from "react";

import PREPLesson from "./Lesson";

function PREPLesson12() {
    return (
        <PREPLesson
          header="Trees"
          description="Hello everyone! Welcome to PREP CS 2021. This lesson is meant to be a chill one and is meant to get y'all
          situated for later lessons. Here, we'll introduce ourselves, and setup a coding environment. Glad to have you here!"
          slideSrc={`https://docs.google.com/presentation/d/e/2PACX-1vQWaia1luX6xwuNUsII5fas2NdwR6SE4TgiiU5luCpMBQPHw5SRhJ2yVTi_Opu5iZkbmc16PKt5azX2/embed?start=false&loop=false&delayms=3000`}
          prevLesson={null}
          nextLesson=""
        />
    )
}

export default PREPLesson12;
