import React from "react";

import PREPLesson from "./Lesson";

function PREPLesson9() {
    return (
        <PREPLesson
          header="Recursion"
          description="Recursion is a very important topic in computer science, and it can be tricky at first! Recursion is essentially
          when a function calls itself in its body. All three of us struggled (and still struggle!) with recursion at some point,
          and by far the most important step one can take to master it is to practice continously. Subsequently, we'll go over some
          practice in the second half of this lesson."
          slideSrc={`https://docs.google.com/presentation/d/e/2PACX-1vQgsTEgtHfQy4spy13gpH2pSf0jH2Vp9P0Fuphg0sRJHbnnV1xDTfYXNsQtE2g_74-ZWfg9vMGn3nf-/embed?start=false&loop=false&delayms=3000`}
          prevLesson={null}
          nextLesson=""
        />
    )
}

export default PREPLesson9;
