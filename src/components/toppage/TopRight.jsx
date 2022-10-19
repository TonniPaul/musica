import TopCard from "../../UI/TopPageCard/TopCard"
import "./topright.css"
import golden from '../../assets/golden.svg'
import newmusic from '../../assets/newmusic.svg'
import tommorrow from '../../assets/tommorrow.svg'
import { RigthObjectData } from "../../objectFiles/topRightData"


const TopRight = () => {
  return (
    <div className="tp-cont">
      <h2 className="head-top">Top charts</h2>
      <div className="mobile-flex">
        {RigthObjectData.map((items) => {
          return(
            <TopCard 
              key={items.id}
              {...items}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TopRight