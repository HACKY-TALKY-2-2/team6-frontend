import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const App = ({ naver }) => {
  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(37.501, 127.037),
      zoom: 17,
    };
    const map = new naver.maps.Map("map", mapOptions);
    const gsTowerMarker = new naver.maps.Marker({
      map: map,
      position: new naver.maps.LatLng(37.50185, 127.0371),
    });

  }, [])

  return (
    <Container>
      <Header />
      <MainContent>
        {/* 콘텐츠 추가 */}
        <p>메인 콘텐츠</p>
        <div id="map" style={{width:'100%', height:'400px'}}></div>
      </MainContent>
      <Footer>
        {/*푸터 콘텐츠*/}
      </Footer>
    </Container>
  );
};

export default App;