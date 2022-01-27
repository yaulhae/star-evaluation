import React, { ReactDom, useState } from "react";
import { Route, Routes } from "react-router-dom";
import StarRatingPage2 from "./pages/StarRatingPage2";
import StarWeekPage2 from "./pages/StarWeekPage2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StarWeekPage2 />} />
        <Route path="/review/:day" element={<StarRatingPage2 />} />
      </Routes>
    </>
  );
}

export default App;
