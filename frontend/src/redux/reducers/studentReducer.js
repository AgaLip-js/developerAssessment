import {
  ADD_NEW_STUDENT,
  GET_NATIONALITIES,
  GET_STUDENTS_BY_NATIONALITY,
  HANDLE_NATIONALITY_SELECT,
  INIT_STUDENTS,
} from "../../_constants/reduxPaths";

const initialState = {
  students: [],
  nationalities: [],
  selectedNationality: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_STUDENTS: {
      return {
        ...state,
        students: action.payload.students,
        nationalities: action.payload.nationalities,
      };
    }
    case GET_NATIONALITIES: {
      return {
        ...state,
        nationalities: action.payload.nationalities,
        selectedNationality: state.selectedNationality
          ? state.selectedNationality
          : action.payload.nationalities[0].nationality,
      };
    }
    case GET_STUDENTS_BY_NATIONALITY: {
      return {
        ...state,
        students: action.payload.students,
      };
    }
    case ADD_NEW_STUDENT: {
      return {
        ...state,
        selectedNationality: action.payload.student.nationality,
        nationalities: [...state.nationalities, action.payload.nationality],
      };
    }
    case HANDLE_NATIONALITY_SELECT: {
      return {
        ...state,
        selectedNationality: action.payload.nationality,
      };
    }
    default:
      return state;
  }
};
export default studentReducer;
