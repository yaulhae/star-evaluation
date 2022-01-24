import styled from "styled-components";
import React from "react";
import StarItem from "./StarItem";

const StarListBlock = styled.div``;

const StarList = ({ randomStarList }) => {
  return (
    <StarListBlock>
      {randomStarList.map((item, index) => {
        return <StarItem item={item} />;
      })}
    </StarListBlock>
  );
};

export default StarList;
