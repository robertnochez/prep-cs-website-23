import React from "react";

import PREPLesson from "./Lesson";

function PREPLesson4() {
    return (
        <PREPLesson
          header="Control"
          description="This lesson expands on if-statements by adding on elif and else. After the examples of the if-elif-else 
          control block we will seek help from environment diagrams. "
          slideSrc={`https://docs.google.com/presentation/d/1tYj55paUcDWMzwKnX1XXUodm_fFnL9AmHrTTpK7MgMk/edit?usp=sharing`}
          prevLesson={null}
          nextLesson=""
          videoSrc={``}
          lessonDownload="./prepDownloads/prep_lesson4.zip"
          slideLink={`https://docs.google.com/presentation/d/1tYj55paUcDWMzwKnX1XXUodm_fFnL9AmHrTTpK7MgMk/edit?usp=sharing`}
         > 
        <p>Here are links to the Python Tutor solutiions for the in class examples:</p>
        <p>
          <Link to="https://pythontutor.com/render.html#code=x%20%3D%203%0Ay%20%3D%202%0Az%20%3D%20'six'%0A%0Adef%20divideTwo%28num1,%20num2%29%3A%0A%20%20%20%20return%20num2//%20num1%0A%0Az%20%3D%20x%20*%20y%0AfReturn%20%3D%20divideTwo%28x,%20z%29&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false">
            Lesson 4 In Class: Example 1</Link>
        </p>
        <p>
          <Link to="https://pythontutor.com/render.html#code=def%20cubeNum%28x%29%3A%0A%20%20%20%20return%20x%20*%20squareNum%28x%29%0A%20%20%20%20%0Adef%20squareNum%28y%29%3A%0A%20%20%20%20return%20y%20*%20oneTimes%28y%29%0A%20%20%20%20%0Adef%20oneTimes%28z%29%3A%0A%20%20%20%20return%201%20*%20z%0A%20%20%20%20%0AcubeNum%284%29%3B&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false">
            Lesson 4 In Class: Example 2</Link>
        </p>
        <p>
          <Link to="https://pythontutor.com/render.html#code=gem,%20stone%20%3D%20'sapphires',%20'diamonds'%0AdiaTotal,%20sapTotal,%20rubTotal%20%3D%2045,%2035,%200%0A%0Adef%20addStudents%28blue,%20white,%20they,%20them%29%3A%0A%20%20%20%20max%20%3D%2099%0A%20%20%20%20all%20%3D%20they%20%2B%20them%0A%20%20%20%20if%20all%20%3E%2099%3A%0A%20%20%20%20%20%20%20%20gemstones%20%3D%20'too%20many!'%0A%20%20%20%20elif%20all%20%3C%20101%3A%0A%20%20%20%20%20%20%20%20gemstones%20%3D%20addNames%28blue,%20white%29%0A%20%20%20%20print%28gemstones%29%0A%20%20%20%20return%20moreGems%28%29%0A%20%20%20%20%0Adef%20addNames%28oh,%20no%29%3A%0A%20%20%20%20return%20oh%20%2B%20'%20%26%20'%20%2B%20no%20%0A%20%20%20%20%0Adef%20moreGems%28%29%3A%0A%20%20%20%20global%20rubTotal%0A%20%20%20%20jewel,%20treasure%20%20%3D%20'rubies',%20'emeralds'%0A%20%20%20%20rubTotal,%20emeTotal%20%3D%2012,%2090%0A%20%20%20%20more%20%3D%20rubTotal%20%2B%20emeTotal%0A%20%20%20%20print%28more%29%0A%20%20%20%20return%20gem%20%2B%20'%20%26%20'%20%2B%20stone%20%2B%20'%20%26%20'%20%2B%20jewel%20%2B%20'%20%26%20'%20%2B%20treasure%0A%20%20%20%20%0A%20%20%20%20%0AaddStudents%28gem,%20stone,%20diaTotal,%20sapTotal%29&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false">
            Lesson 4 In Class: Example 3</Link>
        </p>
  </PREPLesson>
  )
        
}

export default PREPLesson4;
