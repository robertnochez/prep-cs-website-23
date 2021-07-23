import React from "react";

import PREPLesson from "./Lesson";

function PREPLesson3() {
    return (
        <PREPLesson 
        header="Functions and If-Statements"
        description="This lesson explores two fundamental building blocks of computer programming. Functions allow you to
        abstract away computation, so you don't need to repeat yourself over and over again. What the if-statement allows you
        to do is make your code dynamic. Instead of just displaying data types to a user, you can now tell the computer what to do with 
        these, and how they should determine what a user sees. :)"
        slideSrc={`https://docs.google.com/presentation/d/e/2PACX-1vQz89eLN_PxZd94zgRAeotYg3dFyob3dFV1NYmP2jzG9hqKJ0b871Y4mpXMjutIeXLZSVSRM5GlZgbT/embed?start=false&loop=false&delayms=3000`}
        prevLesson=""
        nextLesson=""
        />
    )
}

export default PREPLesson3;
