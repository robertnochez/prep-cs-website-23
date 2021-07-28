import React from "react";
import "../../App.css";

import MainNav from "../../components/MainNav";
import Footer from "../../components/Footer";
import Slide from "../../components/Slide";

import { Header, Button } from "semantic-ui-react";

function Lesson4() {
  return (
    <div className="wmcode-page">
      <MainNav />
      <div>
        <Header as={"h1"}>Lesson 4 - Conditional Statements </Header>
        <a href="./wmcodeDownloads/wm_lesson4.zip" download>
          <Button basic color="blue">
            Download Lesson
          </Button>
        </a>
        <br /> <br />
        <br />
        <Slide src="https://docs.google.com/presentation/d/e/2PACX-1vQTyWrA7EKOhqeJUr7U9WH0S0z-_qlvt8Sog_tuSBQc9Y6AJ3PYw8e554ZwHaDLplUrwmNEXeO9PHVA/embed?start=false&loop=false&delayms=3000" />
      </div>

      <div>
        <br />
        <h2>Lesson Content:</h2>
        <h3>Conditional Statements - Motivation</h3>
        When solving any problem, we, as humans will almost always go through a
        simple process in our heads: going through all possible outcomes of a
        situation. Let’s follow this simple situation that we have all gone
        through:
        <br />
        <br />
        You are trying to figure out what to wear on a given day, by looking at
        the weather. What process do you go through, implicitly?
        <br />
        <h4>Step 1 - The Easiest Solution</h4>
        For any given day, we as Californians, will first evaluate the easiest
        solution. Before looking outside, the first step we take will be
        something like:
        <pre>
          If it is 75° or hotter:{"\n"}Then I don’t need to wear a sweater. I
          can go out in a t-shirt.
        </pre>
        <h4>Step 2 - The Next Best Solution</h4>
        Then, having not looked outside yet, we will look for the next easiest
        solution to what to wear. If we get to this point, we will know that it
        is not sunny outside, so our new evaluation will be something like:
        <pre>
          Else, if it’s colder than 75°, but 65° or warmer:{"\n"}Then I’ll put
          on a hoodie. The weather won’t be that bad.
        </pre>
        <h4>Step 3 - The Catch-All Solution</h4>
        Having gone through our best-possible outcomes, we will have to default
        to one solution. Because it is the catch-all does not mean that it’s a
        bad solution; it means that we will always have a solution for all
        possible situations.
        <pre>
          Otherwise, if it’s less than 65° outside:{"\n"}Then I’ll put on a
          jacket, to be ready for any kind of weather.
        </pre>
        <h4>Does This Sound Familiar?</h4>
        This is the exact same problem-solving strategy that we all go through,
        implicitly. We don’t necessarily do it consciously, but we go through
        each of these steps.
        <i>
          Python wants us to EXPLICITLY tell it when to go into any of these
          situations (Python calls them “cases”).
        </i>
        <br />
        <h4>Let's Put it All Together</h4>
        Putting together our example, we get this chunk of execution:
        <pre>
          If it is 75° or hotter:{"\n"}
          {"    "}Then I don’t need to wear a sweater. I can go out in a
          t-shirt.{"\n"}Else, if it’s colder than 75°, but 65° or warmer:{"\n"}
          {"    "}Then I’ll put on a hoodie. The weather won’t be that bad.
          {"\n"}Otherwise, if it’s less than 65° outside:{"\n"}
          {"    "}Then I’ll put on a jacket, to be ready for any kind of
          weather.
        </pre>
        <h3>How Do We Get Python to Understand This?</h3>
        <h4>
          Step 1: The <b style={{ color: "blue" }}>if</b> Statement
        </h4>
        The <b style={{ color: "blue" }}>if</b> statement is the most basic
        element of control flow in Python, and is essential for catching special
        cases in any program.
        <br />
        In our example, the most basic solution for our example is{" "}
        <b style={{ color: "blue" }}>if</b> the weather is 75° or warmer.{" "}
        <b style={{ color: "blue" }}>if</b> this is true, then there is no need
        to evaluate the other options; we found the best one already.
        <br />
        <h4>
          Step 2: The <b style={{ color: "blue" }}>else if</b> Statement
        </h4>
        The <b style={{ color: "blue" }}>elif</b> statement can be thought of as
        the “next best option” when trying to find a solution. It is short for
        “else if.”
        <br />
        In our example, it might not be the best that it is less than 75°, but,
        being 65° or warmer is actually not that bad. So, we go with that one;
        our solution has been reached.
        <br />
        <h4>
          Step 3: The <b style={{ color: "blue" }}>else</b> Statement
        </h4>
        The else statement is the “catch-all” solution, when trying to find one.
        We reach this option after exhausting all possible solutions, and are
        confident that it will work to cover any situation.
        <br />
        In our example, it’s unfortunate that the weather outside would be less
        than 65°, but we know, and are confident that wearing a jacket will work
        for ANY weather below that threshold. And with that, we have found a
        solution.
        <h3>The Python Translation of This Form of Thinking</h3>
        As we discussed last week, Python speaks and understands humans in terms
        of functions and their output. We could write a function with the very
        same process that we went through to choose what to wear based on the
        weather.
        <br />A valid name, parameter, docstring, and body for this function is:
        <pre>
          def choose_clothes(temperature):{"\n"}
          {"    "}"""Takes in the temperature, in degrees Fahrenheit, and makes
          a suggestion on what to wear.{"\n"}
          {"\n"}
          {"    "}&gt;&gt;&gt; choose_clothes(80){"\n"}
          {"    "}'You do not need a sweater. A t-shirt will be fine.'{"\n"}
          {"    "}&gt;&gt;&gt; choose_clothes(-32){"\n"}
          {"    "}'You should wear a jacket to be ready for any weather.'{"\n"}
          {"    "}"""{"\n"}
          {"    "}response = "This will be changed."{"\n"}
          {"    "}if temperature &gt;= 75:{"\n"}
          {"        "}response = "You do not need a sweater. A t-shirt will be
          fine."{"\n"}
          {"    "}elif temperature &gt;= 65:{"\n"}
          {"        "}response = "The weather will not be that bad. Wear a
          hoodie."{"\n"}
          {"    "}else:{"\n"}
          {"        "}response = "You should wear a jacket to be ready for any
          weather."{"\n"}
          {"    "}return response
        </pre>
        <h3>Final Notes</h3>
        We have gone over 3 special Python statements: if, elif, and else. Some
        things to remember:
        <ul>
          <li>
            You can use multiple if statements if you so desire. It is
            aesthetically nicer and better practice to use elif statements,
            though.
          </li>
          <li>
            You can use as many elif statements as you need. You may need only
            one; you may need 10; you may not need any at all.
          </li>
          <li>
            You should always have an else block in your conditional statements.
            This is to make sure that you always have a solution.
          </li>
        </ul>
        <h1>...</h1>
      </div>

      <Footer />
    </div>
  );
}

export default Lesson4;
