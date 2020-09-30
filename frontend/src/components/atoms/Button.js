import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  height: 30px;
  font-size: 14px;
  border-radius: 5px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  color: #fff;
  border: solid 1px #da7c0c;
  background: rgb(242, 162, 44);
  padding: 5px 10px;
  margin: auto;
  width: fit-content;

  :hover {
    background: #f47c20;
    background: linear, left top, left bottom, from(#f88e11), to(#f06015);
    background: top, #f88e11, #f06015;
  }
  :active {
    color: #fff;
    background: linear, left top, left bottom, from(#f47a20), to(#faa51a);
    background: top, #f47a20, #faa51a;
    top: 1px;
    position: relative;
  }
`;
const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
