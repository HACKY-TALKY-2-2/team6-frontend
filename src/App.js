
import "./App.css";
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import BusPage from "./components/Buspage";
import SubwayPage from "./components/Subwaypage";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const App = ({ naver }) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Header />
          <Routes>
            <Route path="/bus" element={<BusPage naver={naver}/>}></Route>
            <Route path="/subway" element={<SubwayPage naver={naver}/>}></Route>
          </Routes>
          <Footer>
          </Footer>
        </Container>
    </BrowserRouter>
    </div>
  );
};

export default App;