import React from "react";
import "../style/assignReward.css";
const AssignReward = () => {
  return (
    <div className="dark">
      <div className="login-box1">
        <h2>Assign Reward</h2>
        <form>
          <label>Reward Preference </label>
          <select>
            <option value="books">5</option>
            <option value="books">6</option>
            <option value="books">7</option>
            <option value="books">8</option>
            <option value="books">9</option>
            <option value="books">10</option>
          </select>

          {/* <label>Reward Criteria &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <select>
            <option value="books">5</option>
            <option value="books">6</option>
            <option value="books">7</option>
            <option value="books">8</option>
            <option value="books">9</option>
            <option value="books">10</option>
          </select> */}

          <form>
            <label>Reward Criteria</label>

            <textarea
              style={{ marginLeft: "15%" }}
              id="w3review"
              name="w3review"
              rows="5"
              cols="94"
            ></textarea>
          </form>

          <div className="user-box">
            <input type="address" name="" required="" />
            <label>Wallet Address</label>
          </div>

          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Assign Reward
          </a>
        </form>
      </div>
    </div>
  );
};

export default AssignReward;
