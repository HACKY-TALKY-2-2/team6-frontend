/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BusArrivalMessage from "./BusArrivalMessage";
import { BezierProvider, LightFoundation } from "@channel.io/bezier-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App naver={naver} />
    <div style={{ marginLeft: "20px", marginTop: "20px" }}>
   <BezierProvider foundation={LightFoundation}>
    <BusArrivalMessage />
   </BezierProvider>
  </div>
  </React.StrictMode>
);

reportWebVitals();
