import React from 'react'
import image from '../assets/newsImg.jpg';

const NewsItem = ({title , url ,src ,description , pat}) => {
  return (
      <div className="ms-5 card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:'345px' }}>
  <img src={src?src:image}  style={{height:'200px' ,width:'100%'}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):'The German government has finalised new plans for a potential war. Berlin\'s plan includes'}</p>
    <p className="card-text">Published on {pat}</p>
    <a href={url} className="btn btn-primary">read More</a>
  </div>
</div>
  )
}

export default NewsItem
