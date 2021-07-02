import React from "react";
import "./../App.css";

import { Grid, Header } from "semantic-ui-react";

function QuoteBlock(props) {
  return (
    <div
      style={{
        backgroundColor: props.background ? "#EDEAE5" : "",
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <Grid stackable padded textAlign={"center"} verticalAlign={"middle"}>
        <Grid.Row columns={1}>
          <Grid.Column width={16} style={{ paddingTop: 40 }}>
            <Header as="h2" style={{ lineHeight: 1.75 }}>
              {props.bold ? <b>{props.quote}</b> : props.quote}
            </Header>
            <Header as="h3">{props.author}</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default QuoteBlock;
