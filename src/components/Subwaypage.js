import React, { useEffect, useState } from "react";
import MainContent from "./MainContent";
import styled from "styled-components";
import subwayicon1 from "../images/subway.png";
import subwayicon2 from "../images/subway2.png";
import SubwayArrivalMessage from "../SubwayArrivalMessage";
import { AlphaSmoothCornersBox } from "@channel.io/bezier-react";
import { BezierProvider, LightFoundation } from "@channel.io/bezier-react";
import axios from "axios";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const SubwayPage = ({ naver }) => {
  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(37.501, 127.037),
      zoom: 17,
    };
    const map = new naver.maps.Map("map", mapOptions);
    //지하철아이콘 초기 위치
    const firstbusInitialPosition = new naver.maps.LatLng(37.505, 127.0371);
    const secondbusInitialPosition = new naver.maps.LatLng(37.505, 127.0371);
    // 이미지 아이콘 설정
    const subway = {
      url: subwayicon1,
      size: new naver.maps.Size(20, 20),
      scaledSize: new naver.maps.Size(20, 20),
    };
    const subway2 = {
      url: subwayicon2,
      size: new naver.maps.Size(20, 20),
      scaledSize: new naver.maps.Size(20, 20),
    };

    const marker = new naver.maps.Marker({
      map: map,
      position: firstbusInitialPosition,
      icon: subway,
    });

    const marker2 = new naver.maps.Marker({
      map: map,
      position: firstbusInitialPosition,
      icon: subway2,
    });

    // 위치 업데이트 함수 (예시로 1초마다 랜덤 위치로 업데이트)
    const updatePosition = async () => {
      try {
        const response = await axios.get(
          "http://54.180.85.164:4000/traffic/subway"
        );
        const data = response.data;
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    // 1초마다 위치 업데이트
    const intervalId = setInterval(updatePosition, 1000);

    // 컴포넌트 언마운트 시 clearInterval 호출
    return () => clearInterval(intervalId);
  }, []);

  return (
    <MainContent>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
      <div style={{ marginLeft: "20px", marginTop: "20px" }}>
        <BezierProvider foundation={LightFoundation}>
          <SubwayArrivalMessage />
        </BezierProvider>
      </div>
    </MainContent>
  );
};

export default SubwayPage;
