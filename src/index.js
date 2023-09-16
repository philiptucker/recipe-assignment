import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, AddRecipe} from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
/*
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/add" element={<AddRecipe />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add" element={<AddRecipe />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
