import React, { useEffect, useState, useRef } from "react";
import './Text.css';


const Text = (props) => {
  
  return (
    <>
      <div className={`plainText`} style={{ height: "73vh", width: "98vw", padding: 0 }}>
        <div>hi this is just a wall of text with </div>
        <div>center: <span className={`plainTextHighlight`}>{props.center}</span></div>
        <div>a: <span className={`plainTextHighlight`}>{props.a}</span></div>
        <div>b: <span className={`plainTextHighlight`}>{props.b}</span></div>
      </div>
    </>
  );
};

export default Text;
