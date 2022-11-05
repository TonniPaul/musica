import "./musicListCard.css";
import { useState } from "react";
import emptylove from "../../assets/emptylove.svg";
import redlove from "../../assets/redlove.svg";

const MusicListCard = ({ image }) => {
  const [musicLike, setMusicLike] = useState(false);

  const toggleMusicLike = () => {
    setMusicLike(!musicLike);
  };
  return (
    <div className="music-flex music-details-contt">
      <div className="music-flex">
        <img src={image} alt="" className="music-artt" />
        <img
          src={musicLike ? redlove : emptylove}
          alt=""
          onClick={toggleMusicLike}
          className="s-c-liked"
        />
      </div>
      <p>Lorem ipsum dolor sit.</p>
      <p>Lorem.</p>
      <p>4.17</p>
      <span className="material-symbols-outlined">more_vert</span>
    </div>
  );
};

export default MusicListCard;
