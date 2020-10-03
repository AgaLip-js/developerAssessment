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

const NewTable = () => {
  function sorted(arrayToBeSorted) {
    const length = arrayToBeSorted.length;

    for (let i = 0; i < length; i = i + 1) {
      let minimum = i;
      for (let j = i + 1; j < length; j = j + 1) {
        if (
          arrayToBeSorted[minimum].firstName.toLowerCase() <
          arrayToBeSorted[j].firstName.toLowerCase()
        ) {
          minimum = j;
        }
      }
      if (minimum !== i) {
        const tempValue = arrayToBeSorted[i];
        arrayToBeSorted[i] = arrayToBeSorted[minimum];
        arrayToBeSorted[minimum] = tempValue;
      }
    }
    return arrayToBeSorted;
  }

  const { selectedNationality, students } = useSelector(({ student }) => ({
    students: student.students,
    selectedNationality: student.selectedNationality,
  }));
  const [studentsList, setStudentsList] = useState(students);
  const dispatch = useDispatch();
  const [toggle, settoggle] = useState(false);
  useEffect(() => {
    if (selectedNationality) {
      dispatch(getStudentsByNationality(selectedNationality));
    }
  }, [dispatch, selectedNationality]);

  return (
    <StyledBox>
      <StyledWrapper>
        {students &&
          students.map(({ _id, firstName, lastName, age }) => (
            <React.Fragment key={_id}>
              <StyledRow>{firstName}</StyledRow>
              <StyledRow>{lastName}</StyledRow>
              <StyledRow>{age}</StyledRow>
            </React.Fragment>
          ))}
      </StyledWrapper>
      <Button
        onClick={() => {
          toggle
            ? setStudentsList(sorted(students))
            : setStudentsList(sorted(students).reverse());
          settoggle(!toggle);
        }}
      >
        Sort
      </Button>
    </StyledBox>
  );
};

export default NewTable;
