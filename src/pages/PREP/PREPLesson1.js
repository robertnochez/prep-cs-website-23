import React from "react";

import PREPLesson from "./Lesson";

function PREPLesson1() {
  return (
    <PREPLesson
      header="Welcome to PREP!"
      description="Hello everyone! Welcome to PREP CS 2022. Today, we'll introduce the CS instructors, show the set up
        for the class, and provide logistics. We will go over how to download Python, the text editor, and how to use the
        terminal to create folders and organize files."
      slideSrc={`https://docs.google.com/presentation/d/1BAIKx_6XbXPcNkqdv66lljBvRONQEJ6FRVYRAuEvwiY/embed?start=false&loop=false&delayms=3000`}
      prevLesson={null}
      nextLesson=""
      released={true}
      videoSrc=""
      slideLink={`https://docs.google.com/presentation/d/1BAIKx_6XbXPcNkqdv66lljBvRONQEJ6FRVYRAuEvwiY/edit?usp=sharing`}
    />
  );
}

export default PREPLesson1;
