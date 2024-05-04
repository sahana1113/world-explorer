import React, { useEffect } from "react";
import "./home.scss";
import "./home.css";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { TbApps } from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";

import video from "../../photos/video.mp4";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container ">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText" data="true">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle" data="true">
            Search your Holiday
          </h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid" data="true">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here..." />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="Total">₹20,000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="20000" min="3000" />
            </div>
          </div>
          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>
        <div className="homeFooterIcons flex">
          <div className="rigthIcons">
            <FiFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <FaListUl className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
