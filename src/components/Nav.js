import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

import './Nav.css'

const Nav = () => {
  const linksContainer= React.createRef()
  const modalParent= React.createRef()
  const [size, setSize] = useState(0)
  const [modal, setModal]= useState(false)
  const [location, setLocation] = useState({})

  const changeSize=()=>{
    const {height}=linksContainer.current.getBoundingClientRect()
    size===0?setSize(height):setSize(0)
  }
  const showModal=()=>{
    setModal(!modal)
    let {x,y}= modalParent.current.getBoundingClientRect()
    y=y+40
    setLocation({x,y})
    
  }
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <div className="nav-logo">
              <Link to="/">
              <img src={"/assets/logo.png"} alt="" />
              </Link>
            </div>
            <button onClick={changeSize}>
              <FaBars></FaBars>
            </button>
          </div>
          <div className="links-container" style={{ height: `${size}px` }}>
            <ul ref={linksContainer} className="nav-links">
              <li className="nav-link">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-link">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-link">
                <Link to="/projects">Projects</Link>
              </li>
              <li
                className="nav-link publications"
                ref={modalParent}
                onClick={showModal}
              >
                Publications
                <span>
                  <MdArrowDropDown></MdArrowDropDown>
                </span>
              </li>
              <li className="nav-link">
                <Link to="/courses">Courses</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {modal && (
        <div
          className="modal"
          style={{
            position: "absolute",
            top: `${location.y}px`,
            left: `${location.x}px`,
          }}
        >
          <div className="modal-item">
            <Link to="/blogs">Blogs</Link>
          </div>
          <div className="modal-item">
            <Link to="/research">Research</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
