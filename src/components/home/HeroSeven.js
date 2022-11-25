import React from 'react'

const HeroSeven=()=>{
    return (
      <section className="wrapper">
        <article
          className="hero-seven"
          style={{
            display: "flex",
            marginBottom: "3rem",
            justifyContent: "center",
            flexDirection: 'column',
            alignItems:'center'
          }}
        >
          <h1 className="large-text" style={{ color: "rgb(0, 50, 128)" }}>
            Our Contributors
          </h1>
          <div
            style={{
              width: "90vw",
              height: "20vh",
              borderRadius:'2rem',
              background: "rgba(0,0,0,0.1)",
            }}
          ></div>
        </article>
      </section>
    );
}

export default HeroSeven