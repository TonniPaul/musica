import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import { SearchProvider } from './Context/SeachContext';
import { LikedProvider } from "./Context/LikedContext";
import { ImageProvider } from "./Context/ImageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SearchProvider>
    <ImageProvider>
      <LikedProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LikedProvider>
    </ImageProvider>
  </SearchProvider>
);





