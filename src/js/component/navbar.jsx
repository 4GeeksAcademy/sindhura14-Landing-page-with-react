import React from "react";
import { useState } from "react";


const navItems = [{name:'Home', color:'white',active:true ,stylename:"nav-link"},
{name:'About', color:'grey',active:false ,stylename:"nav-link"},
{name:'Services', color:'grey',active:false ,stylename:"nav-link"},
{name:'Contact', color:'grey',active:false ,stylename:"nav-link"}
];


function NavBarItems(){
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" >
    <a className="navbar-brand ms-2" href="#" style={{color:"white"}}>Start Bootstrap</a>
    <div className="container-fluid">
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse d-flex " id="navbarText">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end">
      {navItems.map(function(item,i){
       return <NavItem key={i} data={item}/>
      })}
     </ul>
   </div>
 </div>
</nav>
  );
}


function NavItem({data}){
   return(<li className="nav-item"><a className={data.stylename} href="#" style={{color:data.color}}>{data.name}</a></li>)
 }


export default NavBarItems;
