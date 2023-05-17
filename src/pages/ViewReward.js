import React from "react";

const ViewReward = () => {
  return (
    <>
      <div className="Card">
        <div className="CardInner">
          <div className="container">
            <div className="Icon">
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
            </div>
            <div className="InputContainer">
              <input placeholder="Search Employee..." />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow">
        <table>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Contact No</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
            <td>94</td>
            <td>94</td>
            <td>94</td>
            <td>94</td>
            <td>94</td>
          </tr>
          <tr>
            <td>Adam</td>
            <td>Johnson</td>
            <td>67</td>
            <td>67</td>
            <td>67</td>
            <td>67</td>
            <td>67</td>
            <td>67</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default ViewReward;
