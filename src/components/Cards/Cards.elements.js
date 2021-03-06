import { GiRocket } from 'react-icons/gi';
import { Link } from 'react-scroll';
import styled from 'styled-components';

export const CardsSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardsHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const Card = styled.div`
  background: ${({isChosen}) => (isChosen ? '#00FF7F' : '#242424')};
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  transition: 0.25s ease-out;
  cursor: pointer;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: ${({isChosen}) => (isChosen ? 'none' : 'scale(1.06)')};
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const CardIcon = styled.div`
  margin: 24px 0;
`;

export const GiRocketStyled = styled(GiRocket)`
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
`;

export const CardPlan = styled.h3`
  color: ${({isChosen}) => (isChosen ? '#242424' : 'none')};
  margin-bottom: 5px;
  font-size: 24px;
`;

export const CardCost = styled.h4`
  color: ${({isChosen}) => (isChosen ? '#242424' : '')};
  font-size: 40px;
`;

export const CardLength = styled.p`
  color: ${({isChosen}) => (isChosen ? '#242424' : '')};
  font-size: 14px;
  margin-bottom: 24px;
`;

export const CardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const CardFeature = styled.li`
  color: ${({isChosen}) => (isChosen ? '#242424' : '')};
  margin-bottom: 10px;
`;

export const CardBtnLink = styled(Link)`

`;

export const NeonText = styled.p`
  color: ${({isChosen}) => (isChosen ? '#242424' : '#4B59F7')};
  text-shadow: 0 0 3vw #0467FB;

  
  animation: neon 1s ease infinite;
  -moz-animation: neon 1s ease infinite;
  -webkit-animation: neon 1s ease infinite;
`;
