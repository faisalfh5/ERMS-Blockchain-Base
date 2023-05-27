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
      const tx = await ViewAllGivenReward(walletAddress);
      setEmployeeData(tx);
    };
    fetch();
  });

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
                {/* <td>{employeeData?.rewardid[index]}</td> */}
                <td>{employeeData?.title[index]}</td>
                <td>{employeeData?.points[index]}</td>
                <td>{employeeData?.difficulty[index]}</td>
                <td>{employeeData?.criterias[index]}</td>
                <td>{index < 2 ? "Redeem" : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RewardRedemption;
