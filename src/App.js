import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddEmployee from "./pages/AddEmployee";
import ManageEmployee from "./pages/ManageEmployee";
import AssignReward from "./pages/AssignReward";
import AddReward from "./pages/AddReward";
import ViewReward from "./pages/ViewReward";
import ManageReward from "./pages/ManageReward";
import ViewEmployee from "./pages/ViewEmployee";
import GiveReward from "./pages/GiveReward";
import RewardRedumption from "./pages/RewardRedemption";
import Home from "./components/Home";

/* userDashboard */
import UserDashboard from "./UserDashboard/UserDashboard";
import RewardRedemption from "./pages/RewardRedemption";
import RewardHistory from "./UserDashboard/RewardHistory";
import ViewAssignReward from "./UserDashboard/UserViewAssignReward";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/manageEmployee" element={<ManageEmployee />} />
          <Route path="/viewEmployee" element={<ViewEmployee />} />
          <Route path="/assignReward" element={<AssignReward />} />
          <Route path="/addReward" element={<AddReward />} />
          <Route path="/viewReward" element={<ViewReward />} />
          <Route path="/manageReward" element={<ManageReward />} />
          <Route path="/giveReward" element={<GiveReward />} />
          <Route path="/rewardRedumption" element={<RewardRedumption />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/rewardHistory" element={<RewardHistory />} />
          <Route path="/userRewardRedemption" element={<RewardRedemption />} />
          <Route path="/viewassignReward" element={<ViewAssignReward />} />
        </Routes>
      </Layout>
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
