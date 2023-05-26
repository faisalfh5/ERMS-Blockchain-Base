import React, { useState, useEffect } from "react";

import "../style/viewEmployee.css";
import { ViewAllEmployee } from "../Web3/contractFunction";

const viewEmployee = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [employeeData, setEmployeeData] = useState([""]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log("here?");
    const fetch = async () => {
      await ViewAllEmployee(setEmployeeData);
    };
    fetch();
  }, []);

  return (
    <>
      <div className="Card">
        <div className="CardInner">
          <div className="container">
            <div className="InputContainer">
              <input placeholder="Search Employee..." />
            </div>
            <button className="Icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#657789"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-search"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <form action="">
        <div className="overflow">
          <table>
            <tr>
              <th>Wallet Address</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Contact No</th>
              <th>Age</th>
              <th>Address</th>
              <th>Employee Position</th>
            </tr>
            {employeeData?.map((item) => {
              return (
                <tr>
                  <td>{item?.wallet}</td>
                  <td>{item?.fname}</td>
                  <td>{item?.lname}</td>
                  <td>{item?.dob}</td>
                  <td>{item?.contact}</td>
                  <td>{item?.age}</td>
                  <td>{item?.empAddress}</td>
                  <td>{item?.empposition}</td>
                </tr>
              );
            })}

            {/* {employeeData?.map((item) => {
              return (
                <tr>
                  {console.log("item", item)}
                  <td>{item[0]}</td>
                  <td>{item[index]}</td>
                  <td>{item?.lname}</td>
                  <td>{item?.dob}</td>
                  <td>{item?.contact}</td>
                  <td>{item?.age}</td>
                  <td>{item?.empAddress}</td> 
                </tr>
              );
            })} */}
          </table>
        </div>
      </form>
    </>
  );
};

export default viewEmployee;
