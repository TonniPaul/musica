import { useState } from "react";
import play from "../../assets/play.svg";
import "./collectionCard.css";

const CollectionCard = ({ albumArt, musicTitle, artistName, likesTotal }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`collection-card-cont ${hover && "filter-back"}`}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={albumArt}
        alt={`${musicTitle}-cover-art`}
        className="collection-img"
        style={{
          transform: hover && "scale(1.17)",
        }}
      />

      <div className="collection-text-cont">
        <div
          style={{
            transform: hover ? "translateY(-10px)" : "translateY(15px)",
            transition: "var(--transition)",
          }}
          className="translate-y"
        >
          <h1 className="collection-card-title"> {musicTitle} </h1>
          <p className="collection-card-artist"> {artistName} </p>
        </div>

        <div className="collection-flex">
          <p
            style={{
              transform: hover && "translateY(0px)",
              opacity: hover ? 1 : 0,
              fontSize: 14,
            }}
            className="collection-card-like"
          >
            {likesTotal}
          </p>
          <img
            src={play}
            alt="play"
            style={{
              opacity: hover && 1,
            }}
            className="play-btn"
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
