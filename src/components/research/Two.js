import React from 'react'
import './research.css'
import data from '../../data'
import ResearchPreview from './ResearchPreview'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'

const Two=()=>{
 
  const {setType}=useGlobalContext()
    return (
      <section>
        <div className="research-two">
          <h1 style={{ fontSize: "2rem", marginTop: "2rem" }}>Latest Posts</h1>
          <div className="research-container">
            {data.research.map((research, index) => (
              <Link
              key={research.id}
              onClick={() => {
                setType("research");
              }}
                to={`/research/${research.id}`}
              >
                <ResearchPreview {...research} index={index}></ResearchPreview>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
}   

export default Two

