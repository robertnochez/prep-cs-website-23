import React from "react";
import "./../App.css";

import NavBar from "../components/NavBar";
import WMCodeInfoImage from "../images/WMCodeInfo.png";
import TitleAndImageBlock from "../components/TitleAndImageBlock";
import QuoteBlock from "../components/QuoteBlock";
import Footer from "../components/Footer";

import { Segment } from "semantic-ui-react";

function WMCodeInfo(props) {
  return (
    <div>
      <NavBar
        title="Wave-Maker Code (WMCode)"
        description="Introductory computer science course taught in Richmond, CA."
        img={WMCodeInfoImage}
      />

      <QuoteBlock
        bold={true}
        quote="Awaken people's curiosity. It is enough to open minds, do not overload them. 
          Put there just a spark."
        author="A. France"
      />

      <TitleAndImageBlock
        background={true}
        firstTitle="Hello World"
        firstDescription="This is cool"
        media={<Segment placeholder>PlaceHolder Image</Segment>}
      />

      <Footer />
    </div>
  );
}

export default WMCodeInfo;
