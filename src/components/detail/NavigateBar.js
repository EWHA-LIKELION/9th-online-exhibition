import styled from 'styled-components';
import { ReactComponent as Nav } from '../../static/navigate_button.svg';
import siteData from '../../static/siteData';

export const NavigateBar = ({ currentIndex }) => {
  const handleNavigatorPressed = () => {
    window.location.href = siteData[currentIndex].link;
  };
  return (
    <Navigator onClick={handleNavigatorPressed}>
      <NavigateImg
        src={require(`../../static/navigations/${siteData[currentIndex].name}.png`)}
      />

      <NavigateText>Touch Here{'\n'}to Visit Website</NavigateText>
      <NavigateButton>
        <Nav fill={siteData[currentIndex].navigateButtonColor} />
      </NavigateButton>
    </Navigator>
  );
};
const Navigator = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavigateImg = styled.img`
  width: 425px;
  object-fit: contain;
  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`;
const NavigateText = styled.div`
  position: fixed;
  white-space: pre-wrap;
  z-index: 10;
  bottom: 20px;
  font-family: Manrope;
  font-weight: 600;
  font-size: 21px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  opacity: 0.8;
`;
const NavigateButton = styled.div`
  position: fixed;
  bottom: 57.5px;
  right: ${(window.innerWidth - 425) / 2 + 62.5}px;
  @media only screen and (max-width: 426px) {
    /* z-index: 12; */
    bottom: ${window.innerWidth / 6.8 - 5}px;
    right: ${window.innerWidth / 6.8}px;
  }
`;
