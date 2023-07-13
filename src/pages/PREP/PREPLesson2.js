import React from "react";

import PREPLesson from "./Lesson";

function PREPLesson2() {
  return (
    <PREPLesson
      header="Datatypes and Operands"
      description="An introduction to Python, including data types and its basic syntax. Definitions for 
      different python operators and how to evaluate expressions using orders of operations, analogies, and examples. Keep 
      in mind that the actual language we're using doesn't matter too much, since what we're trying to teach here are features
      that are common to every programming language. This is a skill that will be useful for both CS10 and CS61A. :o"
      slideSrc={`https://docs.google.com/presentation/d/17f4Hyo70rI9JVgS8WHwHVrM-AYXLirGiKTyUdDvdkho/embed?start=false&loop=false&delayms=3000`}
      prevLesson=""
      nextLesson=""
      released={true}
      videoSrc=""
      slideLink={`https://docs.google.com/presentation/d/17f4Hyo70rI9JVgS8WHwHVrM-AYXLirGiKTyUdDvdkho/edit?usp=sharing`}
    />
  );
}

export default PREPLesson2;
