import React from 'react'

const Three=()=>{
        return (
            <section>
                <div className='three'>
                    <div className="three-content">

                    <h1 className='one-text-large blue'>
                        Know About Us
                    </h1>
                    <article className="know">
                        <div className="three-img-wrapper">
                            <img className='three-img' src={'/assets/aboutus.png'} alt="" />
                        </div>
                        
                        <div className='mission'>
                            <h3 className='one-text black'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores harum debitis cupiditate autem dolor, in quam ullam facilis aut. Sed fuga consequatur numquam dolor voluptate quod ad totam aliquam vero perspiciatis soluta eius ipsa necessitatibus, eaque ea reprehenderit minima assumenda, hic laborum accusantium. Ipsum ea rerum iusto optio voluptas quasi.
                            </h3>
                            <button className='btn'><h3 className='one-text'>Read Annual Report</h3></button>
                        </div>
                    </article>
                    </div>
                </div>
          </section>
        );
}

export default Three