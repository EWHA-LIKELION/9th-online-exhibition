import styled from 'styled-components';
import {ReactComponent as Nav} from '../../static/navigate_button.svg'
import siteData from '../../static/siteData';

export const NavigateBar = ({currentIndex}) => {
  return (
    <Navigator>
      <NavigateImg src={require(`../../static/navigations/${siteData[currentIndex].name}.png`)} />
      <NavigateText>Touch Here to Visit Website</NavigateText>
      <NavigateButton>
        <Nav fill={siteData[currentIndex].navigateButtonColor}/>
      </NavigateButton>
    </Navigator>
  );
};
const Navigator = styled.div`
  position: relative;
`;
const NavigateImg = styled.img`
  position: fixed;
  bottom: 0;
  width:100%;
`;
const NavigateText = styled.span`
  position: fixed;
  width: 156px;
  left: 108px;
  bottom: 23px;

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
  left: 265px;
  bottom: 56px;
`;
