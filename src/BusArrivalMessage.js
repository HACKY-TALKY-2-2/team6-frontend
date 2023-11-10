// BusArrivalMessage.js
import React, { useState } from "react";
import "./App.css";
import { Icon, IconSize } from "@channel.io/bezier-react";
import { ChannelBtnSmileFilledIcon } from "@channel.io/bezier-icons";
import { Banner, BannerVariant } from "@channel.io/bezier-react";
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

  // Function to determine circle styles based on congestion level
  const getCircleStyles = (congestion) => {
    const baseStyle = {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      marginLeft: "10px",
    };

    switch (congestion) {
      case 3:
        return { ...baseStyle, backgroundColor: "green" };
      case 4:
        return { ...baseStyle, backgroundColor: "yellow" };
      case 5:
        return { ...baseStyle, backgroundColor: "orange" };
      case 6:
        return { ...baseStyle, backgroundColor: "red" };
      default:
        return baseStyle;
    }
  };

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
    marginLeft: "20px", // 간격 조절
  };
  const renderCircles = (congestion) => {
    return [<div key={0} style={getCircleStyles(congestion)} />];
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
        {renderCircles(bus1Congestion)}
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
        {renderCircles(bus2Congestion)}
      </div>
    </div>
  );
};

export default BusArrivalMessage;
