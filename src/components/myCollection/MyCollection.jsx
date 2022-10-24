import { playlistData } from "../../objectFiles/playlistObject";
import CollectionCard from "../../UI/collectionCard/CollectionCard";
import { motion } from "framer-motion";

const MyCollection = () => {
  const data = playlistData.myCollection;

  return (
    <motion.div
      className="playlist-data-flex"
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
      {data.map((items) => {
        return <CollectionCard key={items.id} {...items} />;
      })}
    </motion.div>
  );
};

export default MyCollection;
