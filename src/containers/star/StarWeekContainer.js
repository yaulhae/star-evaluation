import styled from "styled-components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import star from "../../modules/star";
import StarWeek from "../../componts/star/StarWeek";

const StarWeekContainerBlock = styled.div``;

const StarWeekContainer = () => {
  const { days } = useSelector(({ star }) => ({
    days: star.days,
  }));
  return (
    <StarWeekContainerBlock>
      <StarWeek days={days} />
    </StarWeekContainerBlock>
  );
};

export default StarWeekContainer;
