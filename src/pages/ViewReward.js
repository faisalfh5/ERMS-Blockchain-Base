import React from "react";
import "../style/viewReward.css";
const ViewReward = () => {
  return (
    <>
      <div className="Card">
        <div className="CardInner">
          <div className="container">
            <div className="InputContainer">
              <input placeholder="Search Employee Reward" />
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
      <div className="overflowtab">
        <table>
          <tr>
            <th>Reward Preference</th>
            <th>Reward Criteria</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
          </tr>
          <tr>
            <td>Adam</td>
            <td>Johnson</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default ViewReward;
