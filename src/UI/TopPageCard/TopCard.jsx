import "./topcard.css"
import { useState } from "react";
import { motion } from "framer-motion";


const TopCard = ({images, title, artist, time}) => {
   const [ clicked, setClicked] = useState(false)

   const handleLike = () => {
      // setclicked to opposite
      setClicked(!clicked)
}
  return (
    <motion.div 
      className="topcard-div"
      whileHover = {{
         background : `url(./assets/herobg.svg)`,
         backgroundColor: `rgb(233, 202, 129)`,
         backgroundSize : 50
      }}
      drag
      transition = {{
         type : 'tween',
         duration: 1
      }}
    >
      <div className="musicart-cont">
         <img src={images} alt="" className="music-art-img" />
      </div>
      <div className="music-details-cont">
         <h3 className="song-title">{ title }</h3>
         <small className="artist-name"> {artist} </small>
         <small className="hour-txt"> {time} </small>
      </div>   
      <div className="like-cont"
         onClick={handleLike}
      >
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={` ${clicked && "liked-music" }`} fillRule="evenodd" clipRule="evenodd" d="M1.15388 7.69874C0.349134 5.18624 1.28963 2.31449 3.92738 1.46474C5.31488 1.01699 6.84638 1.28099 7.99988 2.14874C9.09113 1.30499 10.6789 1.01999 12.0649 1.46474C14.7026 2.31449 15.6491 5.18624 14.8451 7.69874C13.5926 11.6812 7.99988 14.7487 7.99988 14.7487C7.99988 14.7487 2.44838 11.7277 1.15388 7.69874Z" stroke="#FACD66" strokeWidth="0.5625" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>

      </div>
    </motion.div>
  )
}

export default TopCard