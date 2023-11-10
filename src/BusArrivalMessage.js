// BusArrivalMessage.js
import React from "react";
import { Icon, IconSize } from "@channel.io/bezier-react";
import { ChannelBtnSmileFilledIcon } from "@channel.io/bezier-icons";
import { Banner, BannerVariant } from "@channel.io/bezier-react";
import { CheckCircleFilledIcon, LightbulbIcon } from "@channel.io/bezier-icons";

const BusArrivalMessage = () => {
  // Calculate the time until the bus arrives (replace this with your logic)
  const bus1_minutes = 5;
  const bus1_seconds = 30;
  const bus1_number = 242;

  const bus2_minutes = 10;
  const bus2_seconds = 20;
  const bus2_number = 6411;

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
      </div>
    </div>
  );
};

export default BusArrivalMessage;
