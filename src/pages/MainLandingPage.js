import React from "react";
import "./../App.css";

import { Link } from "react-router-dom";

import NavBar from "./../components/NavBar";
import Footer from "./../components/Footer";
import LandingPageImage from "./../images/LandingPage.png";
import TitleAndImageBlock from "./../components/TitleAndImageBlock";
import QuoteBlock from "./../components/QuoteBlock";
import LoginModal from "../components/LoginModal";
import Loading from "../components/Loading";

// import { useAuth0 } from "@auth0/auth0-react";

import { Header, Segment, Grid, Icon } from "semantic-ui-react";

function MainLandingPage(props) {
  // const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div>
      <NavBar
        img={LandingPageImage}
        title="Welcome to CS Central!"
        description="
        An independent learning and preparation hub for students
        interested STEM, with a focus on Computer Science."
      />

      {/* <TitleAndImageBlock
        background={true}
        firstTitle="LearningPlatform's Mission"
        firstDescription="We firmly believe that STEM has the power to change the world
          for the better."
        secondTitle="Our Learning Model"
        secondDescription="At LearningPlatform, our emphasis is on learning."
        media={<Segment placeholder>PlaceHolder Image</Segment>}
      /> */}

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
        firstTitle="About CS Central"
        firstDescription="CS Central was started upon the firm belief that anyone 
          and everyone can learn to code, no matter their background. We are a group 
          of college students interested in recycling our success in computer science."
        secondTitle="Our Mission"
        secondDescription="CS Central is determined to offer resources to aspiring computer 
          scientists. We want to inspire and empower students to build the future they want 
          to see, and will provide them with the support they need to get there."
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
                name={"users"}
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
            <Grid.Row>
              <Grid.Column width={8}>
                In conjuction with the UC Berkeley Pre-Engineering Program
                (PREP), CS Central guides incoming first year students through
                an introduction to the UC Berkeley computer science curriculum.
              </Grid.Column>
            </Grid.Row>
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
