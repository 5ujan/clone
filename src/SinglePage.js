import React from 'react'
// import { useGlobalContext } from './context'
import data from './data'
import { FaEye } from 'react-icons/fa'
import { IoCalendarNumberOutline } from "react-icons/io5";
import './singlepage.css'
import { useParams } from 'react-router-dom';




const SinglePage=()=>{
  // const {type}=useGlobalContext()
  const params = useParams();
  const iiiiid = params.id;
  const mode= params.mode;

    let subdata;
  
    if (mode==='blogs') {subdata=data.blogs[parseInt(iiiiid)]}
    else if (mode==='research') {subdata=data.research[parseInt(iiiiid)]}
    else if (mode==='courses') {subdata=data.learn[0]}
    else if (mode==='projects') {subdata=data.projects[parseInt(iiiiid)]}
    


    if(subdata)
    

    return (
      <section>
        <div className="singlepage">
          <div className="type">  {mode==='research'?mode:mode.substring(0,mode.length-1)}</div>
          <div className="header">
            <div className="details">
              <div className="author">
                <img src={"/assets/gm.jpg"} alt="" />
              </div>
              <div className="upload-details">
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-around",
                  }}
                >
                  <p className="small-text">
                    {" "}
                    <IoCalendarNumberOutline></IoCalendarNumberOutline> {subdata.upload}
                  </p>
                  <p className="small-text">
                    {" "}
                    <FaEye></FaEye> {subdata.views} views
                  </p>
                </div>
              </div>
            </div>
              <h3 className="title-text">
                {subdata.title}
              </h3>
          </div>
          <div className="large-image">

          <img src={`/${subdata.img}`} alt="" />
          </div>
          <div className="desc">
            {subdata.text}
          </div>
        </div>
      </section>
    );
    return <h1>Nothing found</h1>
}   
export default SinglePage