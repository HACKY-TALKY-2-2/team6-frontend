import React from 'react';
import styled from 'styled-components';
import logoImage from '../images/logo.png'
const HeaderWrapper = styled.header`
  font-size: 24px;
  text-align: center;
  height: 10vh; 
  top: 0;
  left: 0;
  right: 0;
  width: 100%; 
  display: flex;
  justify-content: center;
  padding-bottom:5%;
`;

const LogoImage = styled.img`
  width: auto;
  height: 100%;
  max-width: 40%;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoImage src={logoImage} alt="로고 이미지" />
    </HeaderWrapper>
  );
};

export default Header;
