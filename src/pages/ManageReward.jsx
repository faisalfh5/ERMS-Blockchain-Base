import React, { useState } from "react";
import "../style/manageReward.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

const ManageEmployee = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [employeeData, setEmployeeData] = useState([
    {
      id: 1,
      rewardpreference: "jillexample.com",
      rewardcriteria: "password1",
    },
    {
      id: 2,
      rewardpreference: "jillexample.com",
      rewardcriteria: "password1",
    },
    {
      id: 3,
      rewardpreference: "jillexample.com",
      rewardcriteria: "password1",
    },
    // Add more employee data objects as needed
  ]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (id) => {
    // Find the employee object by id
    const employee = employeeData.find((employee) => employee.id === id);
    if (employee) {
      // Perform save/update logic for the employee object
      console.log("Saving data:", employee);
    }

    // After saving, reset the editing state
    setIsEditing(false);
  };

  const handleFieldChange = (id, fieldName, event) => {
    // Find the employee object by id
    const employee = employeeData.find((employee) => employee.id === id);
    if (employee) {
      // Update the specific field value for the employee object
      employee[fieldName] = event.target.value;

      // Update the state with the modified employee data
      setEmployeeData([...employeeData]);
    }
  };

  return (
    <>
      <div className="overflow2">
        <table>
          <thead>
            <tr>
              <th>Reward Preference</th>
              <th>Reward Criteria</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((employee) => (
              <tr key={employee.id}>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={employee.rewardcriteria}
                      onChange={(event) =>
                        handleFieldChange(employee.id, "rewardcriteria", event)
                      }
                    />
                  ) : (
                    employee.rewardcriteria
                  )}
                </td>

                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={employee.rewardpreference}
                      onChange={(event) =>
                        handleFieldChange(
                          employee.id,
                          "rewardpreference",
                          event
                        )
                      }
                    />
                  ) : (
                    employee.rewardpreference
                  )}
                </td>

                <td>
                  {isEditing ? (
                    <SaveIcon
                      className="saveicon"
                      onClick={() => handleSave(employee.id)}
                    />
                  ) : (
                    <div className="icons1">
                      <EditIcon className="iconedit" onClick={handleEdit} />
                      <DeleteIcon className="icondelete" />
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageEmployee;
