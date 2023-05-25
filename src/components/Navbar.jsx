import { React, Navigator, useState } from 'react';

import '../style/home.css';
import '../style/home.scss';
import { NavLink, useNavigate } from 'react-router-dom';

import { Link, animateScroll as scroll } from 'react-scroll';

import ermslogo from '../assets/images/ermslogo.png';
import metaMask from '../connectors/metaMask.js';

const Navbar = () => {

  const [setUser, setSelectedTab] = useState("userDashB");

  const handlesubmit = async () => {
    await metaMask();
  };

  const handlechange = () => {
    // <AddEmployee />;
  };
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
                <button className="btn btn-primary font-weight-bold" type="submit">
                  Contact Details
                </button>
                {/* <button className="btn btn-primary font-weight-bold" type="submit">
                  Why Choose
                </button>
                <button className="btn btn-primary font-weight-bold" type="submit">
                  Feedback
                </button> */}
                <Link 
                  activeClass="active"
                  to="HP-Service"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                ><button className="btn btn-primary font-weight-bold" type="submit">
                  Services
                </button></Link>
                <Link 
                  activeClass="active"
                  to="abt-usSM"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                ><button
                  className="btn btn-primary font-weight-bold"
                  type="submit"
                  onClick={handlechange}
                >
                  About Me
                </button></Link>
                <button className={setUser === "userDashB" ? 'btn btn-primary font-weight-bold activeUserDB' : 'btn btn-primary font-weight-bold noTactiveUserDB'} type="submit">
                  User
                </button>
                <button className={setUser === "adminDashB" ? 'btn btn-primary font-weight-bold activeAdminDB' : 'btn btn-primary font-weight-bold noTactiveAdminDB'} onClick={handlechange}>
                  Admin
                </button>
                <NavLink to="/">
                  <button
                    className="btn btn-primary font-weight-bold ml-4"
                    type="submit"
                    onClick={handlesubmit}
                  >
                    Connect Wallet
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
