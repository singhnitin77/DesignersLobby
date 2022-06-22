import { createContext, useContext, useReducer } from "react";

const ResourceContext = createContext();

const initialValue = {
  data: [],
  loader: false,
  error: false,
};

const resourceReducer = (state, action) => {
  switch (action.type) {
    case "RESOURCE_SUCCESS":
      return {
        data: action.payload,
        loader: false,
        error: false,
      };

    case "RESOURCE_ERR": {
      return { ...state, error: true, loader: false };
    }
    case "RESOURCE_LOADER": {
      return { ...state, loader: true };
    }
    default:
      return state;
  }
};

export const ResourceProvider = ({ children }) => {
  const [resource, dispatchResource] = useReducer(
    resourceReducer,
    initialValue
  );
  return (
    <ResourceContext.Provider value={{ resource, dispatchResource }}>
      {children}
    </ResourceContext.Provider>
  );
};

export const useResource = () => useContext(ResourceContext);
