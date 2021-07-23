import React from "react";
import "../../App.css";

import MainNav from "../../components/MainNav";
import Footer from "../../components/Footer";
import Slide from "../../components/Slide";

import { Header } from "semantic-ui-react";

function Lesson3() {
  return (
    <div>
      <MainNav />
      <div className="wmcode-page">
        <Header as={"h1"}>Lesson 3 - Functions Cont'd</Header>
        <Slide src="https://docs.google.com/presentation/d/e/2PACX-1vRhuQOwdNTsFaWH2tf3KlJB2ysWB5vjbcUKOabIU1x_ZSVyxW-bTCpVe9nZg5jo_kHyuMC46IoNgegm/embed?start=false&loop=false&delayms=3000" />

        <div>
          <h2>Lesson Content:</h2>
          <h3>Calculator Review</h3>
          An in-depth analysis of what is really happening in the calculator
          project.
          <br />
          <br />
          Acceptable code for this project is:
          <pre>
            def add(x, y):{"\n"}
            {"    "}"""Docstring"""{"\n"}
            {"    "}added = x + y{"\n"}
            {"    "}return added{"\n"}
            {"\n"}def subtract(x, y):{"\n"}
            {"    "}"""Docstring"""{"\n"}
            {"    "}subtracted = x - y{"\n"}
            {"    "}return subtracted{"\n"}
            {"\n"}def divide(x, y):{"\n"}
            {"    "}"""Docstring"""{"\n"}
            {"    "}divided = x / y{"\n"}
            {"    "}return divided{"\n"}
            {"\n"}def divide_whole(x, y):{"\n"}
            {"    "}"""Docstring"""{"\n"}
            {"    "}return x // y{"              "}--&gt; NOTICE: It is
            acceptable to simply return the desired value{"\n"}
            {"\n"}def power(x, y):{"\n"}
            {"    "}"""Docstring"""{"\n"}
            {"    "}return x ** y{"              "}--&gt; NOTICE PT2: Assignment
            is not necessary{"\n"}
            {"\n"}def remainder(x, y):{"\n"}
            {"    "}"""Docstring"""{"\n"}
            {"    "}return x % y{"               "}--&gt; Simple returns are
            used more often{"\n"}
          </pre>
          <h3>The Cardinal Rule:</h3>
          <b style={{ color: "blue" }}>
            IF YOU REPEAT YOURSELF MORE THAN ONCE, WRITE A FUNCION!!!
          </b>
          <h3>Coding Practice:</h3>A walk-through and demonstration of the power
          of functions. Important notes on how function decomposition really
          cleans up code, and makes programming easier.
          <h3>Demonstration Functions:</h3>
          <pre>
            from operator import abs, add, mul{"\n"}
            {"\n"}def hypotenuse(x, y):{"\n"}
            {"    "}"""Takes in the lengths of two triangle legs, and outputs
            the length of that{"\n"}
            {"    "}triangle's corresponding hypotenuse.{"\n"}
            {"\n"}
            {"    "}&gt;&gt;&gt; hypotenuse(9, 12){"\n"}
            {"    "}15{"\n"}
            {"    "}&gt;&gt;&gt; hypotenuse(10, 14){"\n"}
            {"    "}17{"\n"}
            {"    "}"""{"\n"}
            {"    "}##YOUR CODE HERE##{"\n"}
            {"\n"}def distance_between(x1, y1, x2, y2):{"\n"}
            {"    "}"""The distance_between function takes in the x and y
            coordinates of two{"\n"}
            {"    "}points on a plane, and returns the distance between them. It
            may be useful{"\n"}
            {"    "}to write helper functions!{"\n"}
            {"\n"}
            {"    "}NOTE: Can distance be negative?{"\n"}
            {"\n"}
            {"    "}&gt;&gt;&gt; distance_between(5, 5, 10, 10){"\n"}
            {"    "}7.0710678118654755{"\n"}
            {"    "}&gt;&gt;&gt; distance_between(0, 0, 20, 20){"\n"}
            {"    "}26.8701{"\n"}
            {"    "}"""{"\n"}
            {"    "}##YOUR CODE HERE##{"\n"}
            {"\n"}def sqrt(x):{"\n"}
            {"    "}"""The square root function takes in a single number, and
            returns its{"\n"}
            {"    "}square root.{"\n"}
            {"\n"}
            {"    "}&gt;&gt;&gt; sqrt(49){"\n"}
            {"    "}7{"\n"}
            {"    "}&gt;&gt;&gt; sqrt(99){"\n"}
            {"    "}9.9498743710662{"\n"}
            {"    "}"""{"\n"}
            {"    "}##YOUR CODE HERE##{"\n"}
            {"\n"}def square(x):{"\n"}
            {"    "}"""Returns the squared value of the given term.{"\n"}
            {"\n"}
            {"    "}&gt;&gt;&gt; square(9){"\n"}
            {"    "}81{"\n"}
            {"    "}&gt;&gt;&gt; square(8){"\n"}
            {"    "}64{"\n"}
            {"    "}"""{"\n"}
            {"    "}##YOUR CODE HERE##{"\n"}
            {"            "}
          </pre>
          <h3>Independent Practice / Exploration Functions:</h3>
          <pre>
            def discriminant(a, b, c):{"\n"}
            {"    "}"""The discriminant takes in the coefficients, a, b, and c,
            of a quadratic{"\n"}
            {"    "}function in the form (ax^2 + bx + c) and returns its
            discriminant{"\n"}
            {"\n"}
            {"    "}&gt;&gt;&gt; discriminant(4, 2, 5){"\n"}
            {"    "}-78{"\n"}
            {"    "}&gt;&gt;&gt; discriminant(2, 3, 1){"\n"}
            {"    "}1{"\n"}
            {"    "}"""{"\n"}
            {"    "}##YOUR CODE HERE##{"\n"}
            {"\n"}def right_triangle_area(base, height):{"\n"}
            {"    "}"""Takes in the base and height of an arbitrary right
            triangle, and returns{"\n"}
            {"    "}the area of the given triangle.{"\n"}
            {"    "}Assume that all inputs produce a proper right triangle.
            {"\n"}
            {"\n"}
            {"    "}&gt;&gt;&gt; right_triangle_area(10, 5){"\n"}
            {"    "}25{"\n"}
            {"    "}&gt;&gt;&gt; right_triangle_area(16, 8){"\n"}
            {"    "}64{"\n"}
            {"    "}"""{"\n"}
            {"    "}##YOUR CODE HERE##{"\n"}
            {"\n"}def second_to_last(x):{"\n"}
            {"    "}"""Takes in an arbitrary number, and returns the second
            digit from the right;{"\n"}
            {"    "}the second to last digit. Assume that all inputs have at
            least 2 digits.{"\n"}
            {"\n"}
            {"    "}&gt;&gt;&gt; second_to_last(9893473478){"\n"}
            {"    "}7{"\n"}
            {"    "}&gt;&gt;&gt; second_to_last(64){"\n"}
            {"    "}6{"\n"}
            {"    "}"""{"\n"}
            {"    "}##YOUR CODE HERE##{"\n"}
            {"\n"}def mul_second_to_lasts(num1, num2):{"\n"}
            {"    "}"""Computes the second to last digits of two constants, num1
            and num2, and{"\n"}
            {"    "}returns their value when multiplied together.{"\n"}
            {"\n"}
            {"    "}&gt;&gt;&gt; mul_second_to_lasts(98348973, 98){"     "}
            --&gt; 7 * 9{"\n"}
            {"    "}63{"\n"}
            {"    "}&gt;&gt;&gt; mul_second_to_lasts(18, 45823){"        "}
            --&gt; 1 * 2{"\n"}
            {"    "}2{"\n"}
            {"    "}"""{"\n"}
            {"    "}##YOUR CODE HERE##{"\n"}
            {"\n"}def feet_in_to_cm(feet, inches):{"\n"}
            {"    "}"""Converts an arbitrary height in feet an inches to its
            equivalent in{"\n"}
            {"    "}centimeters. Consider using a helper function!{"\n"}
            {"    "}NOTE: One inch is equal to 2.54 centimeters.{"\n"}
            {"\n"}
            {"    "}&gt;&gt;&gt; feet_in_to_cm(6, 5){"\n"}
            {"    "}198.58{"\n"}
            {"    "}&gt;&gt;&gt; feet_in_to_cm(98, 7){"\n"}
            {"    "}3004.82{"\n"}
            {"    "}"""{"\n"}
            {"    "}##YOUR CODE HERE##{"\n"}
            {"\n"}def cm_helper(x):{"\n"}
            {"    "}"""Takes in an argument x and returns its value after being
            multiplied by{"\n"}
            {"    "}a factor of 2.54.{"\n"}
            {"\n"}
            {"    "}Note where this function is.{"\n"}
            {"\n"}
            {"    "}&gt;&gt;&gt; cm_helper(53){"\n"}
            {"    "}55.54{"\n"}
            {"    "}"""{"\n"}
            {"    "}##YOUR CODE HERE##{"\n"}
            {"            "}
          </pre>
          <h1>...</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Lesson3;
