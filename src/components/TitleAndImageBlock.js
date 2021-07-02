import React from "react";
import "./../App.css";

import { Grid, Header } from "semantic-ui-react";

function TitleAndImageBlock(props) {
  return (
    <div
      style={{
        backgroundColor: props.background ? "#EDEAE5" : "",
        paddingTop: 35,
        paddingBottom: 35,
        marginTop: 25,
        marginBottom: 25,
      }}
    >
      <Grid
        stackable
        padded={"horizontally"}
        verticalAlign={"middle"}
        // textAlign={"center"}
      >
        <Grid.Row columns={3}>
          <Grid.Column width={8} verticalAlign={"middle"}>
            <Header as="h1">
              <b>{props.firstTitle}</b>
            </Header>
            <p>{props.firstDescription}</p>
            {props.secondTitle ? <br /> : ""}
            <Header as="h1">
              <b>{props.secondTitle}</b>
            </Header>
            <p>{props.secondDescription}</p>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={6}>{props.media}</Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default TitleAndImageBlock;
