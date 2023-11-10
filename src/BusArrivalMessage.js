// BusArrivalMessage.js
import React, { useState } from "react";
import "./App.css";
import { Icon, IconSize } from "@channel.io/bezier-react";
import { ChannelBtnSmileFilledIcon } from "@channel.io/bezier-icons";
import { Banner, BannerVariant, Emoji } from "@channel.io/bezier-react";
import { CheckCircleFilledIcon, LightbulbIcon } from "@channel.io/bezier-icons";
import axios from "axios";

const BusArrivalMessage = () => {
  // Calculate the time until the bus arrives (replace this with your logic)

  const [bus1Sec, setBus1Sec] = useState(500);
  const [bus2Sec, setBus2Sec] = useState(1000);
  const [bus1Congestion, setBus1Congestion] = useState(3);
  const [bus2Congestion, setBus2Congestion] = useState(5);
  const bus1_minutes = Math.floor(bus1Sec / 60);
  const bus1_seconds = bus1Sec % 60;
  const bus1_number = 147;

  const bus2_minutes = Math.floor(bus2Sec / 60);
  const bus2_seconds = bus2Sec % 60;
  const bus2_number = 147;
  const iconStyle = {
    display: "inline-block",
    marginRight: "10px", // 조절 가능한 여백
    verticalAlign: "middle",
  };

  const messageContainerStyle = {
    marginBottom: "20px", // 조절 가능한 간격
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "left",
    marginRight: "20px", // 간격 조절
  };
  const emojiStyle = {
    marginLeft: "15px", // 이모지 왼쪽 여백 조절
  };

  setInterval(async () => {
    try {
      const response = await axios.get(
        "http://54.180.85.164:4000/traffic/bus/arrival/147"
      );
      const data = response.data;
      setBus1Sec(data[0].sec);
      setBus2Sec(data[1].sec);
      setBus1Congestion(data[0].congestion);
      setBus2Congestion(data[1].congestion);
    } catch (err) {
      console.log(err);
      console.log(err.data);
    }
  }, 1500);

  return (
    <div style={{ textAlign: "left", marginTop: "10px" }}>
      <div style={messageContainerStyle}>
        <Icon
          source={ChannelBtnSmileFilledIcon}
          color="bgtxt-green-normal"
          size={IconSize.XL}
          style={iconStyle}
        />
        <Banner
          variant={BannerVariant.Green}
          icon={CheckCircleFilledIcon}
          content={`${bus1_minutes}분 ${bus1_seconds}초 뒤 ${bus1_number}버스가 도착해요!`}
        />
        <div id="circle1"></div>
      </div>

      <div style={messageContainerStyle}>
        <Icon
          source={ChannelBtnSmileFilledIcon}
          color="bgtxt-green-normal"
          size={IconSize.XL}
          style={iconStyle}
        />
        <Banner
          variant={BannerVariant.Default}
          icon={LightbulbIcon}
          content={`${bus2_minutes}분 ${bus2_seconds}초 뒤 ${bus2_number}버스가 도착해요!`}
        />
        <div id="circle2"></div>
      </div>
    </div>
  );
};

export default BusArrivalMessage;
