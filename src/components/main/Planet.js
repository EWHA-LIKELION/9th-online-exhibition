import React from 'react';
import styled from 'styled-components/macro';
import siteData from '../../static/siteData';
import SizedBox from '../SizedBox';
import planetBorder from '../../static/main-planet-border.png';

const Planet = ({ index, navigate }) => {
  const handlePlanetClicked = () => {
    navigate(`/detail/${index}`);
  };

  return (
    <PlanetContainer>
      <PlanetWrapper onClick={handlePlanetClicked}>
        <PlanetImage
          src={require(`../../static/planets/${siteData[index].name}.png`)}
        />
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
  height: 155px;
  background-image: url(${planetBorder});
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

const PlanetImage = styled.img`
  /* width: 121px;
  height: 121px; */
  width: 140px;
  height: 140px;
`;
