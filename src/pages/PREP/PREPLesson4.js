import React from "react";

import PREPLesson from "./Lesson";
import CodeBlock from "../../components/CodeBlock";
import { Header } from "semantic-ui-react";

function PREPLesson4() {
    return (
        <PREPLesson
          header="Control"
          description="This lesson expands on if-statements by adding on elif and else. After the examples of the if-elif-else 
          control block we will seek help from environment diagrams. "
          slideSrc={`https://docs.google.com/presentation/d/1tYj55paUcDWMzwKnX1XXUodm_fFnL9AmHrTTpK7MgMk/embed?start=false&loop=false&delayms=3000`}
          prevLesson={null}
          nextLesson=""
          videoSrc={``}
          lessonDownload="./prepDownloads/prep_lesson4.zip"
          slideLink={`https://docs.google.com/presentation/d/1tYj55paUcDWMzwKnX1XXUodm_fFnL9AmHrTTpK7MgMk/edit?usp=sharing`}
         >
      <Header as={"h3"}>Practice Problem Solutions:</Header>

  <CodeBlock
          code={`
##############################################
######### PRACTICE PROBLEM SOLUTIONS #########
##############################################


from tests import run_tests

def quadType(a, b, c, d):
    """ Identify the type of the given quadrilateral. If at there are 2 groups of parallel
    sides, print "I am a rectangle!", if all the sides are the same print "I am a square!".
    If any of the sides are equal to zero print: "Am I really a quadrilateral?", else print: 
    "I don't know what I am!" 

    >>> quadType(6, 9, 6, 9)
    I am a rectangle!
    >>> quadType(1, 7, 1, 7)
    I am a rectangle!
    >>> quadType(4, 4, 4, 4)
    I am a square!
    >>> quadType(4, 3, 2, 0)
    I don't know what I am!
    >>> quadType(4, 3, 2, 1)
    Am I really a quadrilateral?
    """

    if a == b == c == d:
        print("I am a square!")
    elif (a == c) and (b == d):
        print("I am a rectangle!")
    elif a == 0 or b == 0 or c == 0 or d == 0:
        print("I don't know what I am!")
    else:
        print("Am I really a quadrilateral?")

def oddOrEven(x):
    """Begin at a given integer number. If it is even, divide by two and subtract 1. 
    If the number is odd, multiply it by 3 and add 4. 

    >>> oddOrEven(4)
    1
    >>> oddOrEven(3)
    13
    """

    if x % 2 == 0:
        return (x // 2) - 1
    else:
        return x * 3 + 4

`}
        /> 
        </PREPLesson>
  )
        
}

export default PREPLesson4;
