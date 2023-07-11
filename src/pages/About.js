import React from "react";
import "./../App.css";

import NavBar from "../components/NavBar";
import ContactImage from "../images/Contact.png";
import QuoteBlock from "../components/QuoteBlock";
import Footer from "../components/Footer";

import DestinyBio from "../images/DestinyBio.jpg";
import RobertBio from "../images/robertBio.jpeg";

import { Card, Icon, Image, Grid, Header } from "semantic-ui-react";
import TitleAndImageBlock from "../components/TitleAndImageBlock";

function About() {
  return (
    <div>
      <NavBar
        title="About PREP"
        description="The Pre-Engineering Program (PREP) is designed to help incoming students understand the rigors of Berkeley coursework."
        img={ContactImage}
      />

      <QuoteBlock
        bold={true}
        quote="Education is not the filling of a pail, but the lighting of a fire."
        author="W. B. Yeats"
      />

      <div
        style={{
          backgroundColor: "#EDEAE5",
          paddingTop: 75,
          paddingBottom: 75,
          marginTop: 75,
          marginBottom: 75,
        }}
      >
        <Grid stackable padded={"horizontally"} verticalAlign={"middle"}>
          <Grid.Row>
            <Grid.Column verticalAlign={"middle"} textAlign={"left"}>
              <Header as="h1">
                <b>Meet The CS Primer Team</b>
              </Header>
              <p>
                We are a group of undergraduate agents of change. Together,
                Destiny and Robert have developed a curriculum to make PREP CS Primer
                a valuable resource for minority students to easily
                transition into their post-secondary computer science careers.
              </p>
              <p>
                Feel free to explore  and discover some of our
                pedagogy within the lessons. You can read more about each one of
                us below, and if you have any questions, feel free to reach out
                to us! We will promptly get back to you!
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <Grid>
        <Grid.Row columns={2} centered>
          <Grid.Column width={5}>
            <Card centered fluid>
              <Image src={RobertBio} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Robert Nochez</Card.Header>
                <Card.Meta>
                PREP 2023 CS Curriculum Co-Writer
                </Card.Meta>
                <Card.Description>
                Hello! My name is Robert Nochez and I am a rising senior majoring in EECS and minoring in Data Science. 
                I am from Sacramento, California and my interests include backend development and mobile applications. 
                Feel free to ask me about how to get involved on campus or for any CS questions!
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="mail outline" bordered />
                robertnochez@berkeley.edu
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column width={2} />

          <Grid.Column width={5}>
            <Card centered fluid>
              <Image src={DestinyBio} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Destiny Luong</Card.Header>
                <Card.Meta>
                PREP 2023 CS Curriculum Co-Writer
                </Card.Meta>
                <Card.Description>
                 Hey everyone! I'm Destiny, a rising junior interested in combining design and CS.
                 I like drawing, cooking, and reading comics. Looking forward to meeting everyone
                 this semester!
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="mail outline" bordered />
                duluong@berkeley.edu
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Footer />
    </div>
  );
}

export default About;
