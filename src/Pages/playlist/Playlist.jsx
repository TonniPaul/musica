import "./playlists.css";
import { NavLink, Routes, Route, Link } from "react-router-dom";
import MyCollection from "../../components/myCollection/MyCollection";
import { motion } from "framer-motion";

const Playlist = () => {
  return (
    <motion.div
      className="playlist-cont"
      whileInView={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
      transition={{
        type: "tween",
        duration: 1,
      }}
    >
      <div className="playlist-btn-div">
        <Link to="/playlist/">
          <button className="playlist-btn ">My collection</button>
        </Link>
        <NavLink to="/playlist/likes">
          <button className="playlist-btn">Likes</button>
        </NavLink>
      </div>
      <div className="playlist-data-flex"></div>
      <Routes>
        <Route index element={<MyCollection />} />
        <Route
          path="/likes"
          element={
            <motion.div
              style={{
                width: "100%",
                height: "50vh",
                display: "grid",
                placeItems: "center",
                color: "white",
                fontSize: 20,
              }}
              whileInView={{
                opacity: 1,
                transform: "translateY(0)",
              }}
              initial={{
                opacity: 0,
              }}
              transition={{
                type: "tween",
                duration: 1,
              }}
            >
              Nothing to see here, still in the works
            </motion.div>
          }
        />
      </Routes>
    </motion.div>
  );
};

export default Playlist;
