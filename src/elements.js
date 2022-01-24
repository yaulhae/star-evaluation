import styled from "styled-components";

export const TextTitle = styled.div`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  margin-bottom: ${(props) => props.marginBottom};
  margin-right: ${(props) => props.marginRight};
  display: ${(props) => props.display};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};
`;

export const Button = styled.button`
  padding: ${(props) => props.padding};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
`;
