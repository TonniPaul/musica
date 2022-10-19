import "./musicCard.css"

const MusicCard = ({albumart, titlle, artist}) => {
  return (
    <div className="music-card-contt">
      <div className="music-art-img-cont">
        <img src={albumart} alt="album-art" className="music-art-iimg" />
      </div>
      <div className="music-card-text-cont">
         <h3 className="song-title">{titlle}</h3>
         <small className="artist-name"> {artist} </small>
      </div>  
    </div>
  )
}

export default MusicCard