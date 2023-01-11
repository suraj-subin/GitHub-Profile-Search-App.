import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  height:100%;
  min-height: 50px;
  width:100%;
  max-width: 245.78px;
  border-radius: 6px;
  border: 1px solid #F24E1E;
  background-color: ${(props) =>
    props.color === "orange" ? " #DE5A21" : "#0D5EF4"};
`;

