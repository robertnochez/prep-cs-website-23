import React from "react";

import PREPLesson from "./Lesson";
import CodeBlock from "../../components/CodeBlock";
import { Header } from "semantic-ui-react";

function PREPLesson10() {
    return (
        <PREPLesson
          header="Recursion Practice"
          description="This is a day dedicated to extra recursion practice since practice is a very useful way to get a clear 
          understanding of things. We will talk about the Recursive Leap of Faith and further review practice problems which 
          require recursive solutions."
          slideSrc={`https://docs.google.com/presentation/d/1sP262-5tTVqSEXDxZK0hj-uU9nkZls69yn5KUSArm1w/embed?start=false&loop=false&delayms=3000`}
          prevLesson={null}
          nextLesson=""
          slideLink="https://docs.google.com/presentation/d/1sP262-5tTVqSEXDxZK0hj-uU9nkZls69yn5KUSArm1w/edit?usp=sharing"
          lessonDownload="./prepDownloads/prep_lesson10.zip"
          videoSrc={``}
        />
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
    )
}

export default PREPLesson10;
