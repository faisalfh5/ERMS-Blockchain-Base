import React, { useState, useEffect } from "react";
import "../style/manageEmployee.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { ViewAllEmployee } from "../Web3/contractFunction";

const ManageEmployee = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [allempdata, setAllEmpData] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  const [valuestate, setValueState] = useState({
    fname: [],
    lname: "",
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (wallet) => {
    // Find the employee object by id
    const employee = employeeData.find(
      (employee) => employee.wallet === wallet
    );
    if (employee) {
      // Perform save/update logic for the employee object
      console.log("Saving data:", employee);
    }

    // After saving, reset the editing state
    setIsEditing(false);
  };

  const handleFieldChange = (wallet, fieldName, event) => {
    console.log("handle change wallet", wallet);
    console.log("chnage event", event);
    console.log("valuestate", valuestate);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetch = async () => {
      const tx = await ViewAllEmployee(setAllEmpData);
      console.log("tx wallet", tx?.wallet);
      setEmployeeData(
        tx
        // wallet: [...tx?.wallet],
        // contact: [...tx?.contact],
        // age: [...tx?.age],
        // dob: [...tx?.dob],
        // empAddress: [...tx?.empAddress],
        // lname: [...tx?.lname],
        // fname: [...tx?.fname],
      );
    };
    fetch();
  }, []);
  console.log("employeeData", employeeData);

  return (
    <>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employeeData?.wallet?.map((_, index) => (
              <tr key={index}>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      name="wallet"
                      value={employeeData.wallet?.[index]}
                      onChange={(event) =>
                        handleFieldChange(
                          employeeData?.wallet?.[index],
                          "wallet",
                          event.target.value
                        )
                      }
                    />
                  ) : (
                    employeeData?.wallet?.[index]
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      name="fname"
                      value={valuestate?.fname?.[index]}
                      onChange={(event) => {
                        handleFieldChange(
                          employeeData?.fname?.[index],
                          "firstName",
                          setValueState({
                            ...valuestate,
                            fname: event.target.value,
                          })
                        );
                      }}
                    />
                  ) : (
                    employeeData?.fname?.[index]
                  )}
                </td>

                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={valuestate.lname}
                      onChange={(event) =>
                        handleFieldChange(
                          employeeData?.wallet?.[index],
                          "lastName",
                          setValueState({
                            ...valuestate,
                            lname: event.target.value,
                          })
                        )
                      }
                    />
                  ) : (
                    employeeData?.lname?.[index]
                  )}
                </td>
                {/*<td>
                  {isEditing ? (
                    <input
                      type="date"
                      value={employee.dateOfBirth}
                      onChange={(event) =>
                        handleFieldChange(employee.id, "dateOfBirth", event)
                      }
                    />
                  ) : (
                    employee.dateOfBirth
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={employee.contactNo}
                      onChange={(event) =>
                        handleFieldChange(employee.id, "contactNo", event)
                      }
                    />
                  ) : (
                    employee.contactNo
                  )}
                </td>

                <td>
                  {isEditing ? (
                    <input
                      type="number"
                      value={employee.age}
                      onChange={(event) =>
                        handleFieldChange(employee.id, "age", event)
                      }
                    />
                  ) : (
                    employee.age
                  )}
                </td>

                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={employee.address}
                      onChange={(event) =>
                        handleFieldChange(employee.id, "address", event)
                      }
                    />
                  ) : (
                    employee.address
                  )}
                </td> */}

                <td>
                  {isEditing ? (
                    <SaveIcon
                      className="saveicon"
                      onClick={() => handleSave(employeeData.wallet)}
                    />
                  ) : (
                    <div className="icons">
                      <EditIcon
                        className="iconedit cursor-pointer"
                        onClick={handleEdit}
                      />
                      <DeleteIcon className="icondelete cursor-pointer" />
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
