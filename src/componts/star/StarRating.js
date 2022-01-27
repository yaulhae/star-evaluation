import styled from "styled-components";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeCircle } from "../../modules/star";

const StarRatingBlock = styled.div`
  .title {
    font-weight: bold;
    margin: 1.125em 0;
    text-align: center;
  }
  .day {
    font-size: 1.17em;
    font-weight: 900;
    background: orange;
    color: rgb(255, 255, 255);
    padding: 0.2rem;
    border-radius: 5px;
    margin-right: 0.5em;
  }
  .circle-wraper {
    margin-bottom: 1.25em;
  }
  .circle-item {
    display: flex;
    justify-content: center;
  }
  .circle-yellow {
    width: 25px;
    height: 30px;
    border-radius: 30px;
    background: #ffeb3b;
    margin: 5px;
    cursor: pointer;
  }
  .circle-gray {
    width: 25px;
    height: 30px;
    border-radius: 30px;
    background: #dddddd;
    margin: 5px;
    cursor: pointer;
  }
  .submit-star {
    color: white;
    width: 100%;
    padding: 1em 3.125em;
    background: #800080;
    border-radius: 8px;
    font-size: 0.813rem;
  }
`;

const StarRating = ({ circles, changeYellow }) => {
  const day = useParams().day + "요일";

  // const changeYellow = (num) => {
  //   let newCircles = circles.map((circle, index) => {
  //     return index <= num ? "yellow" : "gray";
  //   });
  //   setCircles(newCircles);
  // };

  // const [circles, setCircles] = useState([
  //   "gray",
  //   "gray",
  //   "gray",
  //   "gray",
  //   "gray",
  // ]);

  return (
    <StarRatingBlock>
      <h3 className="title">
        <b className="day">{day}</b>평점 남기기
      </h3>
      <div className="circle-wraper">
        <ul className="circlr-list">
          <li className="circle-item">
            {circles.map((circle, index) => {
              return circle === "yellow" ? (
                <div
                  className="circle-yellow"
                  onClick={() => changeYellow(index)}
                ></div>
              ) : (
                <div
                  className="circle-gray"
                  onClick={() => changeYellow(index)}
                ></div>
              );
            })}
          </li>
        </ul>
      </div>
      <Link to="/">
        <button className="submit-star">평점 남기기</button>
      </Link>
    </StarRatingBlock>
  );
};

export default StarRating;
