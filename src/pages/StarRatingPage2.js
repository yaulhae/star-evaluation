import styled from "styled-components";
import React from "react";
import StarRatingTemplate from "../componts/star/StarRatingTemplate";
import StarRating from "../componts/star/StarRating";
import StarRatingContainer from "../containers/star/StarRatingContainer";

const StarRatingPage2 = () => {
  return (
    <StarRatingTemplate padding={"2.5em 5.625em"}>
      <StarRatingContainer />
    </StarRatingTemplate>
  );
};

export default StarRatingPage2;
