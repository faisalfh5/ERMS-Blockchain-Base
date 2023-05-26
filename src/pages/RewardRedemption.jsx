import React from "react";
import "../style/rewardRedemption.css";

const RewardRedemption = () => {
  return (
    <>
      <div className="overflowtab2">
        <table>
          <tr>
            <th>Reward Title</th>
            <th>Reward Criteria</th>
            <th>Reward Points</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Best Employee by work</td>
            <td>Best Employee by work</td>
            <button className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border-black-700 mt-3 mb-3">
              Redeme Reward
            </button>
          </tr>
          <tr>
            <td>2</td>
            <td>Puntual of time</td>
            <td>Best Employee by work</td>
            <button className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4  mt-3 mb-3">
              Redeme Reward
            </button>
          </tr>
          <tr>
            <td>3</td>
            <td>Adam</td>
            <td>Best Employee by work</td>
            <button className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4  mt-3 mb-3">
              Redeme Reward
            </button>
          </tr>
        </table>
      </div>
    </>
  );
};

export default RewardRedemption;
