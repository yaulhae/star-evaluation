import styled from "styled-components";
import React from "react";
import StarRating from "../../componts/star/StarRating";
import { useDispatch, useSelector } from "react-redux";
import { changeCircle } from "../../modules/star";

const StarRatingContainerBlock = styled.div``;

const StarRatingContainer = () => {
  const dispatch = useDispatch();
  const { circles } = useSelector(({ star }) => ({
    circles: star.circles,
  }));
  const changeYellow = (num) => {
    dispatch(changeCircle(num));
  };
  return (
    <StarRatingContainerBlock>
      <StarRating circles={circles} changeYellow={changeYellow} />
    </StarRatingContainerBlock>
  );
};

export default StarRatingContainer;
