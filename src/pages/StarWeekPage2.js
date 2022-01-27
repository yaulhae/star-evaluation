import styled from "styled-components";
import React from "react";
import StarRatingTemplate from "../componts/star/StarRatingTemplate";
import StarWeek from "../componts/star/StarWeek";
import StarWeekContainer from "../containers/star/StarWeekContainer";

const StarWeekPage2 = () => {
  return (
    <StarRatingTemplate>
      <StarWeekContainer />
    </StarRatingTemplate>
  );
};

export default StarWeekPage2;
