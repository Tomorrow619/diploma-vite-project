
import styled,{css} from "styled-components";

export const SMainPage = styled.div<{ isNightMode: boolean }>`
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  transition: background-color 0.3s, color 0.3s;
 
  ${({ isNightMode }) =>
    isNightMode
      ? css`
          background-color:rgb(255, 255, 255);
          color: #f0f0f0;
          background-image: url('/public/PropertyMain.jpg');
        `
      : css`
          background-color: #ffffff;
          color: #1a1a1a;
          background-image: url('/public/themeicon.jpg');
        `}

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-shadow: ${({ isNightMode }) =>
      isNightMode ? "2px 2px 8px rgba(0, 0, 0, 0.8)" : "none"};
  }
`;