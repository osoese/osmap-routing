import React, { useEffect, useState, useRef } from "react";


const Text = (props) => {
  
  return (
    <>
      <div style={{ height: "75vh", width: "100vw", padding: 0 }}>
        hi this is just a wall of text with 
        center: {props.center}
        a: {props.a}
        b: {props.b}
      </div>
    </>
  );
};

export default Text;
