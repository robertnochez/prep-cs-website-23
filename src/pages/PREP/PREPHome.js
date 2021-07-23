import React from "react";
import "../../App.css";

import Calendar from "../../components/Calendar";
import calendarData from "./calendarData.json";

import NavBar from "../../components/NavBar";
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
        LearningPlatform is happy to take this opportunity to 
        introduce you to UC Berkeley Computer Science."
      />
      
      <br />
      <br />

      <Calendar data={calendarData} />
    </div>
  );
}

export default PREPHome;
