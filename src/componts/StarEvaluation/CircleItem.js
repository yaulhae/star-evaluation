import styled from "styled-components";
import React from "react";

const CircleItemBlock = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background: ${(props) => props.background};
  margin: 5px;
  margin-bottom: 16px;
  cursor: pointer;
`;

const CircleItem = ({ background, change }) => {
  return (
    <CircleItemBlock background={background} onClick={change}></CircleItemBlock>
  );
};

export default CircleItem;
