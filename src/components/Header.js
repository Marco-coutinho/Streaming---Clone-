import React from "react";
import'./Header.css';

export default ({Black}) => {
    return (
        <header className= {Black ? 'Black' : ''}>
            <div className="header--logo">
           <a href="/">
               <img src="https://alpha.uscreencdn.com/198xnull/9530/uploads/27dd6c4c-ba82-492a-b846-23c40cedfc81.png" alt="Nerdflix"/>
           </a>
           </div>
           <div className="header--user">
               <a href="/">
                   <img src="https://cdn.icon-icons.com/icons2/2619/PNG/256/among_us_netflix_icon_156927.png"/>
               </a>
           </div>
        </header>
    );
}