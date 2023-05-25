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
import RewardRedemption from "./pages/RewardRedemption";
import GiveReward from "./pages/GiveReward";
import Home from "./components/Home";

/* userDashboard */
import UserDashboard from "./UserDashboard/UserDashboard";
import UserAddEmployee from "./UserDashboard/UserAddEmployee";
import UserManageEmployee from "./UserDashboard/UserManageEmployee";
import UserAssignReward from "./UserDashboard/UserAssignReward";
import UserAddReward from "./UserDashboard/UserAddReward";
import UserViewReward from "./UserDashboard/UserViewReward";
import UserManageReward from "./UserDashboard/UserManageReward";
import UserViewEmployee from "./UserDashboard/UserViewEmployee";
import UserRewardRedemption from "./UserDashboard/UserRewardRedemption";
import RewardHistory from "./UserDashboard/RewardHistory";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/manageEmployee" element={<ManageEmployee />} />
          <Route path="/viewEmployee" element={<ViewEmployee />} />
          <Route path="/assignReward" element={<AssignReward />} />
          <Route path="/addReward" element={<AddReward />} />
          <Route path="/viewReward" element={<ViewReward />} />
          <Route path="/manageReward" element={<ManageReward />} />
          <Route path="/giveReward" element={<GiveReward />} />
          <Route path="/rewardRedemption" element={<RewardRedemption />} />

          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/rewardHistory" element={<RewardHistory />} />
          <Route path="/useraddEmployee" element={<UserAddEmployee />} />
          <Route path="/usermanageEmployee" element={<UserManageEmployee />} />
          <Route path="/userviewEmployee" element={<UserViewEmployee />} />
          <Route path="/userassignReward" element={<UserAssignReward />} />
          <Route path="/useraddReward" element={<UserAddReward />} />
          <Route path="/userviewReward" element={<UserViewReward />} />
          <Route path="/usermanageReward" element={<UserManageReward />} />
          <Route
            path="/userRewardRedemption"
            element={<UserRewardRedemption />}
          />
        </Routes>
      </Layout>
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
