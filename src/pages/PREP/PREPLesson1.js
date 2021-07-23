import React from "react";

import PREPLesson from "./Lesson";

function PREPLesson1() {
    return (
        <PREPLesson
          header="Welcome to PREP!"
          description="Hello everyone! Welcome to PREP CS 2021. This lesson is meant to be a chill one and is meant to get y'all
          situated for later lessons. Here, we'll introduce ourselves, and setup a coding environment. Glad to have you here!"
          slideSrc={`https://docs.google.com/presentation/d/e/2PACX-1vSx-nn2Z3LpzeM-J9xufvDpZms5n8SdB1eZn0_JrYmADSb2_sdN4p_g_-A0dBMzkf9la6_Lgr7p3-my/embed?start=false&loop=false&delayms=3000`}
          prevLesson={null}
          nextLesson=""
        />
    )
}

export default PREPLesson1;
