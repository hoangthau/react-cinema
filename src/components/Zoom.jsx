import React from "react";

import s from "./Zoom.module.css";

const Zoom = ({ zoomIn, zoomOut }) => (
  <div className={s.zoom}>
    <button onClick={zoomIn}>+</button>
    <button onClick={zoomOut}>-</button>
  </div>
);

export default Zoom;
