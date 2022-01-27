import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StarWeekBlock = styled.div`
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 1.188rem;
    margin-bottom: 1em;
  }
  .star-week-item {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
  }
  .day {
    font-weight: bold;
  }
  .circle-gray {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #dddddd;
    margin: 5px;
  }
  .circle-yellow {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ffeb3b;
    margin: 5px;
  }
  .triangle {
    width: 0px;
    height: 0px;
    border-top: 16px solid transparent;
    border-left: 28px solid #800080;
    border-bottom: 16px solid transparent;
  }
`;

const StarWeek = ({days}) => {
  // const [days, setDays] = useState([
  //   { day: "월", gray: 5, yellow: 0 },
  //   { day: "화", gray: 5, yellow: 0 },
  //   { day: "수", gray: 5, yellow: 0 },
  //   { day: "목", gray: 5, yellow: 0 },
  //   { day: "금", gray: 5, yellow: 0 },
  //   { day: "토", gray: 5, yellow: 0 },
  //   { day: "일", gray: 5, yellow: 0 },
  // ]);
  return (
    <StarWeekBlock>
      <h3 className="title">내 일주일은?</h3>
      <div className="wraper">
        <ul className="star-week-list">
          {days.map((item, index) => {
            item.yellow = Math.ceil(Math.random() * 5);
            item.gray = 5 - item.yellow;
            return (
              <li className="star-week-item">
                <span className="day">{item.day}</span>
                {Array.from({ length: item.yellow }, () => 0).map(
                  (yellowCircle, index) => {
                    return <div className="circle-yellow"></div>;
                  }
                )}
                {Array.from({ length: item.gray }, () => 0).map(
                  (grayCircle, index) => {
                    return <div className="circle-gray"></div>;
                  }
                )}
                <Link to={`/review/${item.day}`}>
                  <div className="triangle"></div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </StarWeekBlock>
  );
};

export default StarWeek;
