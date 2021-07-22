import React from "react";
import "../App.css";

function Slide(props) {
  return (
    <div class="slides" style={{ textAlign: "center" }}>
      <iframe
        src={`https://docs.google.com/presentation/d/e/2PACX-1vQ8FUk326z79IIS2bnHXF4tXOWXZGujzJ3BivfX3dfjH5JFpjQtigMdgtfRAl0y_-oPeeEb7eNFvGDS/embed?start=false&loop=false&delayms=3000`}
        frameborder="0"
        // width="960"
        // height="569"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    </div>
  );
}

export default Slide;
