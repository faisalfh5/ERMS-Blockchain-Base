/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";

import "../style/viewEmployee.css";
import { ViewAllEmployee } from "../Web3/contractFunction";
import { ViewEmployee } from "../Web3/contractFunction";

const viewEmployee = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [employeeData, setEmployeeData] = useState([]);
  const [employee, setEmployee] = useState("");
  const [singleemployee, setSingleEmployee] = useState("");
  const [datashow, setDataShow] = useState(false);

  console.log("employeeData", employee);
  console.log("singleemployee", singleemployee);

  const handleEmployee = async () => {
    await ViewEmployee(employee, setSingleEmployee);
    setDataShow(true);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log("here 123?");
    const fetch = async () => {
      const tx = await ViewAllEmployee();
      console.log("tx", tx);
      const newData = tx?.wallet?.map((_, index) => ({
        fname: tx.fname[index],
        lname: tx.lname[index],
        dob: tx.dob[index],
        contact: tx.contact[index],
        age: tx.age[index],
        empAddress: tx.empAddress[index],
        position: tx.position[index],
        wallet: tx.wallet[index],
      }));
      setEmployeeData(newData);

      console.log("Api data => ", tx.wallet);
    };
    fetch();
  }, []);

  console.log("Data ", employeeData);

  return (
    <>
      <div className="Card">
        <div className="CardInner">
          <div className="container">
            <div
              name="wallet"
              value={employee}
              className="InputContainer"
              onChange={(e) => {
                setEmployee(e.target.value);
              }}
            >
              <input placeholder="Search Employee..." />
            </div>
            <button className="Icon" onClick={handleEmployee}>
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
            <thead>
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
            </thead>
            {datashow === true && employee.length !== 0 ? (
              <tbody>
                <tr>
                  <td>{singleemployee?.wallet}</td>
                  <td>{singleemployee?.fname}</td>
                  <td>{singleemployee?.lname}</td>
                  <td>{singleemployee?.dob}</td>
                  <td>{singleemployee?.contact}</td>
                  <td>{singleemployee?.age}</td>
                  <td>{singleemployee?.Address}</td>
                  <td>{singleemployee?.position}</td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {employeeData?.map((_, index) => (
                  <tr key={index}>
                    {/* {console.log("items console", employeeData?.wallet)}; */}
                    <td>{employeeData?.[index]?.wallet}</td>
                    <td>{employeeData?.[index]?.fname}</td>
                    <td>{employeeData?.[index]?.lname}</td>
                    <td>{employeeData?.[index]?.dob}</td>
                    <td>{employeeData?.[index]?.contact}</td>
                    <td>{employeeData?.[index]?.age}</td>
                    <td>{employeeData?.[index]?.empAddress}</td>
                    <td>{employeeData?.[index]?.position}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </form>
    </>
  );
};

export default viewEmployee;
