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
    console.log("idhr a raha ?");
    const mintInstance = await getProviderOrSigner();
    console.log("provider", mintInstance);

    const trans = await mintInstance.GetAllEmployees();
    console.log("trans", trans);
    setEmployeeData(trans);
    return trans;
  } catch (error) {
    console.log("Something went wrong to intetract with smart contract");
  }
};

export const ViewEmployee = async (employee, setEmployeeData) => {
  try {
    console.log("idhr a raha ?");
    const mintInstance = await getProviderOrSigner();
    console.log("provider", mintInstance);

    const trans = await mintInstance.GetEmployee(employee);
    console.log("trans", trans);
    setEmployeeData(trans);
  } catch (error) {
    console.log("Something went wrong to intetract with smart contract");
  }
};

export const addReward = async (title, points, difficulty, critaria) => {
  try {
    const mintInstance = await getProviderOrSigner(true);
    console.log("mintInstance", mintInstance);
    // address wallet;
    // string fname;
    // string lname;
    // string dob;

    const trans = await mintInstance.AddReward(
      title,
      points,
      difficulty,
      critaria
    );

    await trans.wait();
    // eslint-disable-next-line no-undef
    toast("Reward Add successfully");
  } catch (error) {
    console.log("Something went wrong to intetract with smart contract");
  }
};

export const ViewAllReward = async (setEmployeeData) => {
  try {
    console.log("idhr a raha ?");
    const mintInstance = await getProviderOrSigner();
    console.log("provider", mintInstance);

    const trans = await mintInstance.GetAllReward();
    console.log("trans", trans);
    setEmployeeData(trans);
  } catch (error) {
    console.log("Something went wrong to intetract with smart contract");
  }
};

export const ViewGetReward = async (employee, setEmployeeData) => {
  try {
    const mintInstance = await getProviderOrSigner();
    console.log("mintInstance", mintInstance);

    const trans = await mintInstance.GetReward(employee);
    console.log("trans", trans);
    setEmployeeData(trans);
  } catch (error) {
    console.log("Something went wrong to intetract with smart contract");
  }
};

export const AddAssignReward = async (
  title,
  points,
  difficulty,
  critaria,
  empAddress
) => {
  try {
    console.log("title", title);
    console.log("points ", points);
    console.log("difficulty", difficulty);
    console.log("empAddress  ", empAddress);
    const mintInstance = await getProviderOrSigner(true);
    console.log("mintInstance", mintInstance);
    // string memory _title,
    // uint8 _point,
    // uint8 _difficulty,
    // string memory _criteria,
    // address _employeeWallet

    const trans = await mintInstance.AssignReward(
      title,
      points,
      difficulty,
      critaria,
      empAddress
    );

    await trans.wait();
    // eslint-disable-next-line no-undef
    toast("Reward Add successfully");
  } catch (error) {
    console.log("Something went wrong to intetract with smart contract");
  }
};

export const GiveEmpReward = async (wallet, rewardid) => {
  try {
    console.log("wallet", wallet);
    console.log("rewardid ", rewardid);

    const mintInstance = await getProviderOrSigner(true);
    console.log("mintInstance", mintInstance);
    //address _employeeWallet,
    // uint8 _rewardid

    const trans = await mintInstance.GiveReward(wallet, rewardid);

    await trans.wait();
    // eslint-disable-next-line no-undef
    toast("Reward Add successfully");
  } catch (error) {
    console.log("Something went wrong to intetract with smart contract");
  }
};

export const ViewAllAssignReward = async (wallet) => {
  try {
    const mintInstance = await getProviderOrSigner();
    console.log("mintInstance", mintInstance);
    console.log("wallet", wallet);
    const trans = await mintInstance.GetAllAssignedRewards(wallet);
    console.log("trans", trans);
    return trans;
  } catch (error) {
    console.log("Something went wrong to intetract with smart contract");
  }
};

export const ViewAllGivenReward = async (wallet) => {
  try {
    const mintInstance = await getProviderOrSigner();
    console.log("mintInstance", mintInstance);
    console.log("wallet", wallet);
    const trans = await mintInstance.GetGivenRewards(wallet);
    console.log("trans", trans);
    return trans;
  } catch (error) {
    console.log("Something went wrong to intetract with smart contract");
  }
};
