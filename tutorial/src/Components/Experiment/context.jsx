import { createContext, useReducer } from "react";
const initialvalue = {
  data: [],
  term: "",
  filter: "all",
};
export const Context = createContext();
const reducer = (state = initialvalue, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATA":
      return { ...state, data: payload };
    case "ON_DELETE": {
      const deleteArr = state.data.filter((c) => c.id !== payload);
      return { ...state, data: deleteArr };
    }

    default:
      return { state };
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialvalue);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export default Provider;
