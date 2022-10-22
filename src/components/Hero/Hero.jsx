import "./hero.css"
import avartar from "../../assets/heroperson.svg"
import  randomuser from '../../assets/randomuser.svg'
import  randomuser1 from '../../assets/randomuser1.svg'
import  randomuser2 from '../../assets/randomuser2.svg'
import  randomuser3 from '../../assets/randomuser3.svg'
import  filledlove from '../../assets/filledlove.svg'
import { motion } from "framer-motion"
import { useState } from "react"



const Hero = () => {

  const [load, setload ] = useState(false)
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <p>Currated playlist</p>
          <div className="hero-text-header-cont">
            <h1 className="hero-text-header">R & B Hits</h1>
            <p className="here-header-dscptn-text">All mine, Lie again, Petty call me everyday,</p>
            <p className="here-header-dscptn-text">Out of time, No love, Bad habit,</p>
            <p className="here-header-dscptn-text">and so much more</p>
          </div>
          <div className="mobile-gap ">
            <div className="img-stack">
              <img src={randomuser} alt="" className="randomuser rd" />
              <img src={randomuser1} alt="" className="randomuser rd1" />
              <img src={randomuser2} alt="" className="randomuser rd2" />
              <img src={randomuser3} alt="" className="randomuser rd3" />
              <img src={randomuser2} alt="" className="randomuser rd4" />
            </div>

            <motion.div 
              className="mobile-gap margin-left"
            >
              <img src={filledlove} alt="." className="hero-likes"/>
              <p>33k Likes</p>
            </motion.div>
          </div>
          
        </div>
        <motion.div
          animate = {{
              y : load && -10 
            }}
          initial = {{
              y : 300,
            }}
          transition = {{
              type : 'spring',
              stiffness: 50
            }}
          onLoad ={() => setload(!load)}
        >
          <img src={avartar} alt="avartar " className="hero-avatar hide-on-mobile" />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero