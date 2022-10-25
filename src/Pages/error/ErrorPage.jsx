import { Link } from "react-router-dom";
import error from "../../assets/404-error.svg";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <motion.div
      className="playlist-cont"
      style={{
        width: "100%",
        height: "80vh",
        position: "relative",
      }}
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
    >
      <img
        src={error}
        alt="error 404"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#f2d7db",
          background: "url(./assets/herobg.svg) ",
          padding: 32,
          backgroundColor: " rgba( 0, 0.7, 0, 0.5) ",
          boxShadow: " 1px 1px 1px var(--light) ",
          borderRadius: 30,
          display: "grid",
          gap: 20,
          width: "70vw",
          fontSize: 18,
        }}
      >
        <h3
          style={{
            color: "#ff5061",
            fontWeight: 900,
            fontSize: 30,
          }}
        >
          PAGE NOT FOUND{" "}
        </h3>
        <p>
          The page that you are looking for does not exist on this website. You
          may have accidentally mistype the page address, or followed an expired
          link. Anyway, we will help you get back on track. Why not try to
          search for the page you were looking for:
        </p>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#0234c1",
            fontWeight: 900,
            background: " var(--yellow) ",
            padding: ".5rem 1rem",
            width: "max-content",
            textAlign: "center",
            borderRadius: "20px",
            justifySelf: "center",
            fontWeight: 700,
          }}
        >
          Go Back Home
        </Link>
      </div>
    </motion.div>
  );
};

export default ErrorPage;
