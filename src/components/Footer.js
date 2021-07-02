import React from "react";
import "./../App.css";

import { Segment, Container, Grid, List, Header } from "semantic-ui-react";

function Footer(props) {
  return (
    <div style={{ backgroundColor: "" }}>
      <Segment vertical style={{ padding: "5em 0em" }}>
        <hr />
        <Container>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={5}>
                <Header as="h4" content="Menu 1" />
                <List link>
                  <List.Item as="a">Item 1</List.Item>
                  <List.Item as="a">Item 2</List.Item>
                  <List.Item as="a">Item 3</List.Item>
                  <List.Item as="a">Item 4</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header as="h4" content="Menu 2" />
                <List link>
                  <List.Item as="a">Item 1</List.Item>
                  <List.Item as="a">Item 2</List.Item>
                  <List.Item as="a">Item 3</List.Item>
                  <List.Item as="a">Item 4</List.Item>
                </List>
              </Grid.Column>
              {/* <Grid.Column width={7}>
                <Header as="h4">Footer Header</Header>
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </Grid.Column> */}
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
