import React from "react";
import "./../../App.css";

import NavBar from "../../components/NavBar";

import HomeImage from "../../images/VisitorHome.png";

import {} from "semantic-ui-react";

function VistorHome(props) {
  return (
    <div>
      <NavBar
        img={HomeImage}
        title="Welcome to LearningPlatform, *~Visitor~*"
        description="
        LearningPlatform is happy to offer you insight into how 
        we teach our students the beauty of computer science."
      />
    </div>
  );
}

export default VistorHome;
