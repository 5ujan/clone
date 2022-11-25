import React from 'react'
import {FaEye} from 'react-icons/fa'

const Preview=({img, title, views, text, importance, id})=>{

  

    let char
    char=80
    if (importance==='special') char=120
    const preText= text.substring(0,char)+'...'
      
    img= '/'+img

return (
  <article className={`preview ${importance}`}>
    <div className="img-wrapper">
      <img className="article-img" src={img} alt="failed to load" />
    </div>

    <p className="small-text">
      {" "}
      <FaEye></FaEye> {views} views
    </p>
    
    <h1
      className="medium-text"
      style={{ color: "#164676", fontSize: "1.5rem", fontWeight: "800"}}
      >
      {title}
    </h1>
    <p>{preText}</p>
  </article>
);
}


export default Preview