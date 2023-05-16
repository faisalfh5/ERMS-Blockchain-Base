import React, { useState, useEffect } from "react";
import Employee from "../assets/images/emp.gif";
import "../style/dashboard.css";

const Dashboard = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const divElement = document.getElementById("myDiv");
      divElement.style.display = "block";
      setShowImage(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div id="myDiv" className="dark fire" style={{ display: "none" }}>
        <h1 className="Blazing">
          Welcome to <br /> Employee Management Reward System
        </h1>
      </div>
      {showImage && (
        <div className="Employee-img">
          <img src={Employee} alt={Employee} />
        </div>
      )}
    </>
  );
};

export default Dashboard;
