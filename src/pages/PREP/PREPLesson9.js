import React from "react";

import PREPLesson from "./Lesson";
import CodeBlock from "../../components/CodeBlock";
import { Header } from "semantic-ui-react";


function PREPLesson9() {
  return (
    <PREPLesson
      header="HOFs and Lambdas"
      description="Today's lesson focuses on Higher Order Functions (or HOFs for short)! These are functions that either return another function
       or pass in a function as a parameter. We'll also introduce a very specific function called a lambda function. 
       These can be used to simplify Higher Order Functions"
      slideSrc={`https://docs.google.com/presentation/d/1j6i3twWef3Mb6fxLHK49cQKUx6t5d3joldNiTO42tJI/embed?start=false&loop=false&delayms=3000`}
      prevLesson={null}
      nextLesson=""
      slideLink="https://docs.google.com/presentation/d/1j6i3twWef3Mb6fxLHK49cQKUx6t5d3joldNiTO42tJI/edit?usp=sharing"
      videoSrc={``}
    >
    
    </PREPLesson>
  );
}

export default PREPLesson9;
