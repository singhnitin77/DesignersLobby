import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero, Navbar, NavHeader, Sidebar, ErrorPage } from "./components";
import {
  Features,
  Footer,
  How_works,
  Contributors,
  NewResource,
  // Category,
  Categories,
  MainCategories,
} from "./containers";
import Newsletter from "./containers/Newsletter";
import { useGlobalContext } from "../src/constants/Context";
import { SubCategoryProvider } from "./context/SubCategory";
import { ResourceProvider } from "./context/Resource";

const App = () => {
  const { darkMode } = useGlobalContext();

  return (
    <SubCategoryProvider>
      <ResourceProvider>
        <div className={`${darkMode && "dark"}`}>
          <Router>
            <Navbar />

            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="contributors" element={<Contributors />} />

              <Route path="category/:categories" element={<Categories />} />
              {/* <Route path=":categories" element={<Categories />} /> */}

              <Route path="newresource" element={<NewResource />} />
              <Route path="newsletter" element={<Newsletter />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Sidebar />
            <Footer />
          </Router>
        </div>
      </ResourceProvider>
    </SubCategoryProvider>
  );
};

export default App;
