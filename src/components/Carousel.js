import React, { Component } from "react";
import "../App.css";
import { Grid, Header, Menu, Segment } from "semantic-ui-react";
import { C } from "keyboard-key";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "2",
      activePage: [
        <div>
        <Header as={"h3"}>
          <b>Office Hours</b>
        </Header>
        <p>
          As you may have already seen in your emails, we will be holding office hours 
          throughout the week to make sure you have a space to ask any questions you have,
          and have them answered. Current dates and times are listed below, and we may add 
          more times if we see office hours are popular! Drop by to ask anything ... 
          CS-related, Cal-related, or anything else!
        </p>
        <p>
          <b>Karen's OH:</b> Mondays and Wednesdays, 5-6pm. 
          <a
            target="_blank" 
            rel="noopener noreferrer"
            href="https://berkeley.zoom.us/j/92460458306?pwd=RVlJN0lLU29JNzcySzFVTzFNd1BNdz09"
          >
            JOIN MEETING
          </a>
        </p>
        <p>
          <b>Cristian's OH:</b> Tuesdays and Thursdays, 5-6pm. 
          <a
            target="_blank" 
            rel="noopener noreferrer"
            href="https://berkeley.zoom.us/j/99662937200"
          >
            JOIN MEETING
          </a>
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
          As you may have already seen in your emails, we will be holding office hours 
          throughout the week to make sure you have a space to ask any questions you have,
          and have them answered. Current dates and times are listed below, and we may add 
          more times if we see office hours are popular! Drop by to ask anything ... 
          CS-related, Cal-related, or anything else!
        </p>
        <p>
          <b>Karen's OH:</b> Mondays and Wednesdays, 5-6pm. 
          <a
            target="_blank" 
            rel="noopener noreferrer"
            href="https://berkeley.zoom.us/j/92460458306?pwd=RVlJN0lLU29JNzcySzFVTzFNd1BNdz09"
          >
            JOIN MEETING
          </a>
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
                    disabled
                    name="3"
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
