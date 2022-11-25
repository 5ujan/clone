import React from 'react'
import './footer.css'
import {  ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";



const Footer=()=>{
    return (
      <section className="footer" id='foot  '>
        <footer>
          <div className="footer-wrapper">
            <article className="footer-article intro">
              <img
                src="/assets/logo-white.svg"
                className="logo-bottom"
                alt=""
              />
              A venture towards amalgamating rigorous Physics-based research
              with Tech-based applications.
            </article>
            <article className="footer-article links">
              <h3
                className="large-text"
                style={{ fontWeight: "400", fontSize: "2rem" }}
              >
                Quick Link
              </h3>
              <div className="links-container" style={{color:'gray'}}>
                <h3>About Us</h3>
                <h3>Projects</h3>
                <h3>Blogs</h3>
                <h3>Research Papers</h3>
              </div>
            </article>
            <article className="footer-article contact">
              <div>
                <h3 style={{ fontWeight: "400", fontSize: "2rem" }}>
                  Follow us
                </h3>
                <ImFacebook2 size={"2em"}></ImFacebook2>{" "}
                <FaLinkedin size={"2.2em"}></FaLinkedin>
              </div>
              <div>
                <h3 style={{ fontWeight: "400", fontSize: "2rem" }}>
                  Contact Us
                </h3>
                <span style={{color:'gray' , display:'flex'}} >
                    <FiMail size={'2em'} ></FiMail> 
                    contact@ecstaticparadox.com
                    </span>
              </div>
            </article>
          </div>
          <h3 className="small-text">Copyright 2022- All Rights Reserved</h3>
        </footer>
      </section>
    );
}

export default Footer