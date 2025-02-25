import styled, { css } from "styled-components";

export const SHeader = styled.header<{ isNightMode: boolean }>`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  padding: calc(1vw + 6.4px) calc(12vw - 35px);
  background-color: ${(props) => props.theme.color.hoverText};
  color: ${(props) => props.theme.color.lightGray};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 4% 4%;

  display: flex;
  align-items: center;
  justify-content: space-between; 
  
  ${({ isNightMode }) =>
    isNightMode
      ? css`
          background-color:rgb(255, 255, 255);
          color: #f0f0f0;
          background-image:url('')
        `
      : css`
          background-color:rgb(105, 102, 102);
          color: #1a1a1a;
          background-image: url();
        `}
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
 

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.lightGray};
    display: flex;
    align-items: center;

    img {
      width: 40px; /* Размер картинки */
      height: 40px;
      margin-right: 10px; /* Отступ между картинкой и текстом */
    }

    &:hover {
      text-shadow: 0 0 8px ${(props) => props.theme.color.red}
    }
  }
`;

export const ThemeToggleButton = styled.button`
  margin-left: 20px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
export const SAgencyList = styled.a `
margin-left: 20px;

`
export const FavoritesButton = styled.div`
  a {
    text-decoration: none;
    padding: 10px 10px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.color.red};
    color: ${(props) => props.theme.color.gray};
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.color.bgc};
      
    }
  }
  
`;
