import React from "react";

const List = (props) => {
  const listOfNumbers= props.numbers;
  const listOfItems = listOfNumbers.map((number) => <div key={number.toString()}>№{number}</div>);
  return <div>{listOfItems}</div>;
};

export default List;
