import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddEmployee from './pages/AddEmployee';
import ManageEmployee from './pages/ManageEmployee';
import AssignReward from './pages/AssignReward';
import AddReward from './pages/AddReward';
import ViewReward from './pages/ViewReward';
import ManageReward from './pages/ManageReward';
import ViewEmployee from './pages/ViewEmployee';
import RewardRedemption from './pages/RewardRedemption';
import Home from './components/Home';
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
          <Route path="/rewardRedemption" element={<RewardRedemption />} />
        </Routes>
      </Layout>
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
