import React, { useState, useEffect } from "react";

import { ViewGetReward } from "../Web3/contractFunction";

import "../style/viewReward.css";
import { ViewAllReward } from "../Web3/contractFunction";

const ViewReward = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [employee, setEmployee] = useState("");
  const [singleemployee, setSingleEmployee] = useState("");
  const [datashow, setDataShow] = useState(false);

  console.log("employeeData", employeeData);
  console.log("singleemployee", singleemployee);

  const handleReward = async () => {
    await ViewGetReward(employee, setSingleEmployee);
    setDataShow(true);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log("here 123?");
    const fetch = async () => {
      const tx = await ViewAllReward();
      console.log("Api data => ", tx);
      const newData = tx?.rewardid?.map((_, index) => ({
        criteria: tx.criteria[index],
        difficulty: tx.difficulty[index],
        point: tx.point[index],
        rewardid: tx.rewardid[index],
        title: tx.title[index],
      }));
      console.log("set new data => ", newData);

      setEmployeeData(newData);
      console.log("Api data => ", employeeData);
    };

    fetch();
  }, []);

  return (
    <>
      <div className="Card">
        <div className="CardInner">
          <div className="container">
            <div className="InputContainer">
              <input
                placeholder="Search Employee Reward"
                value={employee}
                className="InputContainer"
                onChange={(e) => {
                  setEmployee(e.target.value);
                }}
              />
            </div>
            <button className="Icon" onClick={handleReward}>
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
      <div className="overflowtab">
        <table>
          <thead>
            <tr>
              <th>Reward ID</th>
              <th>Reward Title</th>
              <th>Reward Points</th>
              <th>Reward Difficulty</th>
              <th>Reward Criteria</th>
            </tr>
          </thead>
          {datashow === true && employee.length !== 0 ? (
            <tbody>
              <tr>
                <td>{singleemployee?.rewardid}</td>
                <td>{singleemployee?.title}</td>
                <td>{singleemployee?.point}</td>
                <td>{singleemployee?.difficulty}</td>
                <td>{singleemployee?.criteria}</td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {employeeData?.map((_, index) => (
                <tr key={index}>
                  <td>{employeeData?.[index]?.rewardid}</td>
                  <td>{employeeData?.[index]?.title}</td>
                  <td>{employeeData?.[index]?.point}</td>
                  <td>{employeeData?.[index]?.difficulty}</td>
                  <td>{employeeData?.[index]?.criteria}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default ViewReward;
