import React, { useState } from 'react';
import '../style/manageEmployee.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

const ManageEmployee = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [employeeData, setEmployeeData] = useState([
    {
      id: 1,
      wallet: 'address',
      email: 'jill@example.com',
      password: 'password1',
      firstName: 'Jill',
      lastName: 'Smith',
      dateOfBirth: '1990-01-01',
      contactNo: '1234567890',
      age: 30,
      address: '123 ABC Street',
    },
    {
      id: 2,
      wallet: 'address',
      email: 'jill@example.com',
      password: 'password1',
      firstName: 'Jill',
      lastName: 'Smith',
      dateOfBirth: '1990-01-01',
      contactNo: '1234567890',
      age: 30,
      address: '123 ABC Street',
    },
    {
      id: 3,
      wallet: 'address',
      email: 'jill@example.com',
      password: 'password1',
      firstName: 'Jill',
      lastName: 'Smith',
      dateOfBirth: '1990-01-01',
      contactNo: '1234567890',
      age: 30,
      address: '123 ABC Street',
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
      console.log('Saving data:', employee);
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
                      value={employee.wallet}
                      onChange={(event) => handleFieldChange(employee.id, 'wallet', event)}
                    />
                  ) : (
                    employee.wallet
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={employee.firstName}
                      onChange={(event) => handleFieldChange(employee.id, 'firstName', event)}
                    />
                  ) : (
                    employee.firstName
                  )}
                </td>

                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={employee.lastName}
                      onChange={(event) => handleFieldChange(employee.id, 'lastName', event)}
                    />
                  ) : (
                    employee.lastName
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="date"
                      value={employee.dateOfBirth}
                      onChange={(event) => handleFieldChange(employee.id, 'dateOfBirth', event)}
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
                      onChange={(event) => handleFieldChange(employee.id, 'contactNo', event)}
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
                      onChange={(event) => handleFieldChange(employee.id, 'age', event)}
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
                      onChange={(event) => handleFieldChange(employee.id, 'address', event)}
                    />
                  ) : (
                    employee.address
                  )}
                </td>

                <td>
                  {isEditing ? (
                    <SaveIcon className="saveicon" onClick={() => handleSave(employee.id)} />
                  ) : (
                    <div className="icons">
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
