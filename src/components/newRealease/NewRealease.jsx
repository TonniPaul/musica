import MusicCard from '../../UI/musicCards/MusicCard';
import "./newRelease.css"
import { songs } from '../../objectFiles/songData';
import { useEffect, useState } from 'react';

const NewRealease = () => {
  const [ search, setSearch ] =useState('wizkid')
  const [ music, setMusic ] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b34b6492a8msh09001589cb463fap175b45jsn57b19623562a',
        'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
      }
    };
    
    fetch(`https://youtube-music1.p.rapidapi.com/v2/search?query=${search}`, options)
      .then(response => response.json())
      .then(response => {return (response)})
      .then(data => setMusic(data.result.songs))
      // .catch(err => console.error(err));
  }, [search])
  // const handleMusic = () => {

  // }
  return (
    <div className='margin'>
      <h2 className="head-top">New releases</h2>
      <div className="scroll-flex">
        {music.map((items) => {
          return (
            <MusicCard 
              key={items.id}
              titlle = {items.name.split('-', 2)}
              albumart= {items.thumbnail}
              artist = {items.name.split('-',1)}
              {...items}
            />
          )
        })}
        
      </div>
    </div>
  )
}

export default NewRealease