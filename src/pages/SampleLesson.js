import React from "react";
import "./../App.css";

import NavBar from "../components/NavBar";
import SampleLessonImage from "../images/SampleLesson.png";
import QuoteBlock from "../components/QuoteBlock";
import TitleAndImageBlock from "../components/TitleAndImageBlock";
import Footer from "../components/Footer";

import { Header } from "semantic-ui-react";

function SampleLesson(props) {
  return (
    <div>
      <NavBar
        title="Sample Lesson"
        description="A sneak peek of the material that we teach to our students."
        img={SampleLessonImage}
      />

      <QuoteBlock
        bold={true}
        quote="Being abstract is something profoundly different from being vague...
          The purpose of abstraction is not to be vague, but to create a new semantic 
          level in which one can be absolutely precise."
        author="E. Dijkstra"
      />

      <TitleAndImageBlock
        background={true}
        firstTitle="This is the Sample Lesson"
        firstDescription="Describe it here :)"
      />

      <Footer />
    </div>
  );
}

export default SampleLesson;
