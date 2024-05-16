//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import navigaton component
import NavBarItems from "./component/navbar.jsx";

import MainContent from "./component/main.jsx";

import Cards from "./component/cards.jsx";

const cardItems = [
    {
        title:"Card Title",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        buttonLabel: "Find Out More"
    },
    {
        title:"Card Title",
        text:"dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
        buttonLabel: "Find Out More"
    },
    {
        title:"Card Title",
        text:"we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will.",
        buttonLabel: "Find Out More"
    },
    {
        title:"Card Title",
        text:"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus",
        buttonLabel:"Find Out More"

    }
];

function App(){
    return(
    <div>
        <NavBarItems></NavBarItems>
        <MainContent></MainContent>
        {cardItems.map(function(item,i){
            return <Cards key={i} data={item}></Cards>
        })}
     </div>)
}

//render your react application
ReactDOM.render(<App/>, document.querySelector("#app"));
