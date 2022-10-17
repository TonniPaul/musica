import Hero from "../../components/Hero/Hero";
import TopRight from "../../components/toppage/TopRight";
import "./homepage.css"
import golden from "../../assets/golden.svg"
import NewRealease from "../../components/newRealease/NewRealease";
import TopChoice from "../../components/newRealease/TopChoice";

const HomePage = () => {
  return (
    <>
      <div className="homepage-top-cont">
         <Hero />
         <TopRight />
      </div>
      <div className="new-realease">
        <NewRealease />
        <TopChoice />
      </div>
    </>
  )
}

export default HomePage