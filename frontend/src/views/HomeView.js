import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/atoms/Button";
import StudentsTable from "../components/molecules/StudentsTable";
import NewTable from "../components/molecules/NewTable";
import {
  getStudentsNationalities,
  handleSelectNationality,
  initStudents,
} from "../redux/actions/studentActions";
import { studentsInit } from "../_constants/model";
import { paths } from "../_constants/paths";

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
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
const StyledPath = styled.div`
  margin-top: 20px;
`;

const HomeView = () => {
  const { nationalities, selectedNationality } = useSelector(({ student }) => ({
    nationalities: student.nationalities,
    selectedNationality: student.selectedNationality,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudentsNationalities());
  }, [dispatch]);

  const handleInitStudents = () => {
    if (!nationalities.length) {
      dispatch(initStudents(studentsInit));
    } else {
      alert("You have already init dataset");
    }
  };

  return (
    <StyledWrapper>
      <Button onClick={handleInitStudents}>Init Students</Button>
      <StyledPath>
        <StyledLink to={paths.new}> Add New Student</StyledLink>
      </StyledPath>
      <StyledTableContainer>
        {selectedNationality && (
          <StyledDropdownList
            name="Nationalities"
            value={selectedNationality}
            onChange={(e) => dispatch(handleSelectNationality(e.target.value))}
          >
            {nationalities.map((n) => (
              <StyledOption key={n._id} value={n.nationality}>
                {n.nationality}
              </StyledOption>
            ))}
          </StyledDropdownList>
        )}

        {/* <StudentsTable /> */}
        <NewTable />
      </StyledTableContainer>
    </StyledWrapper>
  );
};

export default HomeView;
