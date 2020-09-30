import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import StudentsTable from "../components/molecules/StudentsTable";
import { paths } from "../_constants/paths";

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  flex-direction: column;
`;
const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  color: #1383c5;
  font-size: 18px;
  font-size: 600;
  :hover {
    color: black;
  }
`;
const StyledDropdownList = styled.select`
  margin: 0 auto;
  padding: 10px;
  list-style: none;
  background: #1383c5;
  color: white;
  cursor: pointer;
  height: fit-content;
`;
const StyledOption = styled.option`
  background: white;
  color: #1383c5;
  padding: 10px;
  margin: 0 auto;
  cursor: pointer;
  text-align: center;
`;
const StyledTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;
const StyledPath = styled.div``;

const HomeView = () => {
  return (
    <StyledWrapper>
      <StyledPath>
        <StyledLink to={paths.new}> Add New Student</StyledLink>
      </StyledPath>
      <StyledTableContainer>
        <StyledDropdownList>
          <StyledOption>a</StyledOption>
          <StyledOption>b</StyledOption>
          <StyledOption>c</StyledOption>
        </StyledDropdownList>
        <StudentsTable />
      </StyledTableContainer>
    </StyledWrapper>
  );
};

export default HomeView;
