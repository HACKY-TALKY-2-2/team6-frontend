import React from 'react';
import styled from 'styled-components';
import logoImage from '../images/logo.png'
const HeaderWrapper = styled.header`
  font-size: 24px;
  text-align:center;
`;

const LogoImage = styled.img`
  max-width: 70%;
  height: auto;
  margin:0 auto;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoImage src={logoImage} alt="로고 이미지" />
    </HeaderWrapper>
  );
};

export default Header;
