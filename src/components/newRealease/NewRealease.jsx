import MusicCard from '../../UI/musicCards/MusicCard';
import "./newRelease.css"
import { songs } from '../../objectFiles/songData';

const NewRealease = () => {
  return (
    <div className='margin'>
      <h2 className="head-top">New releases</h2>
      <div className="scroll-flex">
        {songs.map((items) => {
          return (
            <MusicCard 
              key={items.id}
              {...items}
            />
          )
        })}
        
      </div>
    </div>
  )
}

export default NewRealease