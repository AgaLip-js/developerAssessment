import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { addNewStudent } from "../../redux/actions/studentActions";
import { paths } from "../../_constants/paths";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const StyledForm = styled.div`
  position: relative;
  background: white;
  width: fit-content;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 40px;
  overflow: hidden;
`;
const StyledTitle = styled.h2`
  margin-bottom: 20px;
`;
const StyledFormControl = styled.div`
  margin: 20px 0;
`;
const StyledWarningRequired = styled.p`
  color: red;
  font-size: 12px;
`;

const Form = ({ title }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialStudent = {
    firstName: "",
    lastName: "",
    age: "",
    nationality: "",
  };

  const [newStudent, setNewStudent] = useState(initialStudent);
  const [error, setError] = useState({});
  const handleInputChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value,
    });
  };

  const checkValidation = () => {
    var numberRegex = /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/;

    let status = false;
    let error = {};
    if (newStudent.firstName === "") {
      status = true;
      error = {
        ...error,
        firstName: true,
      };
    } else if (newStudent.lastName === "") {
      status = true;
      error = {
        ...error,
        lastName: true,
      };
    } else if (!numberRegex.test(newStudent.age)) {
      status = true;
      error = {
        ...error,
        age: true,
      };
    } else if (newStudent.nationality === "") {
      status = true;
      error = {
        ...error,
        nationality: true,
      };
    }
    setError(error);
    return status;
  };
  const handleSubmit = () => {
    if (!checkValidation()) {
      dispatch(addNewStudent(newStudent));
      history.push(paths.home);
    } else {
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTitle>{title}</StyledTitle>
      <StyledFormControl>
        {error.firstName && (
          <StyledWarningRequired>Enter First Name</StyledWarningRequired>
        )}
        <Input
          type="text"
          name="firstName"
          onChange={handleInputChange}
          value={newStudent.firstName}
          title="First Name"
        />
        {error.lastName && (
          <StyledWarningRequired>Enter Last Name</StyledWarningRequired>
        )}
        <Input
          type="text"
          name="lastName"
          onChange={handleInputChange}
          value={newStudent.lastName}
          title="Last Name"
        />
        {error.age && <StyledWarningRequired>Enter Age</StyledWarningRequired>}
        <Input
          type="text"
          name="age"
          onChange={handleInputChange}
          value={newStudent.age}
          title="Age"
        />
        {error.nationality && (
          <StyledWarningRequired>Enter Nationality</StyledWarningRequired>
        )}
        <Input
          type="text"
          name="nationality"
          onChange={handleInputChange}
          value={newStudent.nationality}
          title="Nationality"
        />
      </StyledFormControl>
      <Button type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </StyledForm>
  );
};

export default Form;
