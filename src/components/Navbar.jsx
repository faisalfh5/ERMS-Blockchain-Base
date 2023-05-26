import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "../style/home.css";
import "../style/home.scss";
import { NavLink } from "react-router-dom";

import { Link, animateScroll as scroll } from "react-scroll";

import ermslogo from "../assets/images/ermslogo.png";
import metaMask from "../connectors/metaMask.js";

const Navbar = () => {
  const [setUser, setSelectedTab] = useState("userDashB");
  const [walletAddress, setWalletAddress] = useState("");
  const handlesubmit = async () => {
    await metaMask();
  };

  const handlechange = () => {
    // <AddEmployee />;
  };
  async function getAddress() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    setWalletAddress(addr);

    if (addr === "0xcF708576626e92AadC37b4Cccf3Bd9c60a306Dc3") {
      setSelectedTab("adminDashB");
    }
    console.log("setUser", setUser);
  }
  useEffect(() => {
    // const val = window.ethereum.isConnected();
    // if (val) {
    console.log("here");
    getAddress();
    // }
  }, []);
  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <div>
            <img src={ermslogo} alt="" className="logo-img" />
          </div>
          <div className="logo ">
            <span>ERMS</span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <form class="form-inline">
                <Link
                  activeClass="active"
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={2000}
                >
                  <div className="font-weight-bold text-white pl-3 pr-3 cursor-pointer">
                    Contact Details
                  </div>
                </Link>
                <Link
                  activeClass="active"
                  to="HP-Service"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  <div className="text-white font-weight-bold pl-3 pr-3 cursor-pointer">
                    Services
                  </div>
                </Link>
                <Link
                  activeClass="active"
                  to="abt-usSM"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  <div
                    className="text-white font-weight-bold pl-3 pr-3 cursor-pointer"
                    onClick={handlechange}
                  >
                    About Us
                  </div>
                </Link>

                <a
                  href={
                    walletAddress ===
                    "0xcF708576626e92AadC37b4Cccf3Bd9c60a306Dc3"
                      ? "/admindashboard"
                      : "/userdashboard"
                  }
                >
                  <div
                    className={
                      setUser === "userDashB"
                        ? "text-white font-weight-bold activeUserDB"
                        : "btn btn-primary font-weight-bold noTactiveUserDB"
                    }
                    type="submit"
                  >
                    {walletAddress ===
                    "0xcF708576626e92AadC37b4Cccf3Bd9c60a306Dc3"
                      ? "Admin Dashboard"
                      : "User Dashboard"}
                  </div>
                </a>

                <button
                  className={
                    setUser === "adminDashB"
                      ? "btn btn-primary font-weight-bold hover:bg-sky-400 border-amber-700 activeAdminDB"
                      : "btn btn-primary font-weight-bold noTactiveAdminDB"
                  }
                  onClick={handlechange}
                >
                  Admin
                </button>
                <NavLink to="/">
                  <button
                    className="btn text-white hover:bg-sky-400 font-weight-bold ml-4 bg-red-500"
                    type="submit"
                    onClick={handlesubmit}
                  >
                    {walletAddress.slice(0, 5)} Connect Wallet
                  </button>
                </NavLink>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
