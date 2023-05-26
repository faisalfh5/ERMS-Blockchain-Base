import React from "react";
import "../style/assignReward.css";
const AssignReward = () => {
  return (
    <div className="dark">
      <div className="login-box3">
        <h2>Assign Reward</h2>
        <form>
          <label htmlFor=""> Add Reward Title</label>
          <textarea
            className="text-area"
            type="text"
            name="rewardtitle"
            id="rewardtitle"
            rows="1"
            cols="1"
          ></textarea>
          <label>Reward Preference </label>
          <select>
            <option value="books">5</option>
            <option value="books">6</option>
            <option value="books">7</option>
            <option value="books">8</option>
            <option value="books">9</option>
            <option value="books">10</option>
          </select>

          <form>
            <label>Reward Criteria</label>

            <textarea
              className="text-area"
              id="w3review"
              name="w3review"
              rows="5"
              cols="112"
            ></textarea>
          </form>
          <br />
          <div className="user-box">
            <input type="address" name="" required="" />

            <label>Wallet Address</label>
          </div>
          <button>
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
  );
};

export default AssignReward;
