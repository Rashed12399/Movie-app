import React from "react";
import beach from "../assets/beach.svg"
import paper from "../assets/paper.svg"
import react from "../assets/react.svg"
import setting from "../assets/setting.svg"
import star from "../assets/star.svg"
import time from "../assets/time.svg"
import "../style/sidebar.css"

function SideBar(){
    return (<aside>

<ul>
    <li><img src={beach}/></li>
    <li><img src={paper}/></li>
    <li><img src={react}/></li>
    <li><img src={setting}/></li>
    <li><img src={star}/></li>
    <li><img src={time}/></li>
</ul>
    </aside>
    );
}

export default SideBar;
