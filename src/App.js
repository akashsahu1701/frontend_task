import React from "react";
import "./css/index.css";
import collegeList from "./assets/colleges.json";
import img1 from "./assets/img/college_01.jpg";
import img2 from "./assets/img/college_02.jpg";

const App = () => {
  console.log(collegeList);
  return (
    <div className="container">
      <div className="collegeCard">
        <img src={img1} className="" alt="college" />
      </div>
      <div className="collegeCard">
        <img src={img2} className="" alt="college" />
      </div>
    </div>
  );
};

export default App;
