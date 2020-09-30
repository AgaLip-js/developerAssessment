import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  outline: none;
  display: block;
  background: #e8f3f9;
  width: 250px;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: black;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  transition: 0.3s ease;
`;
const StyledLabel = styled.label`
  display: block;
  margin-bottom: 25px;
  margin-top: 5px;
  color: black;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

const Input = ({ type, name, onChange, value, title, secondary, required }) => {
  return (
    <>
      <StyledInput
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        props={secondary}
        required={required}
      />
      <StyledLabel>{title}</StyledLabel>
    </>
  );
};

export default Input;
