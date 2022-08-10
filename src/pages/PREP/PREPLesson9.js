import React from "react";

import PREPLesson from "./Lesson";
import CodeBlock from "../../components/CodeBlock";
import { Header } from "semantic-ui-react";


function PREPLesson9() {
  return (
    <PREPLesson
      header="Recursion"
      description=""
      slideSrc={`https://docs.google.com/presentation/d/1j6i3twWef3Mb6fxLHK49cQKUx6t5d3joldNiTO42tJI/embed?start=false&loop=false&delayms=3000`}
      prevLesson={null}
      nextLesson=""
      slideLink="https://docs.google.com/presentation/d/1j6i3twWef3Mb6fxLHK49cQKUx6t5d3joldNiTO42tJI/edit?usp=sharing"
      lessonDownload="./prepDownloads/Spotify.py"
      videoSrc={``}
    >
    </PREPLesson>
  );
}

export default PREPLesson9;
