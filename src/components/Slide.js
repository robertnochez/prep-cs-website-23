import React from "react";
import "../App.css";

function Slide(props) {
  return (
    <div class="embedded">
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
