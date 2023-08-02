import React, { useState } from "react";
import "../style/giveReward.css";
import { GiveEmpReward } from "../Web3/contractFunction";

const GiveReward = () => {
  const [givereward, setGiveReward] = useState({
    wallet: "",
    rewardid: "",
  });
  console.log("wallet", givereward.wallet);
  console.log("rewardid", givereward.rewardid);
  // const handlechange = (e) => {
  //   const { name, value } = e.target;
  //   setGiveReward({ ...GiveReward, [name]: value });
  // };

  const handlesubmit = async () => {
    await GiveEmpReward(givereward.wallet, givereward.rewardid);
  };
  return (
    <div className="overflow">
      <table>
        <tr>
          <th>Wallet Address</th>
          <th>Reward ID</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>
            <div className="input-field input-field:focus">
              <input
                type="text"
                name="wallet"
                value={givereward.wallet}
                onChange={(e) => {
                  setGiveReward({ ...givereward, wallet: e.target.value });
                }}
              />
            </div>
          </td>
          <td>
            <div className="input-field input-field:focus">
              <input
                type="number"
                name="rewardid"
                value={givereward.rewardid}
                onChange={(e) => {
                  setGiveReward({ ...givereward, rewardid: e.target.value });
                }}
              />
            </div>
          </td>
          <button
            className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border-black-700 mt-3 mb-3"
            onClick={handlesubmit}
          >
            Give Reward
          </button>
        </tr>
      </table>
    </div>
  );
};

export default GiveReward;
