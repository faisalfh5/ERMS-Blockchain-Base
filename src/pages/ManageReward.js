import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const ManageReward = () => {
  return (
    <>
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
            <th>Actions</th>
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
            <div className="icons">
              <EditIcon className="iconedit" />
              <DeleteIcon className="icondelete" />
            </div>
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
            <div className="icons">
              <EditIcon className="iconedit" />
              <DeleteIcon className="icondelete" />
            </div>
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
            <div className="icons">
              <EditIcon className="iconedit" />
              <DeleteIcon className="icondelete" />
            </div>
          </tr>
        </table>
      </div>
    </>
  );
};

export default ManageReward;
