import React from "react";
import "../style/rewardHistory.css";
const RewardHistory = () => {
  return (
    <div className="overflowtab">
      <table>
        <tr>
          <th>Reward Title</th>
          <th>Criteria</th>
          <th>Reward Points</th>
          <th>Status Redemption</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Best Employee by work</td>
          <td>10</td>
          <td>Smith</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Puntual of time</td>
          <td>10</td>
          <td>Show Criteria of Reward</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Adam</td>
          <td>10</td>
          <td>Show Criteria of Reward</td>
        </tr>
      </table>
    </div>
  );
};

export default RewardHistory;
