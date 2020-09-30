import React from "react";

import styled from "styled-components";
import Form from "../components/molecules/Form";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const NewView = () => {
  return (
    <StyledWrapper>
      <Form title="Add student" />
    </StyledWrapper>
  );
};

export default NewView;
