import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import styled from "styled-components";
import bus from "./images/bus.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const App = ({ naver }) => {
  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(37.501, 127.037),
      zoom: 17,
    };
    const map = new naver.maps.Map("map", mapOptions);
    //버스아이콘 초기 위치
    const initialPosition = new naver.maps.LatLng(37.50185, 127.0371);

    // 이미지 아이콘 설정
    const icon = {
      url: bus,
      size: new naver.maps.Size(20, 20),
      scaledSize: new naver.maps.Size(20, 20),
    };

    const marker = new naver.maps.Marker({
      map: map,
      position: initialPosition,
      icon: icon,
    });

    // 위치 업데이트 함수 (예시로 1초마다 랜덤 위치로 업데이트)
    const updatePosition = () => {
      const newPosition = new naver.maps.LatLng(
        initialPosition.lat() + (Math.random() - 0.5) * 0.01,
        initialPosition.lng() + (Math.random() - 0.5) * 0.01
      );
      marker.setPosition(newPosition);
    };

    // 1초마다 위치 업데이트
    const intervalId = setInterval(updatePosition, 1000);

    // 컴포넌트 언마운트 시 clearInterval 호출
    return () => clearInterval(intervalId);
    /*const gsTowerMarker = new naver.maps.Marker({
      map: map,
      position: new naver.maps.LatLng(37.50185, 127.0371),
    });*/
  }, []);

  return (
    <Container>
      <Header />
      <MainContent>
        {/* 콘텐츠 추가 */}
        <div id="map" style={{ width: "100%", height: "400px" }}></div>
      </MainContent>
      <Footer>{/*푸터 콘텐츠*/}</Footer>
    </Container>
  );
};

export default App;
