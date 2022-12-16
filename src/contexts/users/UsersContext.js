import { createContext, useReducer, useContext } from "react";

import { InitialState, reducer } from "./reducer";

const UsersStateContext = createContext();
const UsersDispatcherContext = createContext();

export const useUsersState = () => {
  const context = useContext(UsersStateContext);

  if (!context) {
    throw Error("useUsersState Must be Used With a UsersProvider.");
  }

  return context;
};

export const useUsersDispatch = () => {
  const context = useContext(UsersDispatcherContext);

  if (!context) {
    throw Error("useUsersDispatch Must be Used With a UsersProvider.");
  }

  return context;
};

export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatcherContext.Provider value={dispatch}>
        {children}
      </UsersDispatcherContext.Provider>
    </UsersStateContext.Provider>
  );
};
