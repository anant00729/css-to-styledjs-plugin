import styled, { css } from "styled-components";

export const Snackbar = styled.div`
  /* Hidden by default. Visible on click */
  min-width: 290px;
  /* Set a default minimum width */
  /* margin: 0 auto; */
  /* Divide value of min-width by 2 */
  background-color: transparent; /* Black background color */

  text-align: center; /* Centered text */
  border-radius: 1rem; /* Rounded borders */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  transform: translateX(-50%);
  bottom: 30px; /* 30px from the bottom */
  ${(p) =>
    p.isVisible
      ? css`
          visibility: visible; /* Show the snackbar */
          -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
          animation: fadein 0.5s, fadeout 0.5s 2.5s;
        `
      : css`
          visibility: hidden;
        `}
`;

export const SnackbarContainer = styled.div`
  width: 100%;
  background-color: #f3f4f6;
  border: 4px solid #6b7280;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const AlertLabel = styled.label`
  font-size: 18px;
  margin-left: 12px;
  font-weight: 600;
  color: #4b5563; /* White text color */
`;

export const AlertLogo = styled.img`
  width: 48px;
  height: 48px;
  margin-left: 12px;
  @media (min-width: 768px) {
    margin-left: unset;
  }
`;
