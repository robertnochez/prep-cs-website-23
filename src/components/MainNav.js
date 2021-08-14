import React, { Component, createRef } from "react";
import "./../App.css";

import { Link } from "react-router-dom";
import { Menu, Image, Grid, Icon, Header } from "semantic-ui-react";

export default class MainNav extends Component {
  state = { activeItem: "home" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  contextRef = createRef();

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <Grid
          stackable
          textAlign={"center"}
          verticalAlign={"middle"}
          columns={1}
        >
          <Grid.Row style={{ marginBottom: 50 }}>
            <Menu
              size="large"
              secondary
              borderless
              fluid
              stackable
              fixed="top"
              color={"green"}
              inverted
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              {/* <Menu.Item> */}

              <Menu.Item
                as={Link}
                to="/"
                name="Home"
                // header
                content="Home"
                active={activeItem === "Home"}
                onClick={this.handleItemClick}
              >
                <Icon name={"home"} size={"large"} />
                <p> Home </p>
              </Menu.Item>

              <Menu.Menu position="right">
                <Menu.Item
                  as={Link}
                  to="/wmcode"
                  name="WMCode"
                  content="WMCode"
                  active={activeItem === "WMCode"}
                  onClick={this.handleItemClick}
                />

                <Menu.Item
                  as={Link}
                  to="/prepcs"
                  name="PREP CS"
                  content="PREP CS"
                  active={activeItem === "PREP CS"}
                  onClick={this.handleItemClick}
                />

                {/* <Menu.Item
                  as={Link}
                  to="/sample-lesson"
                  name="Sample Lesson"
                  content="Sample Lesson"
                  active={activeItem === "Sample Lesson"}
                  onClick={this.handleItemClick}
                /> */}

                <Menu.Item
                  as={Link}
                  to="/about"
                  name="About CS Central"
                  content="About CS Central"
                  active={activeItem === "About CS Central"}
                  onClick={this.handleItemClick}
                />

                {/* <Menu.Item
                  as={Link}
                  to="/practice"
                  name="Practice"
                  content="Practice"
                  active={activeItem === "Practice"}
                  onClick={this.handleItemClick}
                /> */}

                <Menu.Item>{this.props.button}</Menu.Item>
              </Menu.Menu>
            </Menu>
          </Grid.Row>

          <Grid.Row columns={2} textAlign={"center"}>
            <Grid.Column width={5}>
              <>
                <Header as="h1" style={{ color: "#700C02" }}>
                  <b>{this.props.title}</b>
                </Header>
                <Header as="h4">{this.props.description}</Header>
              </>
            </Grid.Column>
            <Grid.Column width={11}>
              <Image
                // fluid
                src={this.props.img}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {/* this div is the one controlling the picture placement */}
      </>
    );
  }
}
