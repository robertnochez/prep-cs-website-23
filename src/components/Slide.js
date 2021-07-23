import React from "react";
import "../App.css";

function Slide(props) {
  return (
    <div class="slides" style={{ textAlign: "center" }}>
      <iframe
        src={props.src}
        frameborder="0"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    </div>
  );
}

export default Slide;
