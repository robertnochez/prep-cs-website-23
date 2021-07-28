import React from "react";
import "../../App.css";

import MainNav from "../../components/MainNav";
import Footer from "../../components/Footer";
import Slide from "../../components/Slide";

import { Header, Button } from "semantic-ui-react";

function Lesson5() {
  return (
    <div className="wmcode-page">
      <MainNav />
      <div>
        <Header as={"h1"}>Lesson 5 - Booleans</Header>
        <a href="./wmcodeDownloads/wm_lesson5.zip" download>
          <Button basic color="blue">
            Download Lesson
          </Button>
        </a>
        <br /> <br />
        <br />
        <Slide src="https://docs.google.com/presentation/d/e/2PACX-1vQyrNJIQSFlBhPE513yeLkuhEAXhUvtfrIBo32Lg9wfTJc88Lk9klKNbL8JXwur8XQV7BkS1Lzrd7Cp/embed?start=false&loop=false&delayms=3000" />
        <br />
      </div>

      <div>
        <h2>Lesson Content:</h2>
        <h3>Boolean Values - Motivation</h3>
        To motivate what Boolean value is, and what it does, let's play a
        guessing game.
        <br />
        ** See the slides for a full demo of the guessing game **
        <h3>Coding Demo</h3>
        To gain a better understanding of what is going one, it is best that we
        write what Python is actually interpreting under its magical hood.
        <br />
        First, we intuitively write out our code with helper functions that will
        determine what is happening in comparisons, without any effort. We
        compare their return values to <b>True</b> and <b>False</b> because it
        makes sense. Here's what we will have at this point:
        <pre>
          real_num = 10{"\n"}
          {"\n"}def over_under(guess):{"\n"}“““over_under is a guessing game
          that uses user input to generate hints.”””{"\n"}
          {"    "}if guess == real_num:{"\n"}
          {"        "}print(“Yay! You guessed it!”){"\n"}
          {"    "}elif is_over(guess) == True:{"\n"}
          {"        "}print(“Try something lower than that.”){"\n"}
          {"    "}elif is_under(guess) == True:{"\n"}
          {"    "}print(“Try something bigger.”){"\n"}
        </pre>
        After deciding that this implementation WILL work for anything, then we
        can move onto out helper functions, and decide how to write them. **See
        the video for more about these helpers.** After writing them, they may
        look like:
        <pre>
          def is_over(guess):{"\n"}
          {"    "}return guess &gt; real_num{"\n"}
          {"\n"}def is_under(guess):{"\n"}
          {"    "}return guess &lt; real_num{"\n"}
        </pre>
        <h3>What Just Happened?</h3>
        <h4>As humans, we ask ourselves:</h4>
        <i>“Is the current guess over or under the true value?”</i>
        <br />
        We get, as a response:
        <i>“Yes”</i> or <i>“No”</i>.
        <h4>Python is a little more sophisticated. It asks:</h4>
        <i style={{ color: "blue" }}>is_over(guess)</i> or{" "}
        <i style={{ color: "blue" }}>is_under(guess)</i>?
        <br />
        It expects:
        <i style={{ color: "orange" }}>True</i> or{" "}
        <i style={{ color: "orange" }}>False</i>.
        <h3>Comparing Humans and Python</h3>
        Both humans, and Python seek either of a:
        <ul>
          <li>Positive response, or</li>
          <li>Negative response,</li>
        </ul>
        And will do something differently depending on the response. For us, it
        is very easy to determine what is over/under, left/right, next/last,
        etc.
        <br />
        But, we have various different ways of expressing these things; a funny
        look, a slap on the wrist, getting yelled at, etc.
        <br />
        For Python, there are only certain things that can represent either a
        yes or no. These values are split into two categories:
        <ul>
          <li>False-y values, and</li>
          <li>Truth-y values</li>
        </ul>
        <h3>Python Boolean Values</h3>
        <h4>False-y Values:</h4>
        Python has 4 types of <b>False</b> values:
        <ul>
          <li>Empty objects</li>
          <ul>
            <li>Strings, Array, Lists, and Dictionaries</li>
            <li>We will talk more about all of these in later lessons.</li>
          </ul>
          <li>The number 0</li>
          <li>
            The value <i style={{ color: "orange" }}>null</i>, and
          </li>
          <li>
            The value <i style={{ color: "orange" }}>False</i>
          </li>
        </ul>
        <h4>Truth-y Values</h4>
        Python has one main type of <b>True</b> value.
        <ul>
          <li>
            Everything that is not <b>False</b>
          </li>
          <ul>
            <li>Objects with data stored in them.</li>
            <li>Any number not 0, and</li>
            <li>
              The value <i style={{ color: "orange" }}>True</i>
            </li>
          </ul>
        </ul>
        <h3>Refactoring Our Code</h3>
        Though our functions from earlier were nice, and pretty, they were
        actually quite clunky. By taking advantage of boolean identities, we can
        actually make things a lot easier to read, and completely get rid of our
        helper functions.
        <br />
        Our new function may look something like this:
        <pre>
          real_num = 10{"\n"}def over_under(guess):{"\n"}
          {"    "}“““over_under is a guessing game that uses user input to
          generate hints.”””{"\n"}
          {"    "}if guess == real_num:{"\n"}
          {"        "}print(“Yay! You guessed it!”){"\n"}
          {"    "}elif guess &gt; real_num:{"\n"}
          {"        "}print(“Try something lower than that.”){"\n"}
          {"    "}elif guess &lt; real_num:{"\n"}
          {"        "}print(“Try something bigger.”){"\n"}
        </pre>
        (See the video for more notes on how this is actually better!)
        <h3>Now, Why Are Booleans Useful?</h3>
        Boolean values serve as additional levels of robustness for our code.
        <br />
        Booleans make special cases easy to catch, with minimal code.
        <br />
        Keeps redundancy away.
        <br />
        We don’t have to write functions to explicitly tell Python what is good
        or bad.
        <h3>Final Note</h3>
        If you are ever curious about what something in Python's boolean return
        value is, you can use the built-in Python{" "}
        <b style={{ color: "blue" }}>bool()</b> function with your item as the
        parameter, and Python will tell you!!
        <h1>...</h1>
      </div>

      <Footer />
    </div>
  );
}

export default Lesson5;
