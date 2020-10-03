import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getStudentsByNationality } from "../../redux/actions/studentActions";
import Button from "../atoms/Button";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 20px;
  row-gap: 10px;
  background: #1383c5;
  margin: 20px;
  padding: 20px;
  width: 350px;
`;
const StyledRow = styled.p`
  color: white;
`;
const StyledBox = styled.div``;

const StudentsTable = () => {
  const { selectedNationality, students } = useSelector(({ student }) => ({
    students: student.students,
    selectedNationality: student.selectedNationality,
  }));
  const sortOptions = ["none", "ASCENDING", "DESCENDING"];

  function compare(a, b) {
    if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
      return -1;
    }
    if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  const getSortedStudents = (array, option) => {
    switch (option) {
      case sortOptions[0]:
        return array;
      case sortOptions[1]:
        console.log(array.sort(compare));
        return array.sort(compare);
      case sortOptions[2]:
        return array.reverse(compare);
      default:
        return array;
    }
  };

  const [sortOption, setSortOption] = useState(sortOptions[0]);
  const [sortedStudents, setSortedStudents] = useState(students);
  const dispatch = useDispatch();

  const sortOptionByValue = (sortOption) => {
    if (sortOption === sortOptions[0]) return sortOptions[1];
    else if (sortOption === sortOptions[1]) return sortOptions[2];
    else if (sortOption === sortOptions[2]) return sortOptions[1];
  };

  useEffect(() => {
    if (selectedNationality) {
      dispatch(getStudentsByNationality(selectedNationality));
      setSortOption(sortOptions[0]);
    }
  }, [dispatch, selectedNationality]);

  useEffect(() => {
    if (students.length) {
      setSortedStudents([...getSortedStudents(students, sortOption)]);
    }
  }, [students, sortOption]);

  return (
    <StyledBox>
      <StyledWrapper>
        {sortedStudents &&
          sortedStudents.map(({ _id, firstName, lastName, age }) => (
            <React.Fragment key={_id}>
              <StyledRow>{firstName}</StyledRow>
              <StyledRow>{lastName}</StyledRow>
              <StyledRow>{age}</StyledRow>
            </React.Fragment>
          ))}
      </StyledWrapper>
      <Button
        onClick={() => {
          setSortOption(sortOptionByValue(sortOption));
        }}
      >
        Sort
      </Button>
    </StyledBox>
  );
};

export default StudentsTable;
