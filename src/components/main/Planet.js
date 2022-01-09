import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as PlanetImage } from '../../static/planet.svg';
import SizedBox from '../SizedBox';

const Planet = ({ index }) => {
  return (
    <PlanetContainer>
      <PlanetWrapper>
        <PlanetImage />
      </PlanetWrapper>
      <SizedBox height={19} />
      <Title>Website Title</Title>
      <SizedBox height={2} />

      <Name>이화연</Name>
    </PlanetContainer>
  );
};

export default Planet;

const PlanetContainer = styled.div`
  width: 155px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlanetWrapper = styled.div`
  width: 155px;
  background-image: url(${process.env.PUBLIC_URL + 'main-planet-border.png'});
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  font-size: 11px;
  line-height: 15px;
  color: rgba(255, 255, 255, 0.9);
`;

const Name = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: rgba(255, 255, 255, 0.9);
`;
