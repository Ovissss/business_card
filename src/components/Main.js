import React from "react"
import face from "../images/Oliveris.jpg"
import button_email from "../images/Button.png"
import button_linkd from "../images/Button1.png"
import twitter from "../images/Twitter.png"
import facebook from "../images/Facebook.png"
import instagram from "../images/Instagram.png"
import github from "../images/GitHub.png"

export default function Main(){
    return <div className="card">
        
      
           <img className="face" src={face} alt="Oliveris"/>
           <div className="wrap">
           <h1 className="name">Oliveris Grauslys</h1>
           <h2 className="developer">Frontend Developer</h2>
           <h3 className="website">oliveris.website</h3>
           <img className="button_email" src={button_email} alt="email"/>
           <img className="button_linkd" src={button_linkd} alt="linkd"/>
           <p> <h1 className="about">About</h1>
            I am a frontend developer with a particular interest in 
           making things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to learn.
            <h1 className="interests">Interests</h1>Food expert. Music scholar. Reader. Internet fanatic.
             Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
           </div>
           <div className="footer">
            <img className="twitter" src={twitter} alt="twitter icon"/>
            <img className="facebook" src={facebook} alt="facebook icon"/>
            <img className="instagram" src={instagram} alt="instagram icon"/>
            <img className="github" src={github} alt="github icon"/>
            </div>
           </div> 
        


       
    
}