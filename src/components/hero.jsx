import React from 'react'
import heroBack from '../assets/heroBack.jpg'
import './hero.css'
import heroText from '../assets/heroText.png'

console.log(heroBack)

const Hero = () => {
    return (
        <div className="heroBackImg" >
            <div className="heroBackLayer" >
                <div className="hImgCont">
                    <img className="hImg" src={heroText} alt="" />
                    <h3 className="hText montserrat">Afford Your Style</h3>
                </div>
            </div>
        </div>
    )
}

export default Hero