import { v4 as uuid } from "uuid";
import image from "../assets/collection.svg";

export const playlistData = {
  myCollection: [
    {
      id: uuid(),
      artistName: "TonniPaul",
      albumArt: "./assets/img5.png",
      likesTotal: "99.9m likes",
      musicTitle: "Work out",
    },
    {
      id: uuid(),
      artistName: "Trace",
      albumArt: "./assets/img1.png",
      likesTotal: "3.2m likes",
      musicTitle: "Double Sided",
    },
    {
      id: uuid(),
      artistName: "Paul",
      albumArt: "./assets/img3.png",
      likesTotal: "67.9m likes",
      musicTitle: "Hello there",
    },
    {
      id: uuid(),
      artistName: "Kay",
      albumArt: "./assets/img6.png",
      likesTotal: "2.7m likes",
      musicTitle: "Do good",
    },
  ],
};
