export const SET_BASIC_DETAILS = "SET_BASIC_DETAILS";
export const SET_DOCUMENT_COLLECTION = "SET_DOCUMENT_COLLECTION";
export const SET_STATEMENT_OF_PURPOSE = "SET_STATEMENT_OF_PURPOSE";
export const SET_INTERVIEW_AVAILABILITY = "SET_INTERVIEW_AVAILABILITY";

export const setBasicDetails = (data) => ({
  type: SET_BASIC_DETAILS,
  payload: data,
});

export const setDocumentCollection = (data) => ({
  type: SET_DOCUMENT_COLLECTION,
  payload: data,
});

export const setStatementOfPurpose = (data) => ({
  type: SET_STATEMENT_OF_PURPOSE,
  payload: data,
});

export const setInterviewAvailability = (data) => ({
  type: SET_INTERVIEW_AVAILABILITY,
  payload: data,
});
