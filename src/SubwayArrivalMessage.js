// BusArrivalMessage.js
import React, { useState } from "react";
import "./App.css";
import { Icon, IconSize } from "@channel.io/bezier-react";
import { ChannelBtnSmileFilledIcon } from "@channel.io/bezier-icons";
import { Banner, BannerVariant } from "@channel.io/bezier-react";
import { CheckCircleFilledIcon, LightbulbIcon } from "@channel.io/bezier-icons";
import axios from "axios";

const SubwayArrivalMessage = () => {
  // Calculate the time until the bus arrives (replace this with your logic)

  const [subway1Sec, setsubway1Sec] = useState({ message: "500" });
  const [subway2Sec, setsubway2Sec] = useState({ message: "1000" });

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

  setInterval(async () => {
    try {
      const response = await axios.get(
        "http://54.180.85.164:4000/traffic/subway"
      );
      const data = response.data;
      setsubway1Sec(data[0]);
      setsubway2Sec(data[1]);
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
          content={`${subway1Sec.message.split("방면")[0] + "방면"} 2호선이 ${
            subway1Sec.message.split("방면")[1]
          } 후에 도착해요!, 현재 ${subway1Sec.curStn}역에 있어요.`}
        />
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
          content={`${subway2Sec.message.split("방면")[0] + "방면"} 2호선이 ${
            subway2Sec.message.split("방면")[1]
          } 후에 도착해요!, 현재 ${subway2Sec.curStn}역에 있어요.`}
        />
      </div>
    </div>
  );
};

export default SubwayArrivalMessage;
