import { createContext, useContext, useReducer } from "react";

const SubCategoryContext = createContext();

const initialValue = {
  data: [],
  loader: false,
  error: false,
};

const SubCategoryReducer = (state, action) => {
  switch (action.type) {
    case "SUBCATEGORY_SUCCESS":
      return {
        data: action.payload,
        loader: false,
        error: false,
      };

    case "SUBCATEGORY_ERR": {
      return { ...state, error: true, loader: false };
    }
    case "SUBCATEGORY_LOADER": {
      return { ...state, loader: true };
    }
    default:
      return state;
  }
};

export const SubCategoryProvider = ({ children }) => {
  const [SubCategory, dispatchSubCategory] = useReducer(
    SubCategoryReducer,
    initialValue
  );
  return (
    <SubCategoryContext.Provider value={{ SubCategory, dispatchSubCategory }}>
      {children}
    </SubCategoryContext.Provider>
  );
};

export const useSubCategory = () => useContext(SubCategoryContext);
