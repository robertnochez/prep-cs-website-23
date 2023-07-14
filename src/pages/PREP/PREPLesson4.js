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
          slideSrc={`https://docs.google.com/presentation/d/1e46Wl2pDMTqtcwZCtc9vldGDNGB0O3MSXZYeOvVRDA4/embed?start=false&loop=false&delayms=3000`}
          prevLesson={null}
          nextLesson=""
          videoSrc={``}
          lessonDownload="./prepDownloads/prep_lesson4.zip"
          slideLink={`https://docs.google.com/presentation/d/1e46Wl2pDMTqtcwZCtc9vldGDNGB0O3MSXZYeOvVRDA4/edit?usp=sharing`}
         >
        <Header as={"h3"}>Links to Environment Diagrams</Header>
        <a href="https://pythontutor.com/render.html#code=var%20%3D%203%0Adef%20foo%28bar%29%3A%0A%20%20%20%20var%20%3D%202%0A%20%20%20%20if%20bar%3A%0A%20%20%20%20%20%20%20%20print%28%22bar%20is%20valid%22%29%0A%20%20%20%20%20%20%20%20return%20bar%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20print%28%22bar%20is%20invalid%22%29%0A%20%20%20%20%20%20%20%20return%20bar%0A%20%20%20%0Adef%20hello%28world%29%3A%0A%20%20%20%20global%20var%0A%20%20%20%20var%20%3D%207%0A%20%20%20%20if%20%28world%29%3A%0A%20%20%20%20%20%20%20%20return%20var%0A%20%20%20%20elif%20world%20%3D%3D%208%3A%0A%20%20%20%20%20%20%20%20return%20%22world%20is%208%22%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20var%20%3D%207%0A%20%20%20%20%20%20%20%20return%20world%0A%20%0Adef%20go%28bears%29%3A%0A%20%20%20%20if%20bears%3A%0A%20%20%20%20%20%20%20%20return%20%22bears%20is%20valid%22%0A%20%20%20%20elif%20bears%20%3D%3D%20var%3A%0A%20%20%20%20%20%20%20%20return%20%22bears%20is%20var%22%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20return%20bears%0A%20%0Ax%20%3D%20foo%283%29%0Afoo%28None%29%0Ahello%288%29%0Ay%20%3D%20go%28%5B%5D%29%0Ago%2819%29&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false">
          Medium.py Environment Diagram, </a>
        <a href="https://pythontutor.com/render.html#code=from%20operator%20import%20add,%20sub,%20mul,%20mod%20%20%20%20%20%0A%0Ax,%20y%20%3D%20%22%22,%204%0A%0Adef%20hello%28world%29%3A%0A%20%20%20%20global%20add%20%20%20%20%20%20%20%20%20%20%23%20reference%20to%20global%20variable%20instead%20of%20local%0A%20%20%20%20if%20world%3A%0A%20%20%20%20%20%20%20%20add%20%3D%20sub%0A%20%20%20%20%20%20%20%20return%20we%28add%29%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20add%20%3D%20mul%0A%20%20%20%20%20%20%20%20return%20they%28add%29%0A%0Adef%20we%28outside%29%3A%0A%20%20%20%20global%20mul,%20mod%0A%20%20%20%20if%20not%20outside%20%3D%3D%20add%3A%0A%20%20%20%20%20%20%20%20mul%20%3D%20outside%0A%20%20%20%20%20%20%20%20return%20mul%0A%20%20%20%20elif%20outside%20%3D%3D%20mod%3A%0A%20%20%20%20%20%20%20%20mod%20%3D%20mul%0A%20%20%20%20%20%20%20%20return%20mod%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20print%28%22We%20happy%20outside.%22%29%0A%20%20%20%20%20%20%20%20mod%20%3D%20outside%0A%20%20%20%20%20%20%20%20return%20mod%0A%0Adef%20they%28are_bears%29%3A%0A%20%20%20%20global%20sub%20%0A%20%20%20%20if%20not%20not%20not%20are_bears%20%3D%3D%20mod%3A%0A%20%20%20%20%20%20%20%20print%28%22GO%20BEARS%20OR%20GO%20HOME!%22%29%0A%20%20%20%20%20%20%20%20sub%20%3D%20are_bears%0A%20%20%20%20elif%20not%20not%20are_bears%20%3D%3D%20add%3A%0A%20%20%20%20%20%20%20%20print%28%22THIS%20IS%20BEAR%20TERRITORY!%22%29%0A%20%20%20%20%20%20%20%20sub%20%3D%20are_bears%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20print%28%22This%20is%20the%20last%20statement%22%29%0A%20%20%20%20return%20sub%0A%0A%0Aop1%20%3D%20hello%28x%29%0Aop2%20%3D%20hello%28y%29%0A%0A%23%23%20TESTS%20%23%23%0Aprint%28op1%283,%205%29%29%0Aprint%28op2%2881,%204%29%29%0Aprint%28op1%28op2%283,%207%29,%2010%29%29%0Aprint%28add%284,%205%29%29%0Aprint%28sub%2820,%204%29%29%0Aprint%28mul%2835,%205%29%29%0Aprint%28mod%2840,%208%29%29&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false">
          Hard.py Environment Diagram</a>

      <Header as={"h3"}>Practice Problem Solutions:</Header>

 
        </PREPLesson>
  )
        
}
/*
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
        /> */

export default PREPLesson4;
