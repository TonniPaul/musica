import { playlistData } from "../../objectFiles/playlistObject";
import CollectionCard from "../../UI/collectionCard/CollectionCard";

const MyCollection = () => {
  const data = playlistData.myCollection;

  return (
    <div className="playlist-data-flex">
      {data.map((items) => {
        return <CollectionCard key={items.id} {...items} />;
      })}
    </div>
  );
};

export default MyCollection;
