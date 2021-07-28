import React from "react";
import "../../App.css";

import MainNav from "../../components/MainNav";
import Footer from "../../components/Footer";
import Slide from "../../components/Slide";

import { Header, Button } from "semantic-ui-react";

function Lesson2() {
  return (
    <div>
      <MainNav />
      <div className="wmcode-page">
        <Header as={"h1"}>Lesson 2 - Assignment Cont'd, and Functions</Header>
        <a href="./wmcodeDownloads/wm_lesson2.zip" download>
          <Button basic color="blue">
            Download Lesson
          </Button>
        </a>
        <br /> <br />
        <br />
        <Slide src="https://docs.google.com/presentation/d/e/2PACX-1vT4tenv432KCZyFADvjqj5kUiGWVhbVL4SjLhZdhc8_YEmTiydI0mZgXEno_9eec3WNN_RINpzDf26h/embed?start=false&loop=false&delayms=3000" />
        <div>
          <h2>Lesson Content:</h2>
          <h3>Functions:</h3>
          Functions are a way of working with unknown values, and producing a
          desired value for all combinations. Functions are instantiated by the{" "}
          <b style={{ color: "blue" }}>def</b> statement and are made up of 4
          parts -- each necessary for understandable code. They are:
          <ul>
            <li>Function Name</li>
            <li>Parameters</li>
            <li>Docstring</li>
            <li>Function Body</li>
          </ul>
          Let's write the <b style={{ color: "blue" }}>add()</b> function
          together, part by part, and then put it together at the end.
          <h3>Function Names:</h3>
          Function names are given based on what the purpose of a function is.
          If a function counts the number of students at MWA, we might call that
          function <b style={{ color: "blue" }}>count_wave_makers</b>. If we
          want a function that creates a story, we might name it{" "}
          <b style={{ color: "blue" }}>create_story</b>. Function names are
          always written in <b style={{ color: "blue" }}>"snake_case"</b>; this
          means that instead of spaces, we use underscores.
          <pre>
            this_is_written_in_snake_case{"\n"}
            {"\n"}so_is_this{"\n"}
            {"\n"}count_17th_wave{"\n"}
            {"\n"}# --&gt; These are all valid function names{"\n"}
            {"\n"}# --&gt; However, in practice, function names should be short
            so they can be referred to easily.{"\n"}
            {"\n"}# Following these guidelines, a good name for our function,
            add, is just that. The first line of our function will be:{"\n"}
            {"\n"}def add
          </pre>
          <h3>Function Parameters:</h3>
          Functions use parameters to refer to user inputs within the function
          body. Parameters make any input vague, and that is a good thing for
          writing good functions. We refer to input by using the parameters of
          the function. Parameters of any function are defined within a set of
          parenthesis, <b style={{ color: "blue" }}>()</b>, and seperated by
          commas. The statement is ended with a colon,{" "}
          <b style={{ color: "blue" }}>:</b>.
          <pre>
            # Our add() function is going to take in two parameters: <b>x</b>{" "}
            and <b>y</b>. We will refer to objects passed in using these two
            parameters.{"\n"}
            {"\n"}# So far, our function looks like this:{"\n"}
            {"\n"}def add(x, y):{"\n"}
          </pre>
          <h3>Function Docstring:</h3>
          The <b style={{ color: "blue" }}>docstring</b> of a function is where
          the description of a function goes. This text is a comment that gives
          us two things:
          <ol>
            <li>A Function Description</li>
            <ul>
              <li>
                The description tells exactly what the function should do, and
                how we should expect it to work once it is fully implemented.
                The docstring is necessary for <i>other people</i> to understand
                your code, not so much for python.
              </li>
            </ul>
            <li>Test Cases</li>
            <ul>
              <li>
                Test cases are written exactly how we'd see them in the Python
                terminal. They show us examples of how the function should work
                with different kinds of inputs.
              </li>
            </ul>
          </ol>
          <pre>
            # A valid docstring for our function,{" "}
            <b style={{ color: "blue" }}>add</b> contains a good description
            about its implementation,{"\n"}#{"       "}and provides examples,
            test cases, of how it should work. It may look like this:{"\n"}
            {"\n"}"""add is a function that takes in two numbers, x and y, and
            returns their sum{"\n"}&gt;&gt;&gt; add(3, 5){"\n"}8{"\n"}
            &gt;&gt;&gt; add(98, -12){"\n"}86{"\n"}"""{"\n"}
            {"\n"}# Putting what we have together, our function, so far, is:
            {"\n"}
            {"\n"}def add(x, y):{"\n"}
            {"    "}"""add is a function that takes in two numbers, x and y, and
            returns their sum{"\n"}
            {"    "}&gt;&gt;&gt; add(3, 5){"\n"}
            {"    "}8{"\n"}
            {"    "}&gt;&gt;&gt; add(98, -12){"\n"}
            {"    "}86{"\n"}
            {"    "}"""{"\n"}
          </pre>
          <h3>Function Body:</h3>
          The function body is where the magic of the function truly happens.
          This is where the parameters are manipulated and operations are
          executed. The key is to always refer to parameter names, and never
          specific values. If you do that, your function will only work for
          those specific values. Referring to values loosely using parameters
          allows functions to work exactly the same on any parameters.
          <br />
          <br />
          <b>NOTE:</b> The <b style={{ color: "blue" }}>return</b> statement is
          very important in functions. This is the very last thing in any
          function and it will exit the function body. Anything that you want a
          function to do needs to happen before returning.
          <pre>
            # For our function, <b style={{ color: "blue" }}>add</b>, a valid
            function body is as follows:{"\n"}
            {"\n"}sum = x + y{"     "}--&gt; parameter values x and y are summed
            together and stored in the sum variable{"\n"}return sum{"      "}
            --&gt; we return that sum and exit out of the function{"\n"}
            {"\n"}# putting our function together, we have:{"\n"}
            {"\n"}def add(x, y):{"\n"}
            {"    "}"""add is a function that takes in two numbers, x and y, and
            returns their sum{"\n"}
            {"    "}&gt;&gt;&gt; add(3, 5){"\n"}
            {"    "}8{"\n"}
            {"    "}&gt;&gt;&gt; add(98, -12){"\n"}
            {"    "}86{"\n"}
            {"    "}"""{"\n"}
            {"    "}sum = x + y{"\n"}
            {"    "}return sum{"\n"}
          </pre>
          <h3>CONGRATS! YOU JUST WROTE YOUR FIRST FUNCTION!!!</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Lesson2;
