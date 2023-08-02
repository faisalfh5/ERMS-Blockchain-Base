// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract SmartReward {
    address private owner; // Store owner address

    constructor() {
        owner = msg.sender;
    }

    struct Employee {
        address wallet;
        string fname;
        string lname;
        string dob;
        string contact;
        uint8 age;
        string Address;
        string position;
    }
     struct Reward {
        uint8 rewardid;
        string title;
        uint8 point;
        uint8 difficulty;
        string criteria;
    }
    
    address [] allemployee;
    uint256 [] allrewards;

    mapping(address => Employee) public employees;
    mapping(uint256 => Reward) private rewards;
    mapping(address => uint[] assignRewardsarr) public assignrewards;
    mapping(address => uint[] redeemRewardarr) public redeemrewards;
    mapping(address => uint totalpoint) public rewardTotalPoints;

    uint8 public rewardCount = 1;

    // Add employee record
    function AddEmployee(
        address walletaddress,
        string memory _fname,
        string memory _lname,
        string memory _dob,
        string memory _contact,
        uint8 _age,
        string memory _address,
        string memory _position
    ) public {
        address wallet = walletaddress;
        allemployee.push(wallet);
        Employee memory newEmployee = Employee(
            wallet,
            _fname,
            _lname,
            _dob,
            _contact,
            _age,
            _address,
            _position
        );

        employees[wallet] = newEmployee;
    }
   
        // Get employee details by wallet address
    function GetEmployee(address _wallet) public view returns (
        address wallet,
        string memory fname,
        string memory lname,
        string memory dob,
        string memory contact,
        uint8 age,
        string memory Address,
        string memory position
    ) {
        Employee memory employee = employees[_wallet];
        return (
            employee.wallet,
            employee.fname,
            employee.lname,
            employee.dob,
            employee.contact,
            employee.age,
            employee.Address,
            employee.position
        );

    }

    function GetAllEmployees() public view returns (
    address[] memory wallet,
    string[] memory fname,
    string[] memory lname,
    string[] memory dob,
    string[] memory contact,
    uint8[] memory age,
    string[] memory empAddress,
    string[] memory position
) {
    uint256 employeeCount = allemployee.length;

    wallet = new address[](employeeCount);
    fname = new string[](employeeCount);
    lname = new string[](employeeCount);
    dob = new string[](employeeCount);
    age = new uint8[](employeeCount);
    contact = new string[](employeeCount);
    empAddress = new string[](employeeCount);
    position = new string[](employeeCount);

    for (uint256 i = 0; i < employeeCount; i++) {
        address employeeAddress = allemployee[i];
        Employee storage employee = employees[employeeAddress];

        wallet[i] = employeeAddress;
        fname[i] = employee.fname;
        lname[i] = employee.lname;
        dob[i] = employee.dob;
        contact[i] = employee.contact;
        age[i] = employee.age;
        empAddress[i] = employee.Address;
        position[i] = employee.position;
    }
    
    return (wallet, fname, lname, dob, contact, age, empAddress, position);
}


    // Update employee details by wallet address
    function UpdateEmployee(
        address _wallet,
        string memory _fname,
        string memory _lname,
        string memory _dob,
        string memory contact,
        uint8 _age,
        string memory _address,
        string memory _position
    ) public {
        Employee storage employee = employees[_wallet];

        employee.fname = _fname;
        employee.lname = _lname;
        employee.dob = _dob;
        employee.dob = contact;
        employee.age = _age;
        employee.Address = _address;
        employee.Address = _position;

    }


    // Add a new reward
    function AddReward(
        string memory _title,
        uint8 _point,
        uint8 _difficulty,
        string memory _criteria
    ) public {
        uint8 rewardid = rewardCount++;
        Reward memory newReward = Reward(rewardid, _title, _point, _difficulty, _criteria );
        rewards[rewardid] = newReward;
        allrewards.push(rewardid);
    }

    // Get reward details by ID
    function GetReward(uint256 _id) public view returns (
        uint8 rewardid,
        string memory title,
        uint8 point,
        uint8 difficulty,
        string memory criteria
    ) {
        Reward memory reward = rewards[_id];
        return (reward.rewardid ,  reward.title, reward.point, reward.difficulty, reward.criteria);
    }

function GetAllReward() public view returns (
    uint8[] memory rewardid,
    string[] memory title,
    uint8[] memory point,
    uint8[] memory difficulty,
    string[] memory criteria
) {
    uint256 _rewardCount = allrewards.length;

    rewardid = new uint8[](_rewardCount);
    title = new string[](_rewardCount);
    point = new uint8[](_rewardCount);
    difficulty = new uint8[](_rewardCount);
    criteria = new string[](_rewardCount);

    for (uint256 i = 0; i < _rewardCount; i++) {
        uint256 rewardId = allrewards[i];
        Reward storage reward = rewards[rewardId];
        rewardid[i] = reward.rewardid;
        title[i] = reward.title;
        point[i] = reward.point;
        difficulty[i] = reward.difficulty;
        criteria[i] = reward.criteria;
    }

    return (rewardid, title, point,difficulty, criteria);
}


    // Update reward details by ID
    function UpdateReward(
        uint256 _id,
        string memory _title,
        uint8 _point,
        uint8 _difficulty,
        string memory _criteria
    ) public {

        Reward storage reward = rewards[_id];
        reward.title = _title;
        reward.point = _point;
        reward.difficulty = _difficulty;
        reward.criteria = _criteria;
    }

    // Assign reward to employee by wallet address
   function AssignReward(
    string memory _title,
    uint8 _point,
    uint8 _difficulty,
    string memory _criteria,
    address _employeeWallet
) public {
    
    uint8 rewardid = rewardCount;
    Reward memory newReward = Reward(rewardid, _title, _point, _difficulty, _criteria);
    rewards[rewardCount] = newReward;

    uint256[] storage assignedRewards = assignrewards[_employeeWallet];
    assignedRewards.push(rewardid);

    allrewards.push(rewardid);
    rewardCount++;
}

    function GetAllAssignedRewards(address _employeeWallet) public view returns (
        uint8[] memory rewardid, string[] memory title, uint8[] memory points, 
        uint8[] memory difficulty, string[] memory criterias) {
    uint[] storage assignedRewardIds = assignrewards[_employeeWallet];
    uint numRewards = assignedRewardIds.length;

    uint8[] memory _rewardid = new uint8[](numRewards);
    string[] memory titles = new string[](numRewards);
    uint8[] memory rpoints = new uint8[](numRewards);
    uint8[] memory difficulties = new uint8[](numRewards);
    string[] memory rcriterias = new string[](numRewards);
    
    for (uint256 i = 0; i < numRewards; i++) {
        uint256 rewardId = assignedRewardIds[i];
        Reward storage reward = rewards[rewardId];
        _rewardid[i] = reward.rewardid;
        titles[i] = reward.title;
        rpoints[i] = reward.point;
        difficulties[i] = reward.difficulty;
        rcriterias[i] = reward.criteria;
    }
    
    return (_rewardid,titles, rpoints, difficulties, rcriterias);
}

   function GiveReward(
    address _employeeWallet,
    uint8 _rewardid
) public {

    uint[] storage assignedRewards = redeemrewards[_employeeWallet];
    Reward memory rewardrecord = rewards[_rewardid];
    assignedRewards.push(_rewardid);
    uint previouspoint = rewardTotalPoints[_employeeWallet]; 
    uint tpoints = previouspoint + rewardrecord.point;
   rewardTotalPoints[_employeeWallet] = tpoints;
}

    function GetTotalPoint(address _employeeWallet) public view returns (uint totalpoint){
        return rewardTotalPoints[_employeeWallet];
    }

    function GetGivenRewards(address _employeeWallet) public view returns (
        uint8[] memory rewardid ,string[] memory title, uint8[] memory points,
         uint8[] memory difficulty, string[] memory criterias) {
    uint[] storage givenRewardIds = redeemrewards[_employeeWallet];
    uint numRewards = givenRewardIds.length;
    
    uint8[] memory _rewardid = new uint8[](numRewards);
    string[] memory titles = new string[](numRewards);
    uint8[] memory rpoints = new uint8[](numRewards);
    uint8[] memory difficulties = new uint8[](numRewards);
    string[] memory rcriterias = new string[](numRewards);
    
    for (uint256 i = 0; i < numRewards; i++) {
        uint256 rewardId = givenRewardIds[i];
        Reward storage reward = rewards[rewardId];
        
        _rewardid[i] = reward.rewardid;
        titles[i] = reward.title;
        rpoints[i] = reward.point;
        difficulties[i] = reward.difficulty;
        rcriterias[i] = reward.criteria;
    }
    
    return (_rewardid, titles, rpoints, difficulties, rcriterias);
}



     // Delete an employee by address
    function DeleteEmployee(address _wallet) public {
        delete employees[_wallet];
        removeFromArrayEmployee(_wallet, allemployee);
    }

      function removeFromArrayEmployee(address _element, address[] storage _array) internal {
        for (uint256 i = 0; i < _array.length; i++) {
            if (_array[i] == _element) {
                _array[i] = _array[_array.length - 1];
                _array.pop();
                break;
            }
        }
    }

    // Delete a reward by ID for an employee
    function DeleteReward(uint256 _rewardId) public {
          delete rewards[_rewardId];
        removeFromArrayReward(_rewardId, allrewards);
    }

    function removeFromArrayReward(uint256 _element, uint256[] storage _array) internal {
        for (uint256 i = 0; i < _array.length; i++) {
            if (_array[i] == _element) {
                _array[i] = _array[_array.length - 1];
                _array.pop();
                break;
            }
        }
    }
    
}