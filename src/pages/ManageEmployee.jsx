import React, { useState, useEffect } from "react";
import "../style/manageEmployee.css";
import "../style/manageReward.css";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { ViewAllEmployee } from "../Web3/contractFunction";
import { DeleteEmployeeData } from "../Web3/contractFunction";
import { UpdateEmployeeData } from "../Web3/contractFunction";

const ManageEmployee = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [EditEmployee, setEditEmployee] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
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
    };
    fetch();
  }, [isEditing]);

  console.log("employeeData", employeeData);
  const handleEditEmployee = (editemployee) => {
    console.log("edit data", editemployee);
    setEditEmployee(editemployee);
    setIsEditing(true);
  };
  const handleUpdate = async () => {
    console.log("updatebtn", EditEmployee);
    await UpdateEmployeeData(
      EditEmployee.wallet,
      EditEmployee.fname,
      EditEmployee.lname,
      EditEmployee.dob,
      EditEmployee.contact,
      EditEmployee.age,
      EditEmployee.empAddress,
      EditEmployee.position
    );
    setIsEditing(false);
  };
  const handleDelete = async (DeleteEmployee) => {
    await DeleteEmployeeData(DeleteEmployee.wallet);
  };
  return (
    <>
      <div className="overflow2">
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
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isEditing ? (
              <>
                <tr>
                  <td>
                    {" "}
                    <input
                      type="text"
                      value={EditEmployee.wallet}
                      // onChange={(event) =>
                      //   handleFieldChange(employee.id, "address", event)
                      // }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      value={EditEmployee.fname}
                      onChange={(e) =>
                        setEditEmployee({
                          ...EditEmployee,
                          fname: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      value={EditEmployee.lname}
                      onChange={(e) =>
                        setEditEmployee({
                          ...EditEmployee,
                          lname: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      value={EditEmployee.dob}
                      onChange={(e) =>
                        setEditEmployee({
                          ...EditEmployee,
                          dob: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      value={EditEmployee.contact}
                      onChange={(e) =>
                        setEditEmployee({
                          ...EditEmployee,
                          contact: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      value={EditEmployee.age}
                      onChange={(e) =>
                        setEditEmployee({
                          ...EditEmployee,
                          age: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      value={EditEmployee.empAddress}
                      onChange={(e) =>
                        setEditEmployee({
                          ...EditEmployee,
                          empAddress: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      value={EditEmployee.position}
                      onChange={(e) =>
                        setEditEmployee({
                          ...EditEmployee,
                          position: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <SaveIcon
                      className="saveicon mt-3 cursor-pointer"
                      onClick={handleUpdate}
                    />
                  </td>
                </tr>
              </>
            ) : (
              <>
                {employeeData?.map((_, index) => (
                  <tr key={index}>
                    <td>{employeeData?.[index]?.wallet}</td>
                    <td>{employeeData?.[index]?.fname}</td>
                    <td>{employeeData?.[index]?.lname}</td>
                    <td>{employeeData?.[index]?.dob}</td>
                    <td>{employeeData?.[index]?.contact}</td>
                    <td>{employeeData?.[index]?.age}</td>
                    <td>{employeeData?.[index]?.empAddress}</td>
                    <td>{employeeData?.[index]?.position}</td>

                    <td>
                      <div className="icons1">
                        <EditIcon
                          className="iconedit cursor-pointer"
                          onClick={() => handleEditEmployee(_)}
                        />
                        <DeleteIcon
                          className="icondelete cursor-pointer"
                          style={{}}
                          onClick={() => handleDelete(_)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageEmployee;
