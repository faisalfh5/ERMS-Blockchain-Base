import React, { useState } from "react";
import { addReward } from "../Web3/contractFunction";

const AddReward = () => {
  const [rewardData, setRewardData] = useState({
    title: "",
    points: "",
    difficulty: "",
    criteria: "",
  });
  console.log("reward diffuclty", rewardData.difficulty);
  console.log("reward points", rewardData.points);
  console.log("reward criteria", rewardData.criteria);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setRewardData({ ...rewardData, [name]: value });
  };

  const handleSubmit = async () => {
    console.log("got here?");
    await addReward(
      rewardData.title,
      rewardData.points,
      rewardData.difficulty,
      rewardData.criteria
    );
  };

  return (
    <>
      <div className="dark">
        <div className="login-box">
          <h2>Add Reward</h2>
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
                className="text-area"
                id="w3review"
                name="criteria"
                rows="5"
                cols="112"
              ></textarea>
            </form>
            <br />
            <button onClick={handleSubmit}>
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Add Reward
              </a>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddReward;
