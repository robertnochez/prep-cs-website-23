import React from "react";

import PREPLesson from "./Lesson";

function PREPLesson3() {
    return (
        <PREPLesson 
        header="Functions and If-Statements"
        description="Today's lesson will include how assignments are made. It will also focus on functions: their
        anatomy, how to write them, and when they are necessary. We will also introduce if-statements: their 
        structure and examples. "
        slideSrc={`https://docs.google.com/presentation/d/e/2PACX-1vQz89eLN_PxZd94zgRAeotYg3dFyob3dFV1NYmP2jzG9hqKJ0b871Y4mpXMjutIeXLZSVSRM5GlZgbT/embed?start=false&loop=false&delayms=3000`}
        prevLesson=""
        nextLesson=""
        videoSrc={'https://www.youtube.com/embed/GbNe2si14sg'}
        slideLink={`https://docs.google.com/presentation/d/1fPmNOmagso5gyqxniew7uQE5onsu3bbUblHCHN-WbvM/edit?usp=sharing`}
        />
    )
}

export default PREPLesson3;
