import React from 'react'
import './research.css'
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { FaEye } from 'react-icons/fa';


const ResearchPreview=({img, title, views, text, index})=>{
    const preText=text.substring(0,70)+'...'
    return (
      <article className={`research-preview ${index % 2 !== 0 ? "anti" : ""}`}>
        <div className="image-wrapper research-img" style={{ flex: "3", height: "30vw" }}>
          <img className="two-img" src={img} alt="" />
        </div>
        <div className="research-text-content" style={{ flex: "2" }}>
          <h1 style={{ fontSize: "2rem" }}>{title}</h1>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <p className="small-text">
              {" "}
              <IoCalendarNumberOutline></IoCalendarNumberOutline> 25 Jan, 2022
            </p>
            <p className="small-text">
              {" "}
              <FaEye></FaEye> {views} views
            </p>
          </div>
          <p className="one-text black">{preText}</p>
          
          <button className='btn' style={{color:'white'}}>
            Read Abstract
          </button>
          
        </div>
      </article>
    );
}   

export default ResearchPreview
