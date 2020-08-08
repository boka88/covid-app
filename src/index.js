import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div style={{
      height: "150px",
      width: "100%",
      color: "rgba(53,212,193,1)",
      marginBottom: "-20px", 
      paddingBottom: "0px"}}>
    <h1 style={{marginLeft: "6%", marginBottom: "0px", paddingBottom: "0px", paddingTop: "10px"}}>
        APLIKACIJA ZA PRACENJE BROJA MRTVIH I RANJENIH OD VIRUSA UZROKOVANOG 5G ANTENAMA
    </h1>
      </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
