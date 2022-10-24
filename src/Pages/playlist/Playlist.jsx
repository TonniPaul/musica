import "./playlists.css";
import CollectionCard from "../../UI/collectionCard/CollectionCard";
import { playlistData } from "../../objectFiles/playlistObject";
import { NavLink, Routes, Route } from "react-router-dom";
import MyCollection from "../../components/myCollection/MyCollection";

const Playlist = () => {
  return (
    <div className="playlist-cont">
      <div className="playlist-btn-div">
        <NavLink to="/playlist/collection">
          <button className="playlist-btn ">My collection</button>
        </NavLink>
        <NavLink to="/playlist/likes">
          <button className="playlist-btn">Likes</button>
        </NavLink>
      </div>
      <div className="playlist-data-flex"></div>
      <Routes>
        <Route path="/collection" element={<MyCollection />} />
        <Route path="/likes" element={<CollectionCard />} />
      </Routes>
    </div>
  );
};

export default Playlist;
