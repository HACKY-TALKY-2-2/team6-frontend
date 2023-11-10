/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/Footer";
import Header from "./components/Header";
var mapOptions = {
  center: new naver.maps.LatLng(37.501, 127.037),
  zoom: 17,
};

var map = new naver.maps.Map("map", mapOptions);
const gsTowerMarker = new naver.maps.Marker({
  map: map,
  position: new naver.maps.LatLng(37.50185, 127.0371),
});
const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById("footer"));
footer.render(<Footer/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
