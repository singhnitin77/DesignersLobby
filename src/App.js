import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero, Navbar, NavHeader, Sidebar, ErrorPage } from "./components";
import {
  Features,
  Footer,
  How_works,
  Contributors,
  NewResource,
  Category,
  Categories,
  MainCategories,
} from "./containers";
import { Illustration, Icon } from "./Resources";
import Newsletter from "./containers/Newsletter";
import { useGlobalContext } from "../src/constants/Context";

const App = () => {
  const { darkMode } = useGlobalContext();

  return (
    <div className={`${darkMode && "dark"}`}>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="contributors" element={<Contributors />} />

          <Route path="category" element={<Category />}>
            <Route path=":categories" element={<Categories />} />
          </Route>

          <Route path="newresource" element={<NewResource />} />
          <Route path="newsletter" element={<Newsletter />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
