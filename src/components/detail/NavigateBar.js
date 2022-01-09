import styled from 'styled-components';
import navigate from '../../static/navigate.svg';
import navigateButton from '../../static/navigate_button.svg';
export const NavigateBar = () => {
  return (
    <Navigator>
      <NavigateImg src={navigate} />
      <NavigateText>Touch Here to Visit Website</NavigateText>
      <NavigateButton src={navigateButton} />
    </Navigator>
  );
};
const Navigator = styled.div`
  position: relative;
`;
const NavigateImg = styled.img`
  position: fixed;
  bottom: 0;
`;
const NavigateText = styled.span`
  position: fixed;
  width: 156px;
  left: 108px;
  top: 691px;

  font-family: Manrope;
  font-weight: 600;
  font-size: 21px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  opacity: 0.8;
`;
const NavigateButton = styled.img`
  position: fixed;
  left: 265px;
  top: 650px;
`;
