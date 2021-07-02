import React from "react";
import "./../App.css";

import NavBar from "../components/NavBar";
import PREPHome from "../images/PREPHome.png";
import QuoteBlock from "../components/QuoteBlock";
import TitleAndImageBlock from "../components/TitleAndImageBlock";
import Footer from "../components/Footer";

import { Segment } from "semantic-ui-react";

function PREPCSInfo(props) {
  return (
    <div>
      <NavBar
        title="Pre-Engineering Program (PREP) Computer Science"
        description="A preparatory course for the rigors of UC Berkeley Computer Science."
        img={PREPHome}
      />

      <QuoteBlock
        bold={true}
        quote="Questions are the important thing, answers are less important. 
          Learning to ask a good question is the heart of intelligence.
          Learning the answer--well, answers are for students. Questions are for thinkers."
        author="R. Schank (in 'The Connosseur's Guide to the Mind')"
      />

      <TitleAndImageBlock
        background={true}
        firstTitle="Title"
        firstDescription="Description"
        media={<Segment placeholder>PlaceHolder Image</Segment>}
      />

      <Footer />
    </div>
  );
}

export default PREPCSInfo;
