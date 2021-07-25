import React from "react"

import { Header } from "semantic-ui-react";

function Video(props) {
    const videoReleased = props.src ? true : false
    if (videoReleased) {
        return (
            <div class="embedded">
                <iframe 
                width="560" 
                height="315" 
                src={props.src}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                >
                </iframe>
            </div>
        )
    }
    return (
        <div style={{textAlign : "center", margin: "10em"}}>
            <Header as={"h3"}>Coming Soon!</Header>
        </div>
    )
}

export default Video
