import React, { useState, useEffect } from "react";

const Clock = (props) => {
  let [date, setDate] = useState(new Date());
  //   let [date, setDate] = useState(props.date);

  useEffect(() => {
      console.log(`effect used`)
      
    let timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <>
      {/* <div>Московское время {props.date.toLocaleTimeString()}</div> */}
      <div>Реакт Московское время {date.toLocaleTimeString()}</div>
    </>
  );
};

export default Clock;
