import styled, { css } from "styled-components";

export const SCardPage = styled.div<{ isNightMode: boolean }>`
  background-image: url('/public/cardpage.webp');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;

  ${({ isNightMode }) =>
    isNightMode
      ? css`
          background-color: #2C3E50;
          color: #ECF0F1;
        `
      : css`
          background-color:rgb(37, 39, 40);
          color: #2C3E50;
        `}
`;

export const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

export const CardTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #D35400;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
`;

export const CardImage = styled.img`
  width: 60%;
  max-height: 350px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
`;

export const CardPrice = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: #E74C3C;
  margin: 10px 0;
`;

export const CardLocation = styled.p`
  font-size: 1.2rem;
  color: #7F8C8D;
  margin: 5px 0;
`;

export const CardArea = styled.p`
  font-size: 1.2rem;
  color: #34495E;
  margin: 5px 0;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  font-weight: bold;
  color: #ECF0F1;
`;
