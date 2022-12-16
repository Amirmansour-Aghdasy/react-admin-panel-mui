export const InitialState = {
  page: 1,
  users: [],
  loading: true,
};

export const ActionTypes = {
  EDIT_USER: "EDIT_USER",
  LOAD_USERS: "LOAD_USERS",
  DELETE_USER: "DELETE_USER",
  INCREMENT_PAGE: "INCREMENT_PAGE",
  DECREMENT_PAGE: "DECREMENT_PAGE",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};