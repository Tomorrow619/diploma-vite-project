import styled, { css } from "styled-components";

export const SAgencyList = styled.div<{ isNightMode: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  padding: 20px;
  ${({ isNightMode }) =>
    isNightMode
      ? css`
          background-color: rgb(230, 222, 222);
          color: rgb(255, 255, 255);
        `
      : css`
          background-color: rgb(105, 102, 102);
          color: #0d0d0d;
        `}
`;

export const SAgencyCard = styled.div<{ isNightMode: boolean }>`
  background: ${({ isNightMode }) => (isNightMode ? "#ffffff" : "#333")};
  color: ${({ isNightMode }) => (isNightMode ? "#000000" : "#ffffff")};
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 40px;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const SAgencyTitle = styled.h3<{ isNightMode: boolean }>`
  font-size: 18px;
  margin: 10px 0;
  color: ${({ isNightMode }) => (isNightMode ? "#000000" : "#ffffff")};
`;

export const SAgencyLogo = styled.img`
  width: 200px;
  height: 150px;
  margin-bottom: 12px;
`;

export const SAgencyPlaceholder = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #888;
  margin-bottom: 12px;
`;

export const SAgencyInfo = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0;
`;
