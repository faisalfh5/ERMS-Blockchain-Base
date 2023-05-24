import React from 'react';

import '../style/home.css';
import '../style/home.scss';
import IMG3 from '../assets/images/img3.png';
import Wallet from '../assets/images/s1.png';
import Redemption from '../assets/images/s2.png';
import Reward from '../assets/images/s3.png';
import AboutIMG from '../assets/images/about-img.png';
import w1 from '../assets/images/w1.png';
import w2 from '../assets/images/w2.png';
import w3 from '../assets/images/w3.png';
import team1 from '../assets/images/team-1.jpg';
import team2 from '../assets/images/team-2.jpg';
import team3 from '../assets/images/team-3.jpg';
import team4 from '../assets/images/team-4.jpg';
import client1 from '../assets/images/client1.jpg';
import client2 from '../assets/images/client2.jpg';
import Navbar from './Navbar';
import FacebookIcon from '@mui/icons-material/Facebook';
const Home = () => {
  return (
    <>
      <Navbar />
      {/* header end */}
      <section className="slider_section ">
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container ">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="detail-box" style={{ marginRight: '12%' }}>
                      <h1>ERMS Decentralized application</h1>
                      <p>
                        A DApp (Decentralized Application) Employee Reward Management System is a
                        blockchain-based platform designed to streamline and automate the process of
                        managing employee rewards within an organization. It leverages the benefits
                        of blockchain technology, such as transparency, immutability, and security,
                        to
                        <br /> ensure efficient and fair reward distribution
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src={IMG3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* image section end */}

      {/* service section  */}

      <section className="service_section layout_padding">
        <div className="service_container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>Services</span>
            </h2>
          </div>
          <div className="container ">
            <div className="heading_container heading_center"></div>
            <div className="row">
              <div className="col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src={Wallet} alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>MetaMask Wallet</h5>
                    <p>
                      MetaMask is the leading self-custodial wallet. The safe and simple way to
                      access blockchain applications and web3.
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src={Redemption} alt="" />
                  </div>
                  <div class="detail-box">
                    <h5>Redemption</h5>
                    <p>
                      Reward redemption refers to the process of exchanging earned or accumulated
                      tokens or digital assets for goods.
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src={Reward} alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Rewards</h5>
                    <p>
                      Reward refer to the incentives given to participants for their contribution,
                      such as validating transactions.
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="btn-box">
              <a href="">View All</a>
            </div> */}
          </div>
        </div>
      </section>

      {/* end service section */}

      {/* about section */}

      <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            {/* <h2>
              About <span>Us</span>
            </h2>
            <p>
              Magni quod blanditiis non minus sed aut voluptatum illum quisquam
              aspernatur ullam vel beatae rerum ipsum voluptatibus
            </p> */}
          </div>
          <div className="row">
            <div className="col-md-6 ">
              <div className="img-box">
                <img src={AboutIMG} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h3>We Are Finexo</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority
                  have suffered alteration in some form, by injected humour, or randomised words
                  which don't look even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                  middle of text. All
                </p>
                <p>
                  Molestiae odio earum non qui cumque provident voluptates, repellendus
                  exercitationem, possimus at iste corrupti officiis unde alias eius ducimus
                  reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end about section */}

      {/* why section */}

      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Why Choose <span>Us</span>
            </h2>
          </div>
          <div className="why_container">
            <div className="box">
              <div className="img-box">
                <img src={w1} alt="" />
              </div>
              <div className="detail-box">
                <h5>Expert Management</h5>
                <p>
                  Expert management involves the efficient organization, coordination, and
                  utilization of subject matter experts within a project or organization to leverage
                  their expertise and achieve optimal outcomes. It includes tasks such as
                  identifying experts, assigning roles, facilitating collaboration, and ensuring
                  their knowledge is effectively applied to achieve project goals.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={w2} alt="" />
              </div>
              <div className="detail-box">
                <h5>Secure Employee Record</h5>
                <p>
                  Blockchain's distributed ledger technology makes it possible to store and share
                  employee records securely across multiple departments and locations. This
                  eliminates the need to manually manage and update records, saving HR departments
                  valuable time and resources.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={w3} alt="" />
              </div>
              <div className="detail-box">
                <h5>Immutable Ledger</h5>
                <p>
                  No participant can change or tamper with a transaction after it's been recorded to
                  the shared ledger. If a transaction record includes an error, a new transaction
                  must be added to reverse the error, and both transactions are then visible.
                </p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">Read More</a>
          </div>
        </div>
      </section>

      {/* end why section */}

      {/* team section */}
      <section className="team_section layout_padding">
        <div className="container-fluid">
          <div className="heading_container heading_center">
            <h2 className="">
              Month of the <span> Employee</span>
            </h2>
          </div>

          <div className="team_container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src={team1} className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Joseph Brown</h5>
                    <p>Marketing Head</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src={team2} class="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Nancy White</h5>
                    <p>Marketing Head</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src={team3} className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Earl Martinez</h5>
                    <p>Marketing Head</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="box ">
                  <div className="img-box">
                    <img src={team4} className="img1" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Josephine Allard</h5>
                    <p>Marketing Head</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end team section  */}

      {/* client section  */}

      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>
              What says our <span>Employee</span>
            </h2>
          </div>
          <div className="carousel-wrap ">
            <div className="owl-carousel client_owl-carousel">
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src={client1} alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>LusDen</h6>
                        <p>magna aliqua. Ut</p>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      As an expert in effect pigments, it is important for me to pass on my
                      knowledge to my internationally active employees, agencies and customers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src={client2} alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>Zen Court</h6>
                        <p>magna aliqua. Ut</p>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      It is important to me that a company acts sustainably and environmentally.
                      SCHLENK actively assumes responsibility for this.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src={client1} alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>LusDen</h6>
                        <p>magna aliqua. Ut</p>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      With my team members, I look after our products from the development stage
                      right through the use at the customer's sites.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src={client2} alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>Zen Court</h6>
                        <p>magna aliqua. Ut</p>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      I am proud to be surrounded by people who consistently do the right thing."
                      “There is good support from team members. Honest and thoughtful co-workers.{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end client section  */}

      {/* info section  */}

      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Location</span>
                  </a>
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>Call +01 12123545</span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>abc@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="info_social">
                <a href="">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>Info</h4>
                <p>
                  Data is securely added to the network through a decentralized consensus mechanism,
                  ensuring immutability and transparency of information.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <a className="active" href="index.html">
                    Home
                  </a>
                  <a className="" href="about.html">
                    About
                  </a>
                  <a className="" href="service.html">
                    Services
                  </a>
                  <a className="" href="why.html">
                    Why Us
                  </a>
                  <a className="" href="team.html">
                    Team
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col ">
              <h4>Subscribe</h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* end info section */}

      {/* footer section  */}
      <section className="footer_section">
        <div class="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="https://html.design/">DAPP</a>
          </p>
        </div>
      </section>
      {/* footer section */}
    </>
  );
};

export default Home;
