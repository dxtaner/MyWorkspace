import React from "react";
import "./Menu.css";

function Menu(props) {
  return (
    <div className="menu">
      <h2>Select a Video</h2>
      <ul>
        {props.videoValues.map((video, index) => (
          <li key={index} onClick={() => props.onSelectVideo(video)}>
            {video}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
