import React from "react";
import "../style/rewardRedemption.css";

const RewardRedemption = () => {
  return (
    <>
      <div className="dark">
        <div className="login-box1">
          <h2>Add Reward</h2>
          <form>
            <form>
              <label>Assign Reward</label>

              <textarea
                class="text-area"
                id="w3review"
                name="w3review"
                rows="3"
                cols="110"
              ></textarea>
            </form>
            <div className="reward">
              <label>Reward Preference Points </label>
              <select>
                <option value="books">5</option>
                <option value="books">6</option>
                <option value="books">7</option>
                <option value="books">8</option>
                <option value="books">9</option>
                <option value="books">10</option>
              </select>
              <label className="outof"> out of </label>
              <label className="outof2"> 10 </label>
            </div>
            <button>
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Request Redemption
              </a>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RewardRedemption;
