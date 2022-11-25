import React from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../context";
const HeroFourth = () => {
  const {setType}=useGlobalContext()
  return (
    <section className="wrapper">
      <div className="hero-four">
        <div className="overlay">
        <h1 className="large-text">Our Research Papers</h1>
        <Link to='/research'>
        <button className="btn">View Researches</button>
        </Link>
        <div className="best-container">
          <Link onClick={()=>setType('research')} to='/research/0'>
          <button className="btn best-button">Automatic LPG Gas Detection System</button>
          </Link>
          <Link onClick={()=>setType('research')} to='/research/1'>
          <button className="btn best-button">Calculate The Mass Of Black Hole</button>
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFourth;
