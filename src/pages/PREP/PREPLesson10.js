import React from "react";

import PREPLesson from "./Lesson";

function PREPLesson10() {
    return (
        <PREPLesson
          header="Recursion Practice"
          description="This is a day dedicated to extra recursion practice since practice is a very useful way to get a clear 
          understanding of things. We will talk about the Recursive Leap of Faith and further review practice problems which 
          require recursive solutions."
          slideSrc={`https://docs.google.com/presentation/d/e/2PACX-1vTRlbGbTBh60VeI4P2Alf25MWV9sLqdIFuF0uQF9KWot049rqfQ0O0Ewn7G0dtAJ1QlGWxhbEM4U2le/embed?start=false&loop=false&delayms=3000`}
          prevLesson={null}
          nextLesson=""
        />
    )
}

export default PREPLesson10;
