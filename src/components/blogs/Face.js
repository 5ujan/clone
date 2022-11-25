import React from "react";
import { FaEye } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

const Face = () => {
  const {setType}=useGlobalContext()
  return (
    <section>
      <div className="face">
        <div className="face-parent">
          <div className="facebg">
            <img
              className="faceimg"
              src={"/assets/content-jpegs/battery.jpg"}
              alt=""
            />
          </div>
          <div className="facearticlewrapper">
            <Link to="/blogs/0" onClick={()=>setType('blog')} style={{ textDecoration: "none" }}>
              <div className="facearticle">
                <h1
                  style={{
                    fontWeight: "400",
                    color: "#164676",
                    fontSize: "1.5rem",
                  }}
                >
                  'My Battery is Low, and It's getting Dark'
                </h1>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-around",
                  }}
                >
                  <p className="small-text" style={{ color: "black" }}>
                    {" "}
                    <IoCalendarNumberOutline></IoCalendarNumberOutline> 25 Jan,
                    2022
                  </p>
                  <p className="small-text" style={{ color: "black" }}>
                    {" "}
                    <FaEye></FaEye> {609} views
                  </p>
                </div>
                <p className="small-text" style={{ color: "black" }}>
                  A tale of the twins against the rage of the 'God of War.'
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Face;
