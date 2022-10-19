import Hero from "../../components/Hero/Hero";
import TopRight from "../../components/toppage/TopRight";
import "./homepage.css"
import golden from "../../assets/golden.svg"
import NewRealease from "../../components/newRealease/NewRealease";
import TopChoice from "../../components/newRealease/TopChoice";
import { useNavigate } from "react-router-dom";

const HomePage = ({searched}) => {
  return (
    <div >
      <div className="homepage-top-cont">
         <Hero />
         <TopRight />
      </div>
      <div className="new-realease">
        <NewRealease
         searched={searched}
         />
        <TopChoice />
      </div>
    </div>
  )
}

export default HomePage