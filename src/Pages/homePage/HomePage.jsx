import Hero from "../../components/Hero/Hero";
import TopRight from "../../components/toppage/TopRight";
import "./homepage.css"
import golden from "../../assets/golden.svg"

const HomePage = () => {
  return (
    <>
      <div className="homepage-top-cont">
         <Hero />
         <TopRight />
      </div>
    </>
  )
}

export default HomePage