import styled from "styled-components";
import React from "react";
import StarEvaluation from "../componts/StarEvaluation/EvaluationText";
import EvaluationText from "../componts/StarEvaluation/EvaluationText";
import CircleList from "../componts/StarEvaluation/CircleList";
import { Button } from "../elements";

const StarEvaluationPageBlock = styled.div`
  width: 354px;
  height: 677px;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 55px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StarEvaluationPage = () => {
  return (
    <StarEvaluationPageBlock>
      <EvaluationText />
      <CircleList />
      <Button
        background={"#800080"}
        width={"260px"}
        padding={"14px"}
        borderRadius={"4px"}
        color={"white"}
        fontSize={"14px"}
      >
        평점 남기기
      </Button>
    </StarEvaluationPageBlock>
  );
};

export default StarEvaluationPage;
