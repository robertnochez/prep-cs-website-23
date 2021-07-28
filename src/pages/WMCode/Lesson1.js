import React from "react";
import "../../App.css";

import MainNav from "../../components/MainNav";
import Footer from "../../components/Footer";
import Slide from "../../components/Slide";

import { Header, Button } from "semantic-ui-react";

function Lesson1() {
  return (
    <div>
      <MainNav />
      <div className="wmcode-page">
        <Header as={"h1"}>Lesson 1 - Operators and Assignment</Header>
        <a href="./wmcodeDownloads/wm_lesson1.zip" download>
          <Button basic color="blue">
            Download Lesson
          </Button>
        </a>
        <br /> <br />
        <br />
        <Slide src="https://docs.google.com/presentation/d/e/2PACX-1vQELueLHOSR69k8hUUuE275Yhce7Vm-nJKxXXlDBQYWim8nIA0cAsZw5b9CBHDt-hfrR7zafDxlOzLG/embed?start=false&loop=false&delayms=3000" />
        <h2>Lesson Content:</h2>
        <h3>Operators Review:</h3>
        Take a minute and go through each of these review problems. Do your best
        to figure out what Python would interpret each expression to be.
        <p>
          <b>TRY THEM IN THE terminal BEFORE MOVING ON</b>
        </p>
        <pre>
          &gt;&gt;&gt; 3 == 3.0{"\n"}___{"\n"}&gt;&gt;&gt; 10 % 7{"\n"}___{"\n"}
          &gt;&gt;&gt; 9739 % 10{"\n"}___{"\n"}&gt;&gt;&gt; 84 / 12{"\n"}___
          {"\n"}&gt;&gt;&gt; 5756 // 10{"\n"}___{"\n"}&gt;&gt;&gt; 2 ** 4{"\n"}
          ___{"\n"}&gt;&gt;&gt; 75 % 5{"\n"}___
        </pre>
        Solutions and Explanations:
        <pre>
          &gt;&gt;&gt; 3 == 3.0{"         "}# --&gt; Both sides evaluate to the
          same value{"\n"}True{"\n"}&gt;&gt;&gt; 10 % 7{"           "}# --&gt;
          The remainder of division is 3{"\n"}3{"\n"}&gt;&gt;&gt; 9739 % 10
          {"        "}# --&gt; When you divide, 9 is left over. Any number % 10
          will always give the last digit.{"\n"}9{"\n"}&gt;&gt;&gt; 84 / 12
          {"          "}# --&gt; Regular division outputs the decimal form{"\n"}
          7.0{"\n"}&gt;&gt;&gt; 5756 // 10{"       "}# --&gt; 5756 / 10 = 575.6
          --&gt; Floor division by 10 will always cut off the last digit{"\n"}
          575{"\n"}&gt;&gt;&gt; 2 ** 4{"           "}# --&gt; 2 * 2 * 2 * 2
          {"\n"}
          32{"\n"}&gt;&gt;&gt; 75 % 5{"           "}# --&gt; There is no
          remainder because 5 goes into 75 evenly{"\n"}0
        </pre>
        Now, you may ask: How does Python evaluate these math operations? The
        answer is quite simple. We, implicitly, take the exact same steps as
        Python. They are:
        <ol>
          <li>Evaluate the Operator --&gt; the math symbol</li>
          <li>
            Evaluate the Operands --&gt; whatever is on either side of the
            symbol
          </li>
          <li>
            Apply the Operator to the Operands --&gt; Perform the operation
          </li>
        </ol>
        <h3>Assignment:</h3>
        Assignment is how we <i>assign</i> a value to a variable or keyword in
        Python. An assignment is characterized by three things:
        <ul>
          <li>A left side</li>
          <li>A single equals sign</li>
          <li>A right side</li>
        </ul>
        Python will read that assignment statement and take the following steps,
        in this exact order:
        <ul>
          <li>Evaluate whatever is on the right side</li>
          <ul>
            <li>
              The order of execution of math operations, if it is a math
              expression, for example
            </li>
          </ul>
          <li>
            Assign that value to whatever variable or keyword is on the left
          </li>
        </ul>
        After this process, you can think of the variable or keyword as a{" "}
        <i>container</i> for whatever value was stored within it. You can refer
        to this value simply by calling that variable. BUT you can change what
        is inside of each of these containers by <i>reassigning</i> its value.
        <p>Use the terminal to experiment with assigment!!</p>
        <pre>
          &gt;&gt;&gt; x = 49{"\n"}&gt;&gt;&gt; y = 11{"\n"}&gt;&gt;&gt; x + y
          {"\n"}60{"\n"}&gt;&gt;&gt; x{"      "}# --&gt; The operation that was
          executed does not change x's value{"\n"}49{"\n"}&gt;&gt;&gt; y
          {"      "}# --&gt; The operation that was executed does not change y's
          value{"\n"}
          11{"\n"}&gt;&gt;&gt; w = (x * y) - (x + y){"\n"}
          &gt;&gt;&gt; w{"\n"}479{"\n"}&gt;&gt;&gt; (w // 10) - x + y{"      "}#
          --&gt; Values of w, x, and y never changed{"\n"}9{"\n"}&gt;&gt;&gt; x
          = w{"           "}# --&gt; Reassignment{"\n"}&gt;&gt;&gt; y = w // y
          {"      "}# --&gt; Reassignment{"\n"}&gt;&gt;&gt; x{"\n"}479{"\n"}
          &gt;&gt;&gt; y{"\n"}43{"\n"}&gt;&gt;&gt; w{"      "}# --&gt; NOTE: w's
          value never changed{"\n"}479
        </pre>
        <h3>Intro to Functions:</h3>
        Functions are a way of working with unknown values, and producing a
        desired output.
        <br />
        <br />
        Functions have a name and a body, where operations are carried out
        <br />
        <br />
        See Lesson 3 for more on functions!!!
      </div>
      <Footer />
    </div>
  );
}

export default Lesson1;
