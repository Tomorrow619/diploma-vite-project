import styled from "styled-components";

export const SHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  padding: calc(1vw + 6.4px) calc(12vw - 35px);
  background-color: ${(props) => props.theme.color.lightGray};
  color: ${(props) => props.theme.color.lightGray};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 4% 4%;

  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const FavoritesButton = styled.div`
  a {
    text-decoration: none;
    padding: 10px 10px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.color.blue};
    color: ${(props) => props.theme.color.lightGray};
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.color.blue};
      
    }
  }
`;
