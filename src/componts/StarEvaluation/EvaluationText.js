import styled from "styled-components";
import React from "react";
import { TextTitle } from "../../elements";

const EvaluationTextBlock = styled.div`
  .alignCenter {
    text-align: center;
    margin-bottom: 16px;
  }
`;

const EvaluationText = () => {
  return (
    <EvaluationTextBlock>
      <TextTitle>
        <div className="alignCenter">
          <TextTitle
            display={"inline-block"}
            fontSize={"20px"}
            background={"#FFA500"}
            fontWeight={"bold"}
            color={"white"}
            borderRadius={"4px"}
            marginRight={"6px"}
          >
            월요일
          </TextTitle>
          <TextTitle
            display={"inline-block"}
            fontWeight={"bold"}
            fontSize={"20px"}
          >
            평점남기기
          </TextTitle>
        </div>
      </TextTitle>
    </EvaluationTextBlock>
  );
};

export default EvaluationText;
