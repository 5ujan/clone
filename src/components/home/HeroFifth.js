import React from 'react'
import Preview from './Preview'
import data from '../../data'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'

const HeroFifth=()=>{
    const [smallArr] = React.useState([
      data.blogs[0],
      data.blogs[1],
      data.blogs[2],
    ]);

    const {setType}=useGlobalContext()
    return (
      <section className="wrapper">
        <div className="centerer">
          <div className="hero-five">
            <h1
              className="large-text"
              style={{ color: "#003280", fontSize: "3.75rem" }}
            >
              Our Must Reads
            </h1>
            <div className="article-container">
              {smallArr.map((item, id) => (
                <Link key={id} onClick={()=>{setType('blog')}} to={`blogs/${item.id}`}>
                  <Preview {...item}></Preview>{" "}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}

export default HeroFifth