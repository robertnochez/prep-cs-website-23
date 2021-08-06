import React from "react";

import PREPLesson from "./Lesson";
import CodeBlock from "../../components/CodeBlock";
import { Header } from "semantic-ui-react";


function PREPLesson9() {
  return (
    <PREPLesson
      header="Recursion"
      description="Recursion is a very important topic in computer science, and it can be tricky at first! Recursion is essentially
          when a function calls itself in its body. All three of us struggled (and still struggle!) with recursion at some point,
          and by far the most important step one can take to master it is to practice continously. Subsequently, we'll go over some
          practice in the second half of this lesson."
      slideSrc={`https://docs.google.com/presentation/d/e/2PACX-1vQgsTEgtHfQy4spy13gpH2pSf0jH2Vp9P0Fuphg0sRJHbnnV1xDTfYXNsQtE2g_74-ZWfg9vMGn3nf-/embed?start=false&loop=false&delayms=3000`}
      prevLesson={null}
      nextLesson=""
      slideLink="https://docs.google.com/presentation/d/1WvbeP9aJ__6h1V7jSOXIMbfclHczygiEMflrcXmqJSs/edit?usp=sharing"
      lessonDownload="./prepDownloads/prep_lesson9.zip"
      videoSrc={`https://www.youtube.com/embed/hFAgvMiIkHI`}
    >

      <Header as={"h3"}>Practice Problem Solutions:</Header>

      <CodeBlock
        code={`
"""
NOTE: THERE WERE ERRORS IN THE DOCTESTS. IF YOUR CODE IS OUTPUTTING THE RIGHT THING
THEN IT IS MOST LIKELY RIGHT. CHECK DOWN BELOW FOR THE ERRORS. THERE ARE COMMENTS
IN THE DOCSTRINGS WHERE THE ERRORS WERE.
"""


fn = lambda x: lambda y: pow(x, y)

def map_recursive(start, end, f):
    """Implement map_to_range from Tuesday's lesson recursively
    
    >>> map_recursive(0, 10, fn(2))         ## there was accidentally two 128's in doctest
    1
    2
    4
    8
    16
    32
    64
    128        
    256
    512
    """
    if start == end:
        return
    print(f(start))
    return map_recursive(start + 1, end, f)


def fib(i):
    """Return the i-th term of the Fibonacci Sequence.
    
    >>> fib(2)    # --> 0 + 1
    1
    >>> fib(5)    # --> 2 + 3
    5
    >>> fib(10)   # --> 21 + 34
    55
    """
    if i == 0:
        return 0
    elif i == 1:
        return 1
    else:
        return fib(i - 1) + fib(i - 2)


def factorial_hof(n):
    """Now that we have defined factorial using iteration and recursion,
    implement it using a higher order function. You are not allowed to use
    operators outside of the function calls. 
    --> Think about what we can do to store a counter

    >>> factorial_hof(5)
    120
    >>> factorial_hof(6) ## error in this doctect
    720
    """
    def helper(x, y):
        if x == 0:
            return y
        else:
            return helper(x - 1, y * x)
    return helper(n, 1)
`} 
      />

    
    </PREPLesson>
  );
}

export default PREPLesson9;
