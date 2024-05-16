import React from "react";
import { useState } from "react";


const navItems = [{name:'Home', color:'white',active:true ,class:"nav-link"},
{name:'About', color:'grey',active:false ,class:"nav-link"},
{name:'Services', color:'grey',active:false ,class:"nav-link"},
{name:'Contact', color:'grey',active:false ,class:"nav-link"}
];


function NavBarItems(){
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" >
    <div className="container-fluid">
    <a className="navbar-brand ms-1" href="#" style={{color:"white"}}>Start Bootstrap</a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarNav">
     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
   return(<li className="nav-item"><a className={`${data.class} ${data.active ? 'active' : ''}`} href="#" style={{color:data.color}}>{data.name}</a></li>)
 }


export default NavBarItems;
