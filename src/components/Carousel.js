import React, { Component } from "react";
import "../App.css";
import { Grid, Header, Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { C } from "keyboard-key";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "1",
      activePage: [
        <div>
          <Header as={"h3"}>
            <b>Welcome In!</b>
          </Header>
          <p>
            We're happy to have you here, and look forward to helping you be
            successful! We're happy to have you here, and look forward to helping
            you be successful! Feel free to explore the website and the available
            materials. We will release materials at 6pm the day before they are
            going to be taught.
          </p>
          <p>
            Future announcements will be posted here, so be sure to check back
            regularly!
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
          successful! We're happy to have you here, and look forward to helping
          you be successful! Feel free to explore the website and the available
          materials. We will release materials at 6pm the day before they are
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
          <b>Office Hours takes place in Unit 3 Lounge!</b>
        </p>
        <p>
          <b>Marcos's OH:</b> THUR 7-8 PM
        </p>
        <p>
          <b>Vincent's OH:</b> TUES 7-8 PM
        </p>
        <p>
          <b>Destiny's OH:</b> TUES 7-8 PM
        </p>
        <p>
          <b>Laila's OH:</b> THURS 7-8 PM
        </p>
      </div>,
    ];

    const page3 = [
      <div>
        <Header as={"h3"}>
          <b>Practice Problem Solutions</b>
        </Header>
        <p>
          Moving forward, solutions to practice problems will be posted on their
          respective page the night of the lesson. For example, the solutions to
          Lesson 4 practice problems are posted the evening of July 29.
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
          Solutions to Lesson 4 HW Problems are coming soon! :D
        </p>
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
                    disabled={true}
                    name="3"
                    page={page3}
                    active={activeItem === "3"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    disabled
                    name="4"
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

export default Carousel;
