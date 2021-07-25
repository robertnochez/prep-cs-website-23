import React from "react";
import "../../App.css";

import Calendar from "../../components/Calendar";
import calendarData from "./calendarData.json";

import NavBar from "../../components/NavBar";
import QuoteBlock from "../../components/QuoteBlock";
import Footer from "../../components/Footer";
import WMCodeInfoImage from "../../images/WMCodeInfo.png";

function WMHome(props) {
  return (
    <div>
      <NavBar
        img={WMCodeInfoImage}
        title="Welcome to WMCode!"
        description="
        LearningPlatform is happy to take this opportunity to 
        show you the beauty of computer science."
      />

      <QuoteBlock
        bold={true}
        quote="Awaken people's curiosity. It is enough to open minds, do not overload them. 
          Put there just a spark."
        author="A. France"
      />

      <br />
      <br />

      <Calendar data={calendarData} />
      <Footer />
    </div>
  );
}

export default WMHome;
