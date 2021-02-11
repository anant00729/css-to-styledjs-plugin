import styled, { css } from "styled-components";

export const HomeWrapper = styled.div`
  /* width: 100%; */
  height: calc(100vh - 60px);
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    height: calc(100vh - 76px);
  }
`;

export const JSBox = styled.div`
  background-color: #ffe0c1;
  padding: 8px 8px 8px 8px;
`;

export const CssBox = styled.div`
  background-color: #8dc7d8;
  position: relative;
  padding: 8px 8px 8px 8px;
`;

export const ConvertButton = styled.div`
  border: 6px solid #fff;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  position: absolute;
  bottom: -40px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: #4b5563;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  /* -webkit-transform: scale(-1, -1);
  transform: scale(-1, -1); */
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);

  ${(props) =>
    props.isKicked
      ? css`
        @media (min-width: 768px) {
            bottom: unset;
            left: unset;
            margin: unset;
            right: -36px;
            top: 32px;
        }
          animation: wobble 2s 1, pulse 2s 1;
          @keyframes wobble {
            25% {
              transform: rotate(15deg);
            }
            50% {
              transform: rotate(-90deg);
            }
            75% {
              transform: rotate(60deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }

          @keyframes pulse {
            0% {
                background-color: #4b5563;
            }
            100% {
                background-color: #34d399;
            }
        `
      : ""}

  @media (min-width: 768px) {
    bottom: unset;
    left: unset;
    margin: unset;
    right: -36px;
    top: 32px;
  }
`;

export const ConvertButtonImg = styled.img`
  width: 56px;
  height: 56px;
  transform: rotate(180deg);
`;
