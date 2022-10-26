import { createContext, useContext, useState } from "react";

const LikedContext = createContext();

const { Provider } = LikedContext;

const LikedProvider = ({ children }) => {
  const [like, setLike] = useState(false);
  const toggleLike = () => {
    // toggleLike to opposite
    setLike(!like);
  };

  return (
    <Provider value={{ like, setLike, toggleLike }}> {children} </Provider>
  );
};

// created a custom hook that would be used to update search

const useLike = () => useContext(LikedContext);

export { useLike, LikedProvider };
