import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { paths } from "../../_constants/paths";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const StyledForm = styled.form`
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

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", age: "", nationality: "" }}
      validate={(values) => {
        const errors = {};
        if (
          !values.firstName &&
          !values.lastName &&
          !values.age &&
          !values.nationality
        ) {
          errors.firstName = "Required";
          errors.lastName = "Required";
          errors.age = "Required";
          errors.nationality = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        const student = {
          firstName: values.firstName,
          lastName: values.lastName,
          age: values.age,
          nationality: values.nationality,
        };

        setSubmitting(false);
        history.push(paths.home);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <StyledForm onSubmit={handleSubmit}>
          <StyledTitle>{title}</StyledTitle>
          <StyledFormControl>
            <StyledWarningRequired>
              {errors.firstName && touched.firstName && errors.firstName}
            </StyledWarningRequired>
            <Input
              type="text"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              title="First Name"
            />
            <StyledWarningRequired>
              {errors.lastName && touched.lastName && errors.lastName}
            </StyledWarningRequired>
            <Input
              type="text"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              title="Last Name"
            />
            <StyledWarningRequired>
              {errors.age && touched.age && errors.age}
            </StyledWarningRequired>
            <Input
              type="text"
              name="age"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.age}
              title="Age"
            />
            <StyledWarningRequired>
              {errors.nationality && touched.nationality && errors.nationality}
            </StyledWarningRequired>
            <Input
              type="text"
              name="nationality"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nationality}
              title="Nationality"
            />
          </StyledFormControl>
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default Form;
