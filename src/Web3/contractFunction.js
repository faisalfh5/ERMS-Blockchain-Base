import { toast } from "react-toastify";

import getProviderOrSigner from "./contract-instance";
// creating the function for the minting the NFT / creating the NFT
// eslint-disable-next-line consistent-return
export const addEmployee = async (
  wallet,
  fname,
  lname,
  dob,
  contact,
  age,
  address
) => {
  try {
    console.log("wallet", wallet);
    console.log("fname ", fname);
    console.log("lname", lname);
    console.log("dob  ", dob);
    console.log("contact", contact);
    console.log("age", age);
    console.log("address", address);
    const mintInstance = await getProviderOrSigner(true);
    console.log("mintInstance", mintInstance);
    // address wallet;
    // string fname;
    // string lname;
    // string dob;
    // string contact;
    // uint8 age;
    // string Address;
    const trans = await mintInstance.AddEmployee(
      wallet,
      fname,
      lname,
      dob,
      contact,
      age,
      address
    );

    await trans.wait();
    // eslint-disable-next-line no-undef
    toast.error("Employee Add successfully");
  } catch (error) {
    console.log("Something went wrong to intetract with smart contract");
  }
};

export const ViewAllEmployee = async (setEmployeeData) => {
  try {
    const mintInstance = await getProviderOrSigner();
    console.log("provider", mintInstance);

    const trans = await mintInstance.GetAllEmployees();
    console.log("trans", trans);
    setEmployeeData(trans);
    await trans.wait();
  } catch (error) {
    console.log("Something went wrong to intetract with smart contract");
  }
};
