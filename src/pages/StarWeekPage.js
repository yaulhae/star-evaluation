import styled from "styled-components";
import React from "react";
import { TextTitle } from "../elements";
import { Link } from "react-router-dom";
import StarList from "../componts/StarWeek/StarList";

const StarWeekBlock = styled.div`
  width: 356px;
  height: 676px;
  margin: 0 auto;
  margin-top: 50px;
  border: 1px solid rgb(221, 221, 221);
  padding: 50px 60px;
  border-radius: 5px;
`;

const StarWeekPage = ({ randomStarList }) => {
  return (
    <StarWeekBlock>
      <TextTitle
        fontSize={"18px"}
        fontWeight={"bold"}
        textAlign={"center"}
        marginBottom={"20px"}
      >
        내 일주일은?
      </TextTitle>
      <StarList randomStarList={randomStarList} />
    </StarWeekBlock>
  );
};

export default StarWeekPage;
