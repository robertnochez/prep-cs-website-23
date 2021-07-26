import React, { Component } from "react";
import "../App.css";
import { Grid, Header, Menu, Segment } from "semantic-ui-react";
import { C } from "keyboard-key";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "10",
      activePage: [
        <div>
          <Header as={"h3"}>
            <b>Welcome In!</b>
          </Header>
          <p>
            We're happy to have you here, and look forward to helping you be
            successful! We're happy to have you here, and look forward to
            helping you be successful! Feel free to explore the website and the
            available materials. We will release materials at 6pm the day before
            they are going to be taught.
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
          <b>Sample Announcement</b>
        </Header>
        <p>Second Announcement - Line 1</p>
        <br />
        <p>Second Announcement - Line 2</p>
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
                    disabled
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
