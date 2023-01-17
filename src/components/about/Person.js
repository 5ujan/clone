import React, {createRef} from 'react'
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";


const Overlay=()=>{
    return(

        <div className='person-overlay'>
            <h3 className='person-name'>Random Person</h3>
            <h4 className='person-role'>Person role</h4>
            <span className='contact'>{Math.random()>0.5?<FaLinkedin></FaLinkedin>:null} <FiMail></FiMail></span>
        </div>
        )
}
const Person=()=>{
    const personContainer = createRef()
    // const [hover, setHover] = useState(false)
    return (
      <article
        className="person"
        ref={personContainer}
        >
        <Overlay ></Overlay>
        <div className="person-wrapper" ref={personContainer}>
          <img className="person-img" src={"/assets/gm.jpg"} alt="" />
        </div>
      </article>
    );

}
export default Person
