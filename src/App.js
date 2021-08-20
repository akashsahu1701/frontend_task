import React, { useState } from "react";
import "./css/index.css";
import collegeList from "./assets/colleges.json";
import img1 from "./assets/img/college_01.jpg";
import img2 from "./assets/img/college_02.jpg";

const App = () => {
  const [array, setArray] = useState(collegeList.colleges);
  return (
    <div
      style={{ height: "100vh", overflow: "scroll" }}
      onScroll={(e) => {
        const bottom =
          e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
          setArray([...array, collegeList.colleges]);
          console.log(array);
        }
      }}
    >
      <div className="heading"> Colleges in North India</div>
      <div className="container">
        {array.map((college, index) => (
          <div className="collegeCard" key={index}>
            {/* {array.length}
            {console.log(array)} */}
            <img
              src={index % 2 !== 0 ? img1 : img2}
              className="clg-img"
              alt="college"
            />
            <div className="details-tags">
              <div>
                {college.tags.map((item, index) => (
                  <span className="tags-2" key={index}>
                    {item}
                  </span>
                ))}{" "}
              </div>
              <div className="tags-1"># {college.ranking} </div>
            </div>
            <div className="details">
              <div style={{ marginLeft: "1vw", width: "70%" }}>
                <div className="font-1"> {college.college_name} </div>
                <div>
                  {college.nearest_place.map((place, index) => (
                    <span className="font-2" key={index}>
                      {place}|
                    </span>
                  ))}{" "}
                </div>
                <div className="font-2">
                  <span style={{ color: "skyblue", fontWeight: "700" }}>
                    93% match :{" "}
                  </span>
                  {college.famous_nearest_places}{" "}
                </div>
                <div className="font-2 fw bg"> {college.offertext} </div>
              </div>
              <div
                style={{
                  marginRight: "1vw",
                  textAlign: "right",
                  width: "30%",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "0.6rem",
                      textDecoration: "line-through",
                    }}
                  >
                    ₹. {college.original_fees}
                  </span>
                  <span className="font-2">20% OFF</span>
                </div>
                <div
                  style={{
                    color: "red",
                    fontSize: "1.3rem",
                    fontWeight: "1000",
                  }}
                >
                  ₹. {college.discounted_fees}
                </div>
                <div style={{ fontSize: "0.5rem" }}> {college.fees_cycle} </div>
                <div className="tags-3">
                  <div> {college.rating}/5.0 </div>
                  <div> {college.rating_remarks}</div>
                </div>

                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "skyblue",
                  }}
                >
                  {college.amenties.map((item, index) => (
                    <span style={{ marginRight: "0.4rem" }} key={index}>
                      {" "}
                      {item}
                    </span>
                  ))}{" "}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
