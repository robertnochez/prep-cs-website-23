import React from "react";
import "../../App.css";

import NavBar from "../../components/NavBar";
import HomeImage from "../../images/PREPHome.png";

import {} from "semantic-ui-react";

function PREPHome(props) {
  return (
    <div>
      <NavBar
        img={HomeImage}
        title="Welcome to PREP Computer Science!"
        description="
        LearningPlatform is happy to take this opportunity to 
        introduce you to UC Berkeley Computer Science."
      />
    </div>
  );
}

export default PREPHome;
