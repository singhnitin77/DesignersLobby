import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import {
  Hero,
  Navbar,
  NavHeader,
  Sidebar,
  ErrorPage,
  ScrollToTop,
} from "./components";
import {
  Footer,
  How_works,
  Contributors,
  NewResource,
  Categories,
} from "./containers";
import Newsletter from "./containers/Newsletter";
import { useGlobalContext } from "../src/constants/Context";
import { SubCategoryProvider } from "./context/SubCategory";
import { ResourceProvider } from "./context/Resource";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-233082829-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const App = () => {
  const { darkMode } = useGlobalContext();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <SubCategoryProvider>
      <ResourceProvider>
        <div className={`${darkMode && "dark"}`}>
          <Router>
            <ScrollToTop />
            <Navbar />

            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="contributors" element={<Contributors />} />
              <Route path="how-it-works" element={<How_works />} />

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
