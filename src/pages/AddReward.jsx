import React from "react";

const AddReward = () => {
  return (
    <>
      <div className="dark">
        <div className="login-box1">
          <h2>Add Reward</h2>
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
            <button>
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
