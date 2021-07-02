import React from "react";
import "../../App.css";

import NavBar from "../../components/NavBar";
import WMCode1 from "../../images/WMCode1.png";

import {} from "semantic-ui-react";

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
    </div>
  );
}

export default WMHome;
