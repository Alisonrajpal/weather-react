import React from "react";
import Weather from "./Weather";
import Video from "../images/lightning.mp4";

import "./Video.css";
function VideoComponent() {
  return (
    <div className="video_wrap">
      <video src={Video} autoPlay muted loop className="bg-cover"></video>

      <Weather />
    </div>
  );
}

export default VideoComponent;
