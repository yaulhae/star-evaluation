import React, { ReactDom, useState } from "react";
import { Route, Routes } from "react-router-dom";
import StarEvaluationPage from "./pages/StarEvaluationPage";
import StarWeekPage from "./pages/StarWeekPage";

function App() {
  const [starList, setStarList] = useState([
    { day: "월", yellowCircle: 0, grayCircle: 0 },
    { day: "화", yellowCircle: 0, grayCircle: 0 },
    { day: "수", yellowCircle: 0, grayCircle: 0 },
    { day: "목", yellowCircle: 0, grayCircle: 0 },
    { day: "금", yellowCircle: 0, grayCircle: 0 },
    { day: "토", yellowCircle: 0, grayCircle: 0 },
    { day: "일", yellowCircle: 0, grayCircle: 0 },
  ]);

  const randomStarList = starList.map((item) => {
    let yellowCircle = Math.ceil(Math.random() * 5);
    let grayCircle = 5 - yellowCircle;
    return {
      ...item,
      yellowCircle: yellowCircle,
      grayCircle: grayCircle,
    };
  });

  const [evaluation, setEvaluation] = useState([
    "gray",
    "gray",
    "gray",
    "gray",
    "gray",
  ]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<StarWeekPage randomStarList={randomStarList} />}
        />
        <Route path="/review/:day" element={<StarEvaluationPage />} />
      </Routes>
    </>
  );
}

export default App;
