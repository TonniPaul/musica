import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Radio from './Pages/radio/Radio'
import LogOut from './Pages/logout/LogOut'
import Profile from './Pages/profile/Profile'
import Video from './Pages/video/Video'
import Playlist from './Pages/playlist/Playlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/playlist' element= { <Playlist /> } />
          <Route path='/radio' element={ <Radio />} />
          <Route path='log-out' element={ <LogOut />} />
          <Route path='/profile' element={ <Profile />} />
          <Route path='/videos' element={ <Video />} />
        </Routes>
      </Navbar>
    </div>
  )
}

export default App
