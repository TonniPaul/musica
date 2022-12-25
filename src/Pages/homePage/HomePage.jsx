import Hero from "../../components/Hero/Hero";
import TopRight from "../../components/toppage/TopRight";
import "./homepage.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TopChoice from "../../components/newRelease/TopChoice";
import NewRelease from "../../components/newRelease/NewRelease";

const HomePage = ({ searched }) => {
  const navigate = useNavigate();

  const handleLoad = () => {
    navigate("/home");
  };
  return (
    <motion.div
      whileInView={{
        opacity: 1,
        transform: "translateY(0)",
      }}
      initial={{
        opacity: 0,
      }}
      transition={{
        type: "tween",
        duration: 1,
      }}
      onLoad={handleLoad}
    >
      <div className="homepage-top-cont">
        <Hero />
        <TopRight />
      </div>
      <div className="new-realease">
        <NewRelease searched={searched} />
        <TopChoice />
      </div>
    </motion.div>
  );
};

export default HomePage