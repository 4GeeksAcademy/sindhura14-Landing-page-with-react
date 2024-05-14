import React from "react";
import image from "/src/img/image.jpg"



function Cards({data}){
    return(<div className="card my-3 mx-5 d-inline-flex" style={{width:"18rem"}}>
    <img src={image} className="card-img-top" alt="blank image"/>   
    <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.text}</p>
    <a href="#" className="btn btn-primary">{data.buttonLabel}</a>
  </div>
  </div>)
}


export default Cards;