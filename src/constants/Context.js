import React, { useState, useContext, useEffect } from "react";

import { Sidebar } from "../components/Sidebar";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // Views
  const [darkMode, setDarkMode] = useState(false);
  const [listView, setListView] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    window.localStorage.setItem("darkMode", !darkMode);
  };

  //   Material UI Drawer
  const [showDrawer, setShowDrawer] = useState(false);

  // Toggle Drawer
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  //   Useeffect for dark mode and list view local storage
  useEffect(() => {
    if (window.localStorage.getItem("darkMode")) {
      setDarkMode(JSON.parse(localStorage.getItem("darkMode")));
    } else {
      setDarkMode(false);
      window.localStorage.setItem("darkMode", false);
    }
    if (window.localStorage.getItem("listView")) {
      setListView(JSON.parse(localStorage.getItem("listView")));
    } else {
      setListView(false);
      window.localStorage.setItem("listView", false);
    }
  });

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        listView,
        setListView,
        showDrawer,
        toggleDrawer,
        toggleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
