import React, { useState, useEffect } from "react";
import "../style/manageReward.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { ViewAllReward } from "../Web3/contractFunction";
import { UpdateRewardData } from "../Web3/contractFunction";
import { DeleteRewardData } from "../Web3/contractFunction";

const ManageEmployee = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [EditEmployee, setEditEmployee] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
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
  }, [isEditing]);

  console.log("employeeData", employeeData);
  const handleEditEmployee = (editemployee) => {
    console.log("edit data", editemployee);
    setEditEmployee(editemployee);
    setIsEditing(true);
  };
  const handleUpdate = async () => {
    console.log("updatebtn", EditEmployee);
    await UpdateRewardData(
      EditEmployee.rewardid,
      EditEmployee.title,
      EditEmployee.point,
      EditEmployee.difficulty,
      EditEmployee.criteria
    );
    setIsEditing(false);
  };

  const handleDelete = async (DeleteEmployee) => {
    await DeleteRewardData(DeleteEmployee.rewardid);
  };

  return (
    <>
      <div className="overflow2">
        <table>
          <thead>
            <tr>
              <th>Reward ID</th>
              <th>Reward Title</th>
              <th>Reward Points</th>
              <th>Reward Difficulty</th>
              <th>Reward Criteria</th>
              <th>Actions</th>
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
                      value={EditEmployee.rewardid}
                      // onChange={(event) =>
                      //   handleFieldChange(employee.id, "address", event)
                      // }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      value={EditEmployee.title}
                      onChange={(e) =>
                        setEditEmployee({
                          ...EditEmployee,
                          title: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      value={EditEmployee.point}
                      onChange={(e) =>
                        setEditEmployee({
                          ...EditEmployee,
                          point: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      value={EditEmployee.difficulty}
                      onChange={(e) =>
                        setEditEmployee({
                          ...EditEmployee,
                          difficulty: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      value={EditEmployee.criteria}
                      onChange={(e) =>
                        setEditEmployee({
                          ...EditEmployee,
                          criteria: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <SaveIcon
                      className="saveicon mt-2 cursor-pointer"
                      onClick={handleUpdate}
                    />
                  </td>
                </tr>
              </>
            ) : (
              <>
                {employeeData?.map((_, index) => (
                  <tr key={index}>
                    <td>{employeeData?.[index]?.rewardid}</td>
                    <td>{employeeData?.[index]?.title}</td>
                    <td>{employeeData?.[index]?.point}</td>
                    <td>{employeeData?.[index]?.difficulty}</td>
                    <td>{employeeData?.[index]?.criteria}</td>

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
