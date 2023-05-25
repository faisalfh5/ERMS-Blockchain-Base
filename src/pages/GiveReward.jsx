import React from "react";
import "../style/giveReward.css";

const GiveReward = () => {
  return (
    <div className="overflowtab2">
      <table>
        <tr>
          <th>Wallet ID</th>
          <th>Reward ID</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Best Employee by work</td>
          <button className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border-black-700 mt-3 mb-3">
            Give Reward
          </button>
        </tr>
        <tr>
          <td>2</td>
          <td>Puntual of time</td>
          <button className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4  mt-3 mb-3">
            Give Reward
          </button>
        </tr>
        <tr>
          <td>3</td>
          <td>Adam</td>
          <button className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4  mt-3 mb-3">
            Give Reward
          </button>
        </tr>
      </table>
    </div>
  );
};

export default GiveReward;
