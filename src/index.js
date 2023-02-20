import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Square from './Square';
import Triangle from './Triangle';
import Hexagon from './Hexagon';
import Circle from './Circle';
import Rectangle from './Rectangle';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Square/>
    <Triangle />
    <Hexagon />
    <Circle />
    <Rectangle />
  </React.StrictMode>
);
reportWebVitals();