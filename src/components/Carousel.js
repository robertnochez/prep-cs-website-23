import React, { Component } from "react";
import "../App.css";
import { Grid, Header, Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { C } from "keyboard-key";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "4",
      activePage: [
        <div>
          <Header as={"h3"}>
          <b>Practice Problem Solutions</b>
          </Header>
          <p>
            Moving forward, solutions to practice problems will be posted on their
            respective page the day after the lesson. For example, the solutions to
            Lesson 4 HW problems are posted July 15.
          </p>
          <p>
            While we may get to cover some problems during the lessons, we cannot
            guarantee that we will always have time. So, if you have questions or
            would like to work out the problems with your peers or the
            instructors, please drop by Office Hours. We are more than happy to
            help you figure out the problems and answer any questions you may have
            :)
          </p>
          <p>You can find the links to OH on the slide 2 of this section!!</p>
          <p>
          <Link to="/prepcs-lesson4">Lesson 4 Solutions</Link>
          </p>
        </div>,
      ],
    };
  }

  handleItemClick = (e, { name, page }) =>
    this.setState({
      activeItem: name,
      activePage: page,
    });

  render() {
    const { activeItem } = this.state;

    const page1 = [
      <div>
        <Header as={"h3"}>
          <b>Welcome In!</b>
        </Header>
        <p>
          We're happy to have you here, and look forward to helping you be
          successful! Feel free to explore the website and the available
          materials. We will release materials the night before the day they are
          going to be taught.
        </p>
        <p>
          Future announcements will be posted here, so be sure to check back
          regularly!
        </p>
      </div>,
    ];

    const page2 = [
      <div>
        <Header as={"h3"}>
          <b>Office Hours</b>
        </Header>
        <p>
          As you have already heard, we will be holding office
          hours throughout the week to make sure you have a space to ask any
          questions you have, and have them answered. Current dates and times
          are listed below, and we may add more times if we see office hours are
          popular! Drop by to ask anything ... CS-related, Cal-related, or
          anything else!
        </p>
        <p>
          <b>Office Hours takes place in Unit 3 Priestley Hall Lounge!</b>
        </p>
        <p>
          <b>Robert's OH:</b> Days TBA 7-8 PM
        </p>
        <p>
          <b>Destiny's OH:</b> Days TBA 7-8 PM
        </p>
      </div>,
    ];

    const page3 = [
      <div>
        <Header as={"h3"}>
          <b>Practice Problem Solutions</b>
        </Header>
        <p>
         These are in-class practice problem solutiions! Solutions to Lesson 4 HW Problems are on Lesson 4 - Controls!
        </p>
        <p>
          <a href="https://pythontutor.com/render.html#code=x%20%3D%203%0Ay%20%3D%202%0Az%20%3D%20'six'%0A%0Adef%20divideTwo%28num1,%20num2%29%3A%0A%20%20%20%20return%20num2//%20num1%0A%0Az%20%3D%20x%20*%20y%0AfReturn%20%3D%20divideTwo%28x,%20z%29&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false">
            Lesson 4 In Class: Example 1</a>
        </p>
        <p>
          <a href="https://pythontutor.com/python-debugger.html#code=def%20cubeNum%28x%29%3A%0A%20%20%20%20return%20x**3%0A%20%20%20%20%0Adef%20squareNum%28y%29%3A%0A%20%20%20%20return%20y**2%0A%20%20%20%20%0Adef%20oneTimes%28z%29%3A%0A%20%20%20%20return%20z*1%0A%20%20%20%20%0Ax%20%3D%20cubeNum%282%29%0Ay%20%3D%20squareNum%282%29%0AZ%20%3D%20x%20%2B%20y%0AoneTimes%20%3D%20oneTimes%28z%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false">
            Lesson 4 In Class: Example 2</a>
        </p>
        <p>
          <a href="https://pythontutor.com/render.html#code=gem,%20stone%20%3D%20'sapphires',%20'diamonds'%0AdiaTotal,%20sapTotal,%20rubTotal%20%3D%2045,%2035,%200%0A%0Adef%20addStudents%28blue,%20white,%20they,%20them%29%3A%0A%20%20%20%20max%20%3D%2099%0A%20%20%20%20all%20%3D%20they%20%2B%20them%0A%20%20%20%20if%20all%20%3E%2099%3A%0A%20%20%20%20%20%20%20%20gemstones%20%3D%20'too%20many!'%0A%20%20%20%20elif%20all%20%3C%20101%3A%0A%20%20%20%20%20%20%20%20gemstones%20%3D%20addNames%28blue,%20white%29%0A%20%20%20%20print%28gemstones%29%0A%20%20%20%20return%20moreGems%28%29%0A%20%20%20%20%0Adef%20addNames%28oh,%20no%29%3A%0A%20%20%20%20return%20oh%20%2B%20'%20%26%20'%20%2B%20no%20%0A%20%20%20%20%0Adef%20moreGems%28%29%3A%0A%20%20%20%20global%20rubTotal%0A%20%20%20%20jewel,%20treasure%20%20%3D%20'rubies',%20'emeralds'%0A%20%20%20%20rubTotal,%20emeTotal%20%3D%2012,%2090%0A%20%20%20%20more%20%3D%20rubTotal%20%2B%20emeTotal%0A%20%20%20%20print%28more%29%0A%20%20%20%20return%20gem%20%2B%20'%20%26%20'%20%2B%20stone%20%2B%20'%20%26%20'%20%2B%20jewel%20%2B%20'%20%26%20'%20%2B%20treasure%0A%20%20%20%20%0A%20%20%20%20%0AaddStudents%28gem,%20stone,%20diaTotal,%20sapTotal%29&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false">
            Lesson 4 In Class: Example 3</a>
        </p>

        
      </div>,
    ];

    const page4 = [
      <div>
          <Header as={"h3"}>
          <b>Practice Problem Solutions</b>
        </Header>
        <p>
          Moving forward, solutions to practice problems will be posted on their
          respective page the day after the lesson. For example, the solutions to
          Lesson 4 HW problems are posted July 15.
        </p>
        <p>
          While we may get to cover some problems during the lessons, we cannot
          guarantee that we will always have time. So, if you have questions or
          would like to work out the problems with your peers or the
          instructors, please drop by Office Hours. We are more than happy to
          help you figure out the problems and answer any questions you may have
          :)
        </p>
        <p>You can find the links to OH on the slide 2 of this section!!</p>
        <p>
        <Link to="/prepcs-lesson4">Lesson 4 Solutions</Link>
        </p>
        </div>,
    ];

    return (
      <div class="carousel">
        <Segment>
          <Grid>
            <Grid.Row>
              <div class="carousel-slides">
                <Segment basic>{this.state.activePage}</Segment>
              </div>
            </Grid.Row>
            <Grid.Row>
              <div class="pagination">
                <Menu pagination size={"mini"}>
                  <Menu.Item
                    disabled={false}
                    name="1"
                    page={page1}
                    active={activeItem === "1"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    disabled={false}
                    name="2"
                    page={page2}
                    active={activeItem === "2"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    disabled={false}
                    name="3"
                    page={page3}
                    active={activeItem === "3"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    disabled = {false}
                    name="4"
                    page={page4}
                    active={activeItem === "4"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    disabled
                    name="5"
                    active={activeItem === "12"}
                    onClick={this.handleItemClick}
                  />
                </Menu>
              </div>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}
/*
<p>
          <a href="https://pythontutor.com/visualize.html#code=class%20Link%3A%0A%20%20%20%20def%20__init__%28self,%20%20val,%20%20next%3DNone%29%3A%0A%20%20%20%20%20%20%20%20self%20.val%20%3D%20val%0A%20%20%20%20%20%20%20%20self.next%20%3D%20next%0Adef%20addEnd%28linkedLst,%20word%29%3A%0A%20%20%20%20head%20%3D%20linkedLst%0A%20%20%20%20curr%20%3D%20head%0A%20%20%20%20while%20curr.next%20!%3D%20None%3A%0A%20%20%20%20%20%20%20%20curr%20%3D%20curr.next%0A%20%20%20%20w%20%3D%20Link%28word%29%0A%20%20%20%20curr.next%20%3D%20w%0A%0AlinkedStory%20%3D%20Link%28'The',%20Link%28'Big',%20%20Link%28'Spongebob',%20Link%28'Said'%29%29%29%29%0AaddEnd%28linkedStory,%20'Hello'%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false" >
            Lesson 8 In Class: Example 1</a>
        </p>
        <p>
          <a href="https://pythontutor.com/render.html#code=class%20Link%3A%0A%20%20%20%20def%20__init__%28self,%20%20val,%20next%3DNone%29%3A%0A%20%20%20%20%20%20%20%20self.val%20%3D%20val%0A%20%20%20%20%20%20%20%20self.next%20%3D%20next%0Adef%20deleteBeg%28linkedLst%29%3A%0A%20%20%20%20tmp%20%3D%20linkedLst%0A%20%20%20%20linkedLst%20%3D%20linkedLst.next%20%0A%20%20%20%20tmp%20%3D%20None%20%0A%20%20%20%20return%20linkedLst%0A%0AlinkedStory%20%3D%20Link%28'The',%20Link%28'Big',%20%20Link%28'Spongebob',%20Link%28'Said'%29%29%29%29%0AdeleteBeg%28linkedStory%29&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false">
            Lesson 8 In Class: Example 2</a>
        </p>
        <p>
          <a href="https://pythontutor.com/visualize.html#code=multiLambda%20%3D%20lambda%20f,%20g%3A%20lambda%20x,%20y%3A%20f%28g%28x,%20y%29%29%0Aarea%20%3D%20lambda%20x,%20y%3A%20x*y%20%0Adouble%20%3D%20lambda%20num%3A%20num*2%0AdoubledArea%20%3D%20multiLambda%28double,%20area%29%0Atemp%20%3D%20doubledArea%2810,%202%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false">
            Lesson 9 In Class: Example 2.1</a>
        </p>
        <p>
          <a href="https://pythontutor.com/visualize.html#code=multiLambda%20%3D%20lambda%20f,%20g%3A%20lambda%20x,%20y%3A%20f%28g%28x,%20y%29%29%0Aarea%20%3D%20lambda%20x,%20y%3A%20x*y%20%0Adouble%20%3D%20lambda%20num%3A%20num*2%0AdoubledArea%20%3D%20multiLambda%28double,%20area%29%2810,%202%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false">
            Lesson 9 In Class: Example 2.2</a>
        </p>


        <p>
        <Link to="/prepcs-lesson6">Lesson 6 Solutions</Link>
        </p>
        <p>
        <Link to="/prepcs-lesson7">Lesson 7 Solutions</Link>
        </p>
        <p>
        <Link to="/prepcs-lesson8">Lesson 8 Solutions</Link>
        </p>
        <p>
        <Link to="/prepcs-lesson10">Lesson 10 Solutions</Link>
        </p>
        */

export default Carousel;
