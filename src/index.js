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
    <Square s="6"/>
    <Triangle b="4" h="5"/>
    <Hexagon s="6"/>
    <Circle r="8"/>
    <Rectangle b="6" l="10"/>
  </React.StrictMode>
);
reportWebVitals();