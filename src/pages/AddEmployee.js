import React from "react";
import "../style/addEmployee.css";
const AddEmployee = () => {
  return (
    <>
      <div class="login-box">
        <h2>Add Employee</h2>
        <form>
          <div className="user-box">
            <input type="email" name="" required="" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>First Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Last Name</label>
          </div>
          <div className="user-box">
            <input type="date" name="" required="" />
            <label>Date of Birth</label>
          </div>
          <div className="user-box">
            <input type="tel" name="" required="" />
            <label>Contact No</label>
          </div>
          <div className="user-box">
            <input type="number" name="" required="" />
            <label>Age</label>
          </div>
          <div className="user-box">
            <input type="address" name="" required="" />
            <label>Address</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </>
  );
};

export default AddEmployee;
