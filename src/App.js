
import "./App.css";
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import styled from 'styled-components';
import busicon1 from './images/bus.png'
import busicon2 from './images/bus1.png'
import { AlphaSmoothCornersBox } from "@channel.io/bezier-react";
import axios from 'axios'
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
    const firstbusInitialPosition = new naver.maps.LatLng(37.505, 127.0371);
    const secondbusInitialPosition= new naver.maps.LatLng(37.505, 127.0371);
    // 이미지 아이콘 설정
    const bus = {
      url: busicon1, 
      size: new naver.maps.Size(20, 20),
      scaledSize: new naver.maps.Size(20, 20),
    };
    const bus2 = {
      url: busicon2, 
      size: new naver.maps.Size(20, 20),
      scaledSize: new naver.maps.Size(20, 20),
    };

    const marker = new naver.maps.Marker({
      map: map,
      position: firstbusInitialPosition,
      icon: bus,
    });

    const marker2 = new naver.maps.Marker({
      map: map,
      position: firstbusInitialPosition,
      icon: bus2,
    });

    // 위치 업데이트 함수 (예시로 1초마다 랜덤 위치로 업데이트)
    const updatePosition = async () => {
      try{
      const response = await axios.get('http://54.180.85.164:4000/traffic/bus/arrival/147');

      const newPosition = new naver.maps.LatLng( 
        response.data[0].pos.x, 
        response.data[0].pos.y
      );

      const newPosition2 = new naver.maps.LatLng( 
        response.data[1].pos.x, 
        response.data[1].pos.y
      );
      marker.setPosition(newPosition);
        marker2.setPosition(newPosition2);
      }
      catch(err){console.log(err)}
    };

    // 1초마다 위치 업데이트
    const intervalId = setInterval(updatePosition, 1000);

    // 컴포넌트 언마운트 시 clearInterval 호출
    return () => clearInterval(intervalId);
    /*const gsTowerMarker = new naver.maps.Marker({
      map: map,
      position: new naver.maps.LatLng(37.50185, 127.0371),
    });*/

    /*<AlphaSmoothCornersBox
      backgroundColor="bgtxt-absolute-white-normal"
      backgroundImage=""
      borderRadius="42%"
      margin={0}
      shadow={{
        blurRadius: 10,
        color: 'bg-black-dark',
        offsetX: 0,
        offsetY: 0,
        spreadRadius: 10
      }}
      style={{
        height: 200,
        width: 200
      }}
    />*/
  }, [])

  return (
    <Container>
      <Header />
      <MainContent>
        {/* 콘텐츠 추가 */}
        <div id="map" style={{width:'100%', height:'400px'}}></div>
      </MainContent>
      <Footer>
        {/*푸터 콘텐츠*/}
      </Footer>
    </Container>
  );
};

export default App;