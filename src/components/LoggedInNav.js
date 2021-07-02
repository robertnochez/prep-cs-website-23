import React, { Component, createRef } from "react";
import "./../App.css";

import AuthNav from "./AuthNav";
import { Menu, Image, Grid, Icon, Dropdown, Header } from "semantic-ui-react";

export default class LoggedInNav extends Component {
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
          <Grid.Row>
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
              <Menu.Item>
                <Icon name={"lightbulb outline"} size={"big"} />
              </Menu.Item>
              <Menu.Item
                name="home"
                header
                active={activeItem === "home"}
                onClick={this.handleItemClick}
              />

              <Menu.Menu position="right">
                <Dropdown item text="Quick Actions...">
                  <Dropdown.Menu>
                    <Dropdown.Item>Lesson 1 - </Dropdown.Item>
                    <Dropdown.Item>Lesson 2 - </Dropdown.Item>
                    <Dropdown.Item>Lesson 3 - </Dropdown.Item>
                    <Dropdown.Item>Lesson 4 - </Dropdown.Item>
                    <Dropdown.Item>Lesson 5 - </Dropdown.Item>
                    <Dropdown.Item>Lesson 6 - </Dropdown.Item>
                    <Dropdown.Item>Lesson 7 - </Dropdown.Item>
                    <Dropdown.Item>Lesson 8 - </Dropdown.Item>
                    <Dropdown.Item>Lesson 9 - </Dropdown.Item>
                    <Dropdown.Item>Lesson 10 - </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Menu.Item
                  name="Resources"
                  content="Resources"
                  active={activeItem === "Resources"}
                  onClick={this.handleItemClick}
                />

                <Menu.Item
                  name="Profile"
                  content="Profile"
                  active={activeItem === "Profile"}
                  onClick={this.handleItemClick}
                />

                <Menu.Item>{<AuthNav />}</Menu.Item>
              </Menu.Menu>
            </Menu>
          </Grid.Row>

          <Grid.Row columns={2}>
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
