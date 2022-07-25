import React from "react";

import PREPLesson from "./Lesson";

function PREPLesson2() {
  return (
    <PREPLesson
      header="Python Syntax"
      description="An introduction to Python, including data types and its basic syntax. Definitions for 
      different python operators and how to evaluate expressions using orders of operations, analogies, and examples. Keep 
      in mind that the actual language we're using doesn't matter too much, since what we're trying to teach here are features
      that are common to every programming language. This is a skill that will be useful for both CS10 and CS61A. :o"
      slideSrc={`https://docs.google.com/presentation/d/e/2PACX-1vT4buFB6NV7iMWVAY4IziZE6ZKLoZEOATn6Hmusg0x8Mq2AmeLo0R4oB-itT2deqESoRmXCSHh3MZHa/embed?start=false&loop=false&delayms=3000`}
      prevLesson=""
      nextLesson=""
      released={true}
      videoSrc="https://www.youtube.com/embed/j1iVh5eHGxI"
      slideLink={`https://docs.google.com/presentation/d/1PBOv_KWu_MJi5Ax-tSFCiTR0yz6PxNxAxzyoIx9M284/edit?usp=sharing`}
    />
  );
}

export default PREPLesson2;
