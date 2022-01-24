import styled from "styled-components";
import React, { useState } from "react";
import CircleItem from "./CircleItem";

const CircleListBlock = styled.div`
  display: flex;
`;

const CircleList = () => {
  const [evaluation, setEvaluation] = useState([
    "gray",
    "gray",
    "gray",
    "gray",
    "gray",
  ]);

  const changeYellow = (index) => {
    let newCircleList = evaluation.map((item, i) => {
      return i <= index ? "yellow" : "gray";
    });
    setEvaluation(newCircleList);
  };

  return (
    <CircleListBlock>
      {evaluation.map((item, index) => {
        if (item === "gray") {
          return (
            <CircleItem
              change={() => changeYellow(index)}
              background={"#DDDDDD"}
            />
          );
        } else {
          return (
            <CircleItem
              change={() => changeYellow(index)}
              background={"#FFEB3B"}
            />
          );
        }
      })}
    </CircleListBlock>
  );
};

export default CircleList;
