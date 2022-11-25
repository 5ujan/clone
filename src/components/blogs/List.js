import React from 'react'
import data from '../../data'
import Preview from '../home/Preview'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'

const List=()=>{
    const {setType}=useGlobalContext()
    return <section>
        <div className="list">
        <div className="listcontent">
        <h1 style={{fontSize:'2rem', marginBottom:'2rem'}}>Latest Posts</h1>
            <div className="article-container list-container">
                {data.blogs.map((item)=>{
                    return (
                      <Link
                        key={item.id}
                        onClick={() => {
                          setType("blog");
                        }}
                        to={`/blogs/${item.id}`}
                      >
                        <Preview {...item}></Preview>{" "}
                      </Link>
                    );})}
            </div>
        </div>
        </div>
    </section>
}   
export default List