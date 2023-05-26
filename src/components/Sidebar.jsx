import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ethers } from "ethers";

import { BsArrowLeftCircle } from "react-icons/bs";
import { AiFillPieChart, AiOutlineFolderView } from "react-icons/ai";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { SiOpenaccess } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdManageAccounts, MdAddchart } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import Logo from "../assets/images/ermslogo.png";
import HamburgerButton from "./HamburgerMenuButton/HamburgerButton";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  console.log("outer address", walletAddress);

  const location = useLocation();

  const Menus = [
    { title: "Add Employees", path: "/addEmployee", src: <CgProfile /> },
    {
      title: "View Employee",
      path: "/viewEmployee",
      src: <AiOutlineFolderView />,
    },
    {
      title: "Manage Employee",
      path: "/manageEmployee",
      src: <MdManageAccounts />,
    },
    {
      title: "Assign Reward",
      path: "/assignReward",
      src: <AccountBalanceIcon />,
    },
    { title: "Add Rewards", path: "/addReward", src: <PlaylistAddIcon /> },
    { title: "View Reward", path: "/viewReward", src: <FaMoneyCheckAlt /> },
    { title: "Manage Reward", path: "/manageReward", src: <SiOpenaccess /> },
    { title: "Give Reward", path: "/giveReward", src: <MdAddchart /> },
    {
      title: "Reward Redemption",
      path: "/rewardRedumption",
      src: <GiMoneyStack />,
    },
  ];
  const UserMenu = [
    { title: "Dashboard", path: "/userdashboard", src: <AiFillPieChart /> },

    { title: "View Reward", path: "/viewReward", src: <MdAddchart /> },
    {
      title: "Reward History",
      path: "/rewardHistory",
      src: <FaMoneyCheckAlt />,
    },

    {
      title: "Reward Redemption",
      path: "/userRewardRedemption",
      src: <GiMoneyStack />,
    },
  ];

  async function getAddress() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    console.log("show addr", addr);
    setWalletAddress(addr);
    console.log("inter address", walletAddress);
  }
  useEffect(() => {
    // const val = window.ethereum.isConnected();
    // if (val) {
    console.log("here");
    getAddress();
    // }
  }, []);
  return (
    <>
      <div
        className={`${
          open ? "" : "w-fit"
        } hidden sm:block relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
      >
        <BsArrowLeftCircle
          className={`${
            !open && "rotate-180"
          } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
          onClick={() => setOpen(!open)}
        />
        <Link to="/dashboard">
          <div className={`flex ${open && "gap-x-4"} items-center`}>
            <img src={Logo} alt="" className="pl-2 w-12" />
            {open && (
              <span className="text-xl font-medium whitespace-nowrap dark:text-white">
                ERMS
              </span>
            )}
          </div>
        </Link>
        {walletAddress === "0xcF708576626e92AadC37b4Cccf3Bd9c60a306Dc3" ? (
          <ul className="pt-6">
            {Menus?.map((menu, index) => (
              <Link to={menu.path} key={index}>
                <li
                  className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? "mt-9" : "mt-2"} ${
                    location.pathname === menu.path &&
                    "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  <span className="text-2xl">{menu.src}</span>
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-300 hover:block`}
                  >
                    {menu.title}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <ul className="pt-6">
            {UserMenu?.map((menu, index) => (
              <Link to={menu.path} key={index}>
                <li
                  className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? "mt-9" : "mt-2"} ${
                    location.pathname === menu.path &&
                    "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  <span className="text-2xl">{menu.src}</span>
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-300 hover:block`}
                  >
                    {menu.title}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
      {/* Mobile Menu */}
      <div className="pt-3">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      {/* <div className="sm:hidden">
        {walletAddress === "0xcF708576626e92AadC37b4Cccf3Bd9c60a306Dc3" ? (
          <div
            className={`${
              mobileMenu ? "flex" : "hidden"
            } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
          >
            {UserMenu.map((menu, index) => (
              <Link
                to={menu.path}
                key={index}
                onClick={() => setMobileMenu(false)}
              >
                <span
                  className={` ${
                    location.pathname === menu.path &&
                    "bg-gray-200 dark:bg-gray-700"
                  } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
                >
                  {menu.title}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div
            className={`${
              mobileMenu ? "flex" : "hidden"
            } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
          >
            {Menus.map((menu, index) => (
              <Link
                to={menu.path}
                key={index}
                onClick={() => setMobileMenu(false)}
              >
                <span
                  className={` ${
                    location.pathname === menu.path &&
                    "bg-gray-200 dark:bg-gray-700"
                  } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
                >
                  {menu.title}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div> */}
    </>
  );
};

export default Sidebar;
