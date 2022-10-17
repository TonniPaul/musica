import MusicCard from '../../UI/musicCards/MusicCard';
import { songs } from '../../objectFiles/songData';

const TopChoice = () => {
  return (
    <div className='margin'>
      <h2 className="head-top">Popular in your area</h2>
      <div className="scroll-flex">
        {songs.popular.map((items) => {
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

export default TopChoice