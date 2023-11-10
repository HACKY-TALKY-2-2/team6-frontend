/* eslint-disable no-undef */
import logo from "./logo.svg";
import "./App.css";

function App() {
  var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10,
  };

  var map = new naver.maps.Map("map", mapOptions);

  return <div className="App"></div>;
}

export default App;
