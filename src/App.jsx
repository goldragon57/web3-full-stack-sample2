import React, { Suspense } from "react";
import AOS from "aos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

///////////////////////////////////////
const Home = React.lazy(() => import("./Pages/Home"));
const App = () => {
  //animation aos init
  AOS.init();
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
