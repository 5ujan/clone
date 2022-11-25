import React from 'react'
import {ImCross} from 'react-icons/im'
import { useGlobalContext } from '../context'
import data from '../data'
import './home/Hero.css'

const Fullscreen=()=>{
    const{ setZoomed, id}= useGlobalContext()
    const myStyles={
        width:'100vw',
        height: '100vh',
        position:'fixed',
        top:'0',
        left:'0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background:'rgba(0,0,0,0.8)',
        zIndex:'3'
    }

    return (
      <div style={myStyles} className='fs-overlay'>
        <div style={{ alignSelf: "flexEnd", color:'white' }}
        onClick={()=>setZoomed(false)} >
          <ImCross></ImCross>
        </div>
        <img
          src={data.gallery[id]}
          alt=""
          style={{ height: "90vh", width: "80vw" }}
        />
      </div>
    );
}   

export default Fullscreen