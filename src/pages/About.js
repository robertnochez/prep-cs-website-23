import React from "react";
import "./../App.css";

import NavBar from "../components/NavBar";
import ContactImage from "../images/Contact.png";
import QuoteBlock from "../components/QuoteBlock";
import Footer from "../components/Footer";

import DestinyBio from "../images/DestinyBio.jpg";
import VincentBio from "../images/VincentBio.jpg";
import MarcosBio from "../images/MarcosBio.jpg";
import LailaBio from "../images/LailaBio.jpg";

import { Card, Icon, Image, Grid, Header } from "semantic-ui-react";
import TitleAndImageBlock from "../components/TitleAndImageBlock";

function About() {
  return (
    <div>
      <NavBar
        title="About CS Central"
        description="CS Central is a computer science initiative started by one 
                      university student and advanced by a team."
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
                <b>Meet The CS Central Team</b>
              </Header>
              <p>
                We are a group of undergraduate agents of change. Together,
                Destiny, Marcos, Laila and Vincent developed curriculum to make CS
                Central a valuable resource for minority students to easily
                transition into their post-secondary computer science careers.
              </p>
              <p>
                Feel free to explore CS Central and discover some of our
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
              <Image src={VincentBio} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Vincent Hong Lee</Card.Header>
                <Card.Meta>
                  CS Central 22 Co-Site Admin,
                  PREP CS Curriculum Co-Writer
                </Card.Meta>
                <Card.Description>
                 Hi everyone! I'm a 4th year EECS major, with interests in computer systems and security. 
                 Some of my interests include music and badminton.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="mail outline" bordered />
                vlee747 [at] berkeley [dot] edu
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
                CS Central 22 Co-Site Admin, PREP CS Curriculum Co-Writer
                </Card.Meta>
                <Card.Description>
                 Hey everyone! I'm Destiny, a rising junior interested in combining design and CS.
                 I like drawing, cooking, and reading comics. Looking forward to meeting everyone
                 this semester!
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="mail outline" bordered />
                duluong [at] berkeley [dot] edu
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2} centered>
          <Grid.Column width={5}>
            <Card centered fluid>
              <Image src={MarcosBio} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Marcos Hernandez</Card.Header>
                <Card.Meta>PREP CS Curriculum Co-Writer</Card.Meta>
                <Card.Description>
                Hello, I'm Marcos Hernandez, a second year student majoring in 
                Electrical Engineering and Computer Sciences from Salinas, California. 
                I am interested in pursuing a career in Software Engineering and meeting 
                new people with similar interests, not just professional ones.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="mail outline" bordered />
                marcosh [at] berkeley [dot] edu{" "}
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column width={2} />

          <Grid.Column width={5}>
            <Card centered fluid>
              <Image src={LailaBio} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Laila Walker</Card.Header>
                <Card.Meta>PREP CS Curriculum Co-Writer</Card.Meta>
                <Card.Description>
                 Hi, my name is Laila Walker and I am a rising sophomore studying computer science and
                 data science through the College of Letters and Science. For fun, I like to watch movies, 
                 hike, and travel around the Bay to see friends. 
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="mail outline" bordered />
                lailawalker[at] berkeley [dot] edu
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
