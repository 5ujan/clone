import React from 'react'
import { Link } from 'react-router-dom'

const HeroSeond=()=>{
    return <section className='wrapper'>
        <div className="hero hero-two">
            <div className="outer-container">
                <div className="container">
                    <div className="inner-container">

                    <h1 className='large-text'>
                        Our Journey
                    </h1>
                    <h4 className='medium-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum inventore distinctio doloribus velit nesciunt dolor suscipit ad iste soluta ratione.</h4>
                    <button className='btn btn-hero'>
                        <Link to='/about' href="">Learn More</Link>
                    </button>
                    </div>

                </div>
            </div>
        </div>
    </section>
}   
export default HeroSeond