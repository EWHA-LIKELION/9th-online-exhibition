import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as PlanetImage } from '../../static/planet.svg';
import siteData from '../../static/siteData';
import SizedBox from '../SizedBox';

const Planet = ({ index, navigate }) => {
  const handlePlanetClicked = () => {
    navigate(`/detail/${index}`);
  };

  return (
    <PlanetContainer>
      <PlanetWrapper onClick={handlePlanetClicked}>
        <PlanetImage />
      </PlanetWrapper>
      <SizedBox height={19} />
      <Title>{siteData[index].title}</Title>
      <SizedBox height={2} />
      <Name>{siteData[index].name}</Name>
    </PlanetContainer>
  );
};

export default Planet;

const PlanetContainer = styled.div`
  width: 155px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:nth-child(2n) {
    align-self: flex-end;
  }
  &:nth-child(n + 2) {
    margin-top: -66px;
  }
`;

const PlanetWrapper = styled.div`
  width: 155px;
  background-image: url(${process.env.PUBLIC_URL + 'main-planet-border.png'});
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: rotate_image 20s linear infinite;
  transform-origin: 50% 50%;
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
