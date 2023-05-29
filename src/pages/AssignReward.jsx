import React, { useState } from "react";
import "../style/rewardRedemption.css";
import "../style/assignReward.css";
import { AddAssignReward } from "../Web3/contractFunction";

const AssignReward = () => {
  const [rewardData, setRewardData] = useState({
    title: "",
    points: "",
    difficulty: "",
    criteria: "",
    empAddress: "",
  });
  console.log("reward diffuclty", rewardData.difficulty);
  console.log("reward points", rewardData.points);
  console.log("reward criteria", rewardData.criteria);
  console.log("reward empAddress", rewardData.empAddress);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setRewardData({ ...rewardData, [name]: value });
  };

  const handleSubmit = async () => {
    console.log("got here?");
    await AddAssignReward(
      rewardData.title,
      rewardData.points,
      rewardData.difficulty,
      rewardData.criteria,
      rewardData.empAddress
    );
  };

  return (
    <>
      <div className="dark">
        <div className="login-box">
          <h2>Assign Reward</h2>
          <form>
            <label htmlFor=""> Add Reward Title</label>
            <textarea
              className="text-area"
              type="text"
              name="title"
              id="rewardtitle"
              rows="1"
              cols="1"
              value={rewardData.title}
              onChange={handlechange}
            ></textarea>

            <label>Reward Difficulty &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <select
              name="difficulty"
              value={rewardData.difficulty}
              onChange={handlechange}
            >
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <br />
            <label>Reward Points &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <select
              name="points"
              value={rewardData.points}
              onChange={handlechange}
            >
              <option value=""></option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>

            <form>
              <label>Reward Criteria</label>

              <textarea
                value={rewardData.criteria}
                onChange={handlechange}
                name="criteria"
                className="text-area"
                id="w3review"
                rows="5"
                cols="112"
              ></textarea>
            </form>
            <br />
            <div className="user-box">
              <input
                name="empAddress"
                type="address"
                required=""
                value={rewardData.empAddress}
                onChange={handlechange}
              />
              <label>Wallet Address</label>
            </div>
            <button onClick={handleSubmit}>
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Assign Reward
              </a>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AssignReward;
