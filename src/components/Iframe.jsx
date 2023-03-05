import React from "react";

function IframeComponent(props) {
  return (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/HyEOrBtb4_g?controls=0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
}

export default IframeComponent;
