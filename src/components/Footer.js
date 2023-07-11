import React from "react";
import "./../App.css";

import { Segment, Container, Grid, List, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div class="footer">
      <Segment vertical>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={5}>
              <Link to="/">
                <Header as={"h4"}>Home</Header>
              </Link>
            </Grid.Column>
            <Grid.Column width={5}>
              <Link to="/prepcs">
                <Header as={"h4"}>PREP CS</Header>
              </Link>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={5} textAlign={"left"}>
              <Header as="h6">
                Robert Nochez and Destiny Luong; Destiny Luong and Vincent Lee, 2022; Jesus Villalobos and Cristian Moran, 2021.
              </Header>
            </Grid.Column>
            <Grid.Column width={4}></Grid.Column>
            <Grid.Column width={5} textAlign={"right"}>
              <Header as="h6">
                CS Central has no official affiliation with UC Berkeley.
              </Header>
            </Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

export default Footer;
