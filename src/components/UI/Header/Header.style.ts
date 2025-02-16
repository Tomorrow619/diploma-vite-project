import styled from "styled-components";

export const SHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  padding: calc(1vw + 6.4px) calc(12vw - 35px);
  background-color: ${({ theme }) => theme.colors.lightgray};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

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
    color: ${({ theme }) => theme.colors.white};
    font-family: "Courier New", Courier, monospace;
    display: flex;
    align-items: center;

    img {
      width: 40px; /* Размер картинки */
      height: 40px;
      margin-right: 10px; /* Отступ между картинкой и текстом */
    }

    &:hover {
      text-shadow: 0 0 8px ${({ theme }) => theme.colors.primary};
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
    padding: 10px 15px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
