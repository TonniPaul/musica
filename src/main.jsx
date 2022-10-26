import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import { SearchProvider } from './Context/SeachContext';
import { LikedProvider } from "./Context/LikedContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SearchProvider>
    <LikedProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LikedProvider>
  </SearchProvider>
);
