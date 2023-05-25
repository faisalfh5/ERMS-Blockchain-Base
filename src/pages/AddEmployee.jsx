import { React, useState } from "react";
import "../style/addEmployee.css";
import { addEmployee } from "../Web3/contractFunction";

const AddEmployee = () => {
  const [employeedata, setEmployeeData] = useState({
    wallet: "",
    fname: "",
    lname: "",
    dob: "",
    contact: "",
    age: "",
    address: "",
  });

  const handlechange = (e) => {
    setEmployeeData({ ...employeedata, [e.target.name]: e.target.value });
    console.log("here", employeedata.wallet);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("got here or not ?");
    await addEmployee(
      employeedata?.wallet.toString(),
      employeedata?.fname,
      employeedata?.lname,
      employeedata?.dob,
      employeedata?.contact,
      employeedata?.age,
      employeedata?.address
    );
  };
  return (
    <>
      <div class="login-box">
        <h2>Add Employee</h2>
        <form>
          {/* <div className="user-box">
            <input type="text" name="" required="" />
            <label>Employee ID</label>
          </div> */}
          <div className="user-box">
            <input
              type="text"
              name="wallet"
              value={employeedata?.wallet}
              required=""
              onChange={handlechange}
            />
            <label>Wallet Address</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="fname"
              value={employeedata?.fname}
              required=""
              onChange={handlechange}
            />
            <label>First Name</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="lname"
              value={employeedata?.lname}
              required=""
              onChange={handlechange}
            />
            <label>Last Name</label>
          </div>
          <div className="user-box">
            <input
              type="date"
              name="dob"
              value={employeedata?.dob}
              required=""
              onChange={handlechange}
            />
            <label>Date of Birth</label>
          </div>
          <div className="user-box">
            <input
              type="tel"
              name="contact"
              value={employeedata?.contact}
              required=""
              onChange={handlechange}
            />
            <label>Contact No</label>
          </div>
          <div className="user-box">
            <input
              type="number"
              name="age"
              value={employeedata?.age}
              required=""
              onChange={handlechange}
            />
            <label>Age</label>
          </div>
          <div className="user-box">
            <input
              type="address"
              name="address"
              value={employeedata?.address}
              required=""
              onChange={handlechange}
            />
            <label>Address</label>
          </div>
          <button onClick={handlesubmit}>
            <a href="#">
              <span></span>
              Add Employee
            </a>
          </button>
        </form>
      </div>
    </>
  );
};

export default AddEmployee;
