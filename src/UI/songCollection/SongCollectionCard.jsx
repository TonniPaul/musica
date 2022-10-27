import "./songCollection.css";
import image from "../../assets/tommorrow.svg";
import playall from "../../assets/playall.svg";
import add from "../../assets/add.svg";
import emptylove from "../../assets/emptylove.svg";
import redlove from "../../assets/redlove.svg";
import { useLike } from "../../Context/LikedContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import MusicListCard from "../musicListCard/MusicListCard";

const SongCollectionCard = () => {
  const { like, toggleLike } = useLike();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="song-card-container"
    >
      <motion.span
        className="material-symbols-outlined back"
        transition={{
          type: "spring",
          mass: 1,
          stiffness: 100,
          damping: 0,
        }}
        animate={{ x: 2 }}
        onClick={handleNavigate}
      >
        arrow_back
      </motion.span>
      <div className="song-flex-gap">
        <div className="song-card-hero-img-cont">
          <img src={image} alt="image" className="song-card-hero-img" />
        </div>
        <div>
          <div className="song-card-hero-text-c0nt">
            <h1 className="s-c-head-text">Tomorrow’s tunes</h1>
            <p className="sc-desc-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              incidunt odio necessitatibus cum alias quam?
            </p>
            <div>
              <p>67 Songs ~ 18 hrs+</p>
            </div>
          </div>
          <div className="align-center ">
            <div className="align-center btn-s-c hhjh">
              <img src={playall} alt="image" className="s-c-icon" />
              <p>Play all</p>
            </div>
            <div className="align-center btn-s-c ">
              <img src={add} alt="play" className="s-c-icon" />
              <p>Add to collection</p>
            </div>
            <div className="align-center btn-s-c" onClick={toggleLike}>
              <img
                src={like ? redlove : emptylove}
                alt="add"
                className="s-c-liked"
              />
              <p className="lllll">Like</p>
            </div>
          </div>
        </div>
      </div>
      <div className="musicList-gap">
        <MusicListCard />
      </div>
    </div>
  );
};
export default SongCollectionCard;


