import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 1200px) {
    width: 1050px;
  }
`;

export const AppTextArea = styled.textarea`
  height: 100%;
  padding: 10px 16px;
  background: #f3f4f6;
  border: 0 solid transparent;
  border-radius: 4px;
  font-size: 16px;
  outline-color: transparent;
  font-weight: 600;
  /* color: rgb(55, 65, 81); */
  margin-top: 14px;
  &:focus {
    outline-width: 0;
  }
`;
