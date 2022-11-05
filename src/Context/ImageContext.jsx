import { createContext, useContext, useState } from "react";

const ImageContext = createContext();

const { Provider } = ImageContext;

const ImageProvider = ({ children }) => {
  const [albumImage, setAlbumImage] = useState("");

  return (
    <Provider value={{ albumImage, setAlbumImage }}> {children} </Provider>
  );
};

// created a custom hook that would be used to update image

const useImage = () => useContext(ImageContext);

export { useImage, ImageProvider };
