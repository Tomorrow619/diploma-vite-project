import styled,{css} from "styled-components";

export const SListing = styled.div<{ isNightMode: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
  
  
`;

export const ListingCardContainer = styled.div<{ isNightMode: boolean }>`
background: white;
  border-radius: 15px;
  border: 1px solid #ddd;
  padding: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.1s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
background-image: url();
  &:hover {
    transform: scale(1.05);
  }
  ${({ isNightMode }) =>
    isNightMode
      ? css`
          background-color:rgb(255, 255, 255);
          color:rgb(255, 255, 255);
          background-image: url('');
        `
      : css`
          background-color:rgb(18, 17, 17);
          color: #0d0d0d;
          background-image: url('');

        `} 
`;

export const ListingImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const ListingTitle = styled.h3<{ isNightMode: boolean }>`
 font-size: 16px;
  font-weight: 600;
  color: ${({ isNightMode }) => (isNightMode ? "#333" : "#ffffff")};
  margin-bottom: 8px;
  text-align: left;
  width: 100%;
`;

export const ListingPrice = styled.p<{ isNightMode: boolean }>`
  font-size: 24px;
  font-weight: bold;
  color: ${({ isNightMode }) => (isNightMode ? "red" : "#ffffff")};
  margin-bottom: 8px;
  text-align: left;
  width: 100%;
`;


export const FavoriteButton = styled.button<{ isFavorite: boolean }>`
  position: absolute;
  top: 15px;
  right: 15px;
  /* background-color: ${({ isFavorite }) => (isFavorite ? "#FF4040" : "rgba(255, 255, 255, 0.8)")};
  color: ${({ isFavorite }) => (isFavorite ? "#fff" : "#FF4040")}; */
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &::before {
    content: ${({ isFavorite }) => (isFavorite ? '"❤️"' : '"♡"')};
  }

  &:hover {
    transform: scale(1.1);
    background-color: ${({ isFavorite }) => (isFavorite ? "#FF5757" : "#fff")};
    color: red;
  }

  &:focus {
    outline: none;
  }
`;

export const ErrorText = styled.p`
  color: #e74c3c;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;

`;

export const PaginationButton = styled.button<{ isActive?: boolean; isNavButton?: boolean }>`
  background-color: ${({ isActive, isNavButton }) => 
    isNavButton ? "rgb(241, 52, 10)" : isActive ? "rgb(241, 52, 10)" : "#fff"}; /* Меняем цвет у кнопок */
  color: ${({ isActive, isNavButton }) => 
    isNavButton ? "#fff" : isActive ? "#fff" : "#333"};
  border: 3px solid #ddd;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ isActive, isNavButton }) => 
      isNavButton ? "rgb(241, 52, 10)" : isActive ? "rgb(241, 52, 10)" : "#f1f1f1"};
    color: #fff;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #f1f1f1;
    color: #aaa;
  }
`;


export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  .loader {
    border: 5px solid #f3f3f3;
    border-top: 5px solid #00ffcc;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;