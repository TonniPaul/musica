import { v4 as uuid } from "uuid";
import image from "../assets/collection.svg";
import image1 from "../assets/img5.png";
import image2 from "../assets/img3.png";
import image3 from "../assets/img1.png";
import wiz from "../assets/badtome.jpeg";

export const playlistData = {
  myCollection: [
    {
      id: uuid(),
      artistName: "TonniPaul",
      albumArt: image,
      likesTotal: "99.9m likes",
      musicTitle: "Work out",
    },
    {
      id: uuid(),
      artistName: "Trace",
      albumArt: image1,
      likesTotal: "99.7m likes",
      musicTitle: "Double Sided",
    },
    {
      id: uuid(),
      artistName: "Paul",
      albumArt: image2,
      likesTotal: "2.7m likes",
      musicTitle: "Hello there",
    },
    {
      id: uuid(),
      artistName: "Kay",
      albumArt: image3,
      likesTotal: "2.7m likes",
      musicTitle: "Do good",
    },
  ],
};
