import "./songCollection.css";
import image from "../../assets/tommorrow.svg";
import playall from "../../assets/playall.svg";
import add from "../../assets/add.svg";
import emptylove from "../../assets/emptylove.svg";

const SongCollectionCard = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="song-card-container"
    >
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
            <div className="align-center btn-s-c">
              <img src={emptylove} alt="add" />
              <p className="lllll">Like</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default SongCollectionCard;
