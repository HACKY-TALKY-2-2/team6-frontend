// src/components/MainContent.js

import React from 'react';
import styled from 'styled-components';

const MainContentWrapper = styled.div`
  width: 80%;
  max-width: 600px;
  text-align: center;
`;

const MainContent = ({ children }) => {
  return <MainContentWrapper>{children}</MainContentWrapper>;
};

export default MainContent;
