import React from "react";

import PREPLesson from "./Lesson";
import CodeBlock from "../../components/CodeBlock";
import { Header } from "semantic-ui-react";

function PREPLesson10() {
    return (
        <PREPLesson
          header="Linked Lists"
          description="Linked lists, doubly linked lists, and circularly linked lists."
          slideSrc={`https://docs.google.com/presentation/d/1wGiAR2Yfib-BBFBVXqkLc1kDAJA3ZL1rcW5fIF8p_Ts/embed?start=false&loop=false&delayms=3000`}
          prevLesson={null}
          nextLesson=""
          slideLink="https://docs.google.com/presentation/d/1wGiAR2Yfib-BBFBVXqkLc1kDAJA3ZL1rcW5fIF8p_Ts/edit?usp=sharing"
          lessonDownload="./prepDownloads/prep_lesson8.zip"
          videoSrc={``}
        >
        <Header as={"h3"}>Practice Problem Solutions:</Header>
        </PREPLesson>
    )
}

export default PREPLesson10;
