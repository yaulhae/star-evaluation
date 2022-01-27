import styled from "styled-components";
import React from "react";
import { type } from "@testing-library/user-event/dist/type";

const StarRatingTemplateBlock = styled.div`
  max-width: 350px;
  width: 100%;
  margin: 5vh auto;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 4px;
  height: 90vh;
  padding: ${(props) => (props.padding ? props.padding : "4.0625em 3.4375em")};
`;

const StarRatingTemplate = ({ children, padding }) => {
  return (
    <StarRatingTemplateBlock padding={padding}>
      {children}
    </StarRatingTemplateBlock>
  );
};

export default StarRatingTemplate;
