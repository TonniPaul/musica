import './App.css'
import Navbar from './components/navbar/Navbar'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Radio from './Pages/radio/Radio'
import LogOut from './Pages/logout/LogOut'
import Profile from './Pages/profile/Profile'
import Video from './Pages/video/Video'
import Playlist from './Pages/playlist/Playlist'
import HomePage from './Pages/homePage/HomePage'
import ErrorPage from "./Pages/error/ErrorPage";
import Album from "./Pages/album/Album";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/playlist/*" element={<Playlist />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="log-out" element={<LogOut />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/videos" element={<Video />} />
          <Route path="/album/*" element={<Album />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App
