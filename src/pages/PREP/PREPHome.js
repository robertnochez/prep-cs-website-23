import React from "react";
import "../../App.css";

import Calendar from "../../components/Calendar";
import calendarData from "./calendarData.json";

import NavBar from "../../components/NavBar";
import QuoteBlock from "../../components/QuoteBlock";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import HomeImage from "../../images/PREPHome.png";

function PREPHome(props) {
  return (
    <div>
      <br />
      <br />
      <br />

      <NavBar
        img={HomeImage}
        title="Welcome to PREP Computer Science!"
        description="
        CS Central is happy to take this opportunity to 
        introduce you to UC Berkeley Computer Science."
      />

      <QuoteBlock
        bold={true}
        quote="Questions are the important thing, answers are less important. 
          Learning to ask a good question is the heart of intelligence.
          Learning the answer--well, answers are for students. Questions are for thinkers."
        author="R. Schank (in 'The Connosseur's Guide to the Mind')."
      />

      <Carousel />

      <Calendar data={calendarData} />
      <Footer />
    </div>
  );
}

export default PREPHome;
