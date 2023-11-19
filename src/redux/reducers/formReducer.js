import {
    SET_BASIC_DETAILS,
    SET_DOCUMENT_COLLECTION,
    SET_STATEMENT_OF_PURPOSE,
    SET_INTERVIEW_AVAILABILITY,
  } from '../actions/formActions';
  
  const initialState = {
    basicDetails: {},
    documentCollection: {},
    statementOfPurpose: {},
    interviewAvailability: {},
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_BASIC_DETAILS:
        return { ...state, basicDetails: action.payload };
      case SET_DOCUMENT_COLLECTION:
        return { ...state, documentCollection: action.payload };
      case SET_STATEMENT_OF_PURPOSE:
        return { ...state, statementOfPurpose: action.payload };
      case SET_INTERVIEW_AVAILABILITY:
        return { ...state, interviewAvailability: action.payload };
      default:
        return state;
    }
  };
  
  export default formReducer;