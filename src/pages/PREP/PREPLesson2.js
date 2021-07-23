import React from "react";

import PREPLesson from "./Lesson";

function PREPLesson2() {
    return (
      <PREPLesson 
        header="Python Syntax"
        description="We're starting this year's course with Python! We're aware that some of you are starting with Snap!
        in CS10, but no need to worry! Keep in mind that the actual language we're using doesn't matter all the much, 
        what we're trying to teach here are features that are common to every programming language. This is a skill that will
        be useful for both CS10 and CS61A. :)"
        slideSrc={`https://docs.google.com/presentation/d/e/2PACX-1vT4buFB6NV7iMWVAY4IziZE6ZKLoZEOATn6Hmusg0x8Mq2AmeLo0R4oB-itT2deqESoRmXCSHh3MZHa/embed?start=false&loop=false&delayms=3000`}
        prevLesson=""
        nextLesson=""
      />
    )
}

export default PREPLesson2;
