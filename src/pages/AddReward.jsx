import React from "react";

const AddReward = () => {
  return (
    <>
      <div className="dark">
        <div className="login-box1">
          <h2>Add Reward</h2>
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

            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Add Reward
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddReward;
