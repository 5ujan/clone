import React from "react";
import Preview from "../home/Preview";
import data from '../../data'
import { Link } from "react-router-dom";



const Two = () => {
  const subdata=data.learn[0]

  
  return (
    <section>
      <div className="projects-two">
        <div className="two-header">
          <h2 className="one-text-large blue">Learn From Us</h2>
          <h5 className="one-text black" style={{fontSize:'1.5rem', textAlign:'center'}}>
            Our courses are devised after substantial discussion. We bring
            easily comprehensible yet highly rigorous content to pave path
            towards academic excellence.
          </h5>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <div
            className="article-container"
            style={{ display: "flex", margin: "2rem 0", gap: "2rem" }}
          >
            <Link to='/courses/course'>
            <Preview {...subdata} importance={"special"}></Preview>
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default Two;
