import React from "react";
import "./../App.css";

import NavBar from "./../components/NavBar";
import Footer from "./../components/Footer";
import LandingPageImage from "./../images/LandingPage.png";
import TitleAndImageBlock from "./../components/TitleAndImageBlock";
import QuoteBlock from "./../components/QuoteBlock";
import LoginModal from "../components/LoginModal";
import Loading from "../components/Loading";

import { useAuth0 } from "@auth0/auth0-react";

import { Header, Segment, Grid, Icon } from "semantic-ui-react";

function MainLandingPage(props) {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <NavBar
        img={LandingPageImage}
        title="Welcome to LearningPlatform"
        description="
        An independent learning and preperation hub for students
        interested in Science, Technology, Engineering, Math (STEM) and
        Computer Science."
      />

      <TitleAndImageBlock
        background={true}
        firstTitle="LearningPlatform's Mission"
        firstDescription="We firmly believe that STEM has the power to change the world
          for the better."
        secondTitle="Our Learning Model"
        secondDescription="At LearningPlatform, our emphasis is on learning."
        media={<Segment placeholder>PlaceHolder Image</Segment>}
      />

      {/* <LoginModal /> */}

      <QuoteBlock
        bold={true}
        quote="The world is complicated and messy, with lots of loose ends,
          and the teacher's job is to impose order on the confusion, to
          convert a chaotic set of episodes into a coherent narrative."
        author="I. Stewart"
      />

      <TitleAndImageBlock
        background={true}
        firstTitle="About LearningPlatform"
        firstDescription="We firmly believe that STEM has the power to change the world
          for the better."
        media={<Segment placeholder>PlaceHolder Image</Segment>}
      />

      <div style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div
          style={{
            paddingTop: 35,
            paddingBottom: 35,
          }}
        >
          <Grid stackable padded textAlign={"center"}>
            <Grid.Row>
              <Icon
                name={"student"}
                size={"massive"}
                color={"blue"}
                inverted
                circular
              ></Icon>
            </Grid.Row>
            <Grid.Row>
              <Header as="h1">
                <b>WMCode</b>
              </Header>
            </Grid.Row>
            <Grid.Row>This is sample text.</Grid.Row>
          </Grid>
        </div>

        <div
          style={{
            paddingTop: 35,
            paddingBottom: 35,
          }}
        >
          <Grid stackable padded textAlign={"center"}>
            <Grid.Row>
              <Icon
                name={"spy"}
                size={"massive"}
                color={"blue"}
                inverted
                circular
              ></Icon>
            </Grid.Row>
            <Grid.Row>
              <Header as="h1">
                <b>Pre-Engineering Program</b>
              </Header>
            </Grid.Row>
            <Grid.Row>This is sample text.</Grid.Row>
          </Grid>
        </div>
      </div>

      {/* <TitleAndImageBlock
        firstTitle="The Future of LearningPlatform"
        firstDescription="We look at the future optimistically."
      /> */}

      <Footer />
    </div>
  );
}

export default MainLandingPage;
