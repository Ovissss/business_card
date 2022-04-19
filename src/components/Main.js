import React from "react"
import face from "../images/Oliveris.jpg"
import button_email from "../images/Button.png"
import button_linkd from "../images/Button1.png"

export default function Main(){
    return <div className="card">
        
      
           <img className="face" src={face} alt="Oliveris"/>
           <div className="wrap">
           <h1 className="name">Oliveris Grauslys</h1>
           <h2 className="developer">Frontend Developer</h2>
           <h3 className="website">oliveris.website</h3>
           <img className="button_email" src={button_email} alt="email"/>
           <img className="button_linkd" src={button_linkd} alt="linkd"/>
           </div>
        


       </div> 
    
}