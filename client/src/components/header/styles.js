import styled from "styled-components";

export const HeaderWrapper = styled.div`
  /* width: 100%; */
  background-color: #f3f4f6;

  /* @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 1200px) {
    width: 1050px;
  } */
  border-bottom: rgba(209, 213, 219, 1);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  /* @media (min-width: 768px) {
    justify-content: flex-start;
  } */
`;

export const AppLogoImg = styled.img`
  width: 40px;
  width: 40px;
  border: 2px solid #f3f4f6;
  border-radius: 50%;
  padding: 4px;
  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const AppNameLabel = styled.label`
  /* font-family: "Abril Fatface", cursive; */
  /* font-family: "Satisfy", cursive; */
  font-family: "Alfa Slab One", cursive;
  font-size: 24px;
  color: #e8c096;
  -webkit-text-stroke-width: 0.2px;
  letter-spacing: 1px;
  -webkit-text-stroke-color: black;
  text-shadow: 2px 2px #374151;
  cursor: pointer;
  transition: text-shadow 0.1s;

  &:hover {
    text-shadow: 3px 3px #374151;
  }

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;
