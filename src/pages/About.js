import React from "react";
import "./../App.css";

import NavBar from "../components/NavBar";
import ContactImage from "../images/Contact.png";
import QuoteBlock from "../components/QuoteBlock";
import Footer from "../components/Footer";

import JesusBio from "../images/JesusBio.PNG";
import CrisBio from "../images/CrisBio.jpg";
import KarenBio from "../images/KarenBio.png";
import YoussefBio from "../images/YoussefBio.png";

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
                Destiny, Marcos and Vincent developed curriculum to make CS
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
              <Image src={JesusBio} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Jesus Villalobos</Card.Header>
                <Card.Meta>
                  CS Central Founder, Co-Site Admin, WMCode Curriculum Writer,
                  PREP CS Curriculum Co-Writer
                </Card.Meta>
                <Card.Description>
                  Jesus is a second-year Electrical Engineering and Computer
                  Sciences student at UC Berkeley. He is firm believer in equity
                  and passionate about STEM education, and combined both by
                  founding CS Central. At Berkeley, Jesus is a research
                  assistant in the Algorithms and Computing Education (ACE) lab
                  where he develops software for university courses, and is a
                  mentor for first-year minority students. In the future, Jesus
                  wants to expand CS Central to reach as many underrepresented
                  students as it can, to open the doors to their futures in STEM
                  and computer science.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="mail outline" bordered />
                jvillalobos [at] berkeley [dot] edu
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column width={2} />

          <Grid.Column width={5}>
            <Card centered fluid>
              <Image src={CrisBio} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Cristian Moran</Card.Header>
                <Card.Meta>
                  Co-Site Admin, PREP CS Curriculum Co-Writer
                </Card.Meta>
                <Card.Description>
                  Cristian is second year student at UC Berkeley majoring in
                  Electrical Engineering and Computer Sciences. He is currently
                  working in the Algorithms and Computing Education (ACE) lab,
                  contributing to PrairieLearn, an open source learning platmorm
                  used by education centers across the country. Within the
                  Berkeley campus, Cris enjoys helping future generations and
                  serves a mentor to first-year EECS students, along with being
                  a tutor for the specialized CS Scholars section of the
                  introductory programming course at Berkeley.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="mail outline" bordered />
                cris [dot] moran [at] berkeley [dot] edu
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2} centered>
          <Grid.Column width={5}>
            <Card centered fluid>
              <Image src={KarenBio} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Karen Ruiz-Roca</Card.Header>
                <Card.Meta>PREP CS Curriculum Co-Writer</Card.Meta>
                <Card.Description>
                  Karen is a second-year bioengineering student at UC Berkeley
                  and a graduate of King-Drew Magnet Medical High School in Los
                  Angeles, CA. At UC Berkeley, Karen is a summer undergraduate
                  researcher in the Herr Lab. Her current focus is on the use of
                  gel electrophoresis in clinical trials. She was part of the
                  PREP program her freshman year and is currently a PREP
                  Computer Science instructor for the Introduction to Python
                  course made for first-generation and first-year students. She
                  knows the importance of STEM and plans to bring coding to her
                  former high school and middle school classrooms. She is also a
                  current mentor in the PREP mentor program and a Co-Facilitator
                  for the De Colores Club on campus.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="mail outline" bordered />
                karenruizroca [at] berkeley [dot] edu{" "}
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column width={2} />

          <Grid.Column width={5}>
            <Card centered fluid>
              <Image src={YoussefBio} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Youssef Salib</Card.Header>
                <Card.Meta>PREP CS Curriculum Co-Writer</Card.Meta>
                <Card.Description>
                  Youssef is a second-year student at UC Berkeley majoring in
                  Electrical Engineering and Computer Sciences. He enjoys giving
                  back to his community, and chose to return to the very same
                  program that he participated in, as a tutor and mentor. This
                  Pre-Engineering Progam (PREP) allowed Youssef to develop and
                  deliver understandable, rigorous material to prepare students
                  for Berkeley computer science.Youssef is actively looking for
                  opportunities in industry and research to valuably contribute
                  to important causes and initiatives.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="mail outline" bordered />
                youssef [dot] salib01 [at] berkeley [dot] edu
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
