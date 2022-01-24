import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const StarItemBlock = styled.li`
  display: flex;
  justify-content: space-around;
  margin-bottom: 24px;

  .yellowCircle {
    width: 30px;
    height: 30px;
    background: #ffeb3b;
    border-radius: 50%;
  }

  .grayCircle {
    width: 30px;
    height: 30px;
    background-color: #dddddd;
    border-radius: 50%;
  }

  .triangle {
    width: 0;
    height: 0;
    border-bottom: 15px solid transparent;
    border-top: 15px solid transparent;
    border-left: 30px solid #800080;
    cursor: pointer;
  }

  .day {
    margin-right: 10px;
  }

  .circle {
    margin-right: 10px;
  }
`;

const StarItem = ({ item }) => {
  const yellowArr = Array.from({ length: item.yellowCircle });
  const grayArr = Array.from({ length: item.grayCircle });
  return (
    <StarItemBlock>
      <span className="day">{item.day}</span>
      {yellowArr.map((item) => {
        return <div className="yellowCircle circle"></div>;
      })}
      {grayArr.map((item) => {
        return <div className="grayCircle circle"></div>;
      })}
      <Link to={`/review/${item.day}`} className="triangle"></Link>
    </StarItemBlock>
  );
};

export default StarItem;
