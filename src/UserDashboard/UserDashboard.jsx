import React from "react";
import Employee from "../assets/images/emp.gif";

const UserDashboard = () => {
  return (
    <>
      <div className="container">
        <h2 className="title">
          <span className="title-word title-word-1">Welcome</span>

          <span className="title-word title-word-2 p-3">to</span>
          <br />
          <span className="title-word title-word-3 m-2">Employee</span>

          <span className="title-word title-word-4 m-2">Management</span>

          <span className="title-word title-word-5 m-2">System</span>
        </h2>
      </div>
      <div className="Employee-img2 mt-0">
        <img src={Employee} alt={Employee} />
      </div>
    </>
  );
};

export default UserDashboard;
