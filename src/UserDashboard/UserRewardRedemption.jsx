/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "../style/viewReward.css";
import { ViewAllGivenReward } from "../Web3/contractFunction";

const RewardRedemption = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [walletAddress, setWalletAddress] = useState("");

  console.log("employeeData", employeeData);
  console.log("walletAddress", walletAddress);

  async function getAddress() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    return addr;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log("here 123?");
    const fetch = async () => {
      const addr = await getAddress();
      setWalletAddress(addr);
    };
    fetch();
    Connect();
  }, [walletAddress]);

  const Connect = async () => {
    const tx = await ViewAllGivenReward(walletAddress);
    const newData = tx?.rewardid?.map((_, index) => ({
      criteria: tx.criterias[index],
      difficulty: tx.difficulty[index],
      point: tx.points[index],
      rewardid: tx.rewardid[index],
      title: tx.title[index],
    }));
    console.log("set new data => ", newData);

    setEmployeeData(newData);
    console.log("Api data => ", employeeData);
  };

  return (
    <>
      <div className="overflowtab">
        <table>
          <thead>
            <tr>
              <th>Reward ID</th>
              <th>Reward Title</th>
              <th>Reward Points</th>
              <th>Reward Diffulculty</th>
              <th>Criteria</th>
              <th>Status Redemption</th>
            </tr>
          </thead>

          <tbody>
            {employeeData?.map((_, index) => (
              <tr key={index}>
                <td>{employeeData?.[index]?.rewardid}</td>
                <td>{employeeData?.[index]?.title}</td>
                <td>{employeeData?.[index]?.point}</td>
                <td>{employeeData?.[index]?.difficulty}</td>
                <td>{employeeData?.[index]?.criteria}</td>
                <td>{"Redeem"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RewardRedemption;
