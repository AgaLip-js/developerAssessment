import axios from "axios";
import {
  GET_NATIONALITIES,
  GET_STUDENTS_BY_NATIONALITY,
  INIT_STUDENTS,
  ADD_NEW_STUDENT,
  HANDLE_NATIONALITY_SELECT,
} from "../../_constants/reduxPaths";

export const initStudents = (studentsInit) => async (dispatch) => {
  const path = `/students/init`;
  try {
    const { data } = await axios.post(path, studentsInit);
    const nationalities = data.map((d) => d.nationality);
    dispatch({
      type: INIT_STUDENTS,
      payload: {
        students: data,
        nationalities,
      },
    });
  } catch (e) {
    console.error(e.message);
  }
};

function getUnique(arr, comp) {
  const unique = arr
    .map((e) => e[comp])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter((e) => arr[e])
    .map((e) => arr[e]);

  return unique;
}

export const getStudentsNationalities = () => async (dispatch) => {
  const path = `/students/nationalities`;
  try {
    const { data } = await axios.get(path);
    const nationalities = getUnique(data, "nationality");
    dispatch({
      type: GET_NATIONALITIES,
      payload: {
        nationalities,
      },
    });
  } catch (e) {
    console.error(e.message);
  }
};

export const getStudentsByNationality = (nationality) => async (dispatch) => {
  const path = `/students/${nationality}`;
  try {
    const { data } = await axios.post(path);
    dispatch({
      type: GET_STUDENTS_BY_NATIONALITY,
      payload: {
        students: data,
      },
    });
  } catch (e) {
    console.error(e.message);
  }
};

export const addNewStudent = (student) => async (dispatch) => {
  const path = "/students/student";
  try {
    const { data } = await axios.post(path, student);
    const nationality = {
      _id: data._id,
      nationality: data.nationality,
    };
    dispatch({
      type: ADD_NEW_STUDENT,
      payload: {
        student: data,
        nationality,
      },
    });
  } catch (e) {
    console.error(e.message);
  }
};
export const handleSelectNationality = (nationality) => async (dispatch) => {
  dispatch({
    type: HANDLE_NATIONALITY_SELECT,
    payload: {
      nationality,
    },
  });
};
