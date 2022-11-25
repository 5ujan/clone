import React from 'react'
import { useGlobalContext } from '../../context'
import data from '../../data'
import './Hero.css'

const HeroSixth=()=>{
    const {setZoomed, setId}= useGlobalContext()
    return (
      <section className="wrapper">
        <div className="hero-six">
          <article className="gallery-container">
            <h1 className="large-text" style={{ color: "rgb(0, 50, 128)", marginBottom:'2rem' }}>
              Our Gallery
            </h1>
            <div className="img-grid">
              {data.gallery.map((item, index) => {
                return (
                  <div
                    className="img-container"
                    key={index}
                    onClick={() => {
                      setZoomed(true);
                      setId(index);
                    }}
                  >
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    );
}


export default HeroSixth