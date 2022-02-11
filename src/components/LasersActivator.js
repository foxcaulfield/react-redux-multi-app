import DashBoard from "./DashBoard";
import React, { useState } from "react";

const LasersActivator = (props) => {
  const [isActive, setIsActive] = useState(false);

  function activateLasers() {
    setIsActive(!isActive);
    // console.log("Lasers activated " + arg + "!");
  }
  return (
    <>
      <button onClick={() => activateLasers()}>{isActive ? "deactivate" : "activate"}</button>
      <button onClick={() => activateLasers()}>{isActive ? "deactivate" : "activate"}</button>
      <DashBoard isActive={isActive} />
    </>
  );
};

export default LasersActivator;
