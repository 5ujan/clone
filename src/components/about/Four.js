import React from 'react'
import Person from './Person'
import './About.css'

const Four=()=>{
    const people=[]
    for(let i=0;i<10;i++){
        people.push(<Person key={i}></Person>)
    }
    return (<section>
        <div className="four">

        <h1 className='one-text-large blue'>Our Team</h1>
        <div className='people-container'>

        {people.map((person)=>person)}
        </div>
        </div>
    </section>
    )
}   
export default Four