import React from "react";
import "../../App.css";

import Calendar from "../../components/Calendar";
import calendarData from "./calendarData.json";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import WMCode1 from "../../images/WMCode1.png";

function WMHome(props) {
  return (
    <div>
      <NavBar
        img={WMCode1}
        title="Welcome to WMCode!"
        description="
        LearningPlatform is happy to take this opportunity to 
        show you the beauty of computer science."
      />

      <br />
      <br />
      <br />

      <Calendar data={calendarData} />
      <Footer />
    </div>
  );
}

export default WMHome;
