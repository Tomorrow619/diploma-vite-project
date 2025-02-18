import styled from "styled-components";

export const SListing = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
  
  
`;

export const ListingCardContainer = styled.div`
background: white;
  border-radius: 10px;
  border: 1px solid #ddd;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
background-image: url();
  &:hover {
    transform: scale(1.05);
  }
`;

export const ListingImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const ListingTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
`;

export const ListingPrice = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
  text-align: center;
`;

export const FavoriteButton = styled.button<{ isFavorite: boolean }>`
  background-color: ${({ isFavorite }) => (isFavorite ? "#FF4040" : "#fff")};
  color: ${({ isFavorite }) => (isFavorite ? "#fff" : "#FF4040")};
  border: 2px solid #FF4040;
  border-radius: 50px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  &::before {
    content: "♡"; /* Сердечко */
    font-size: 20px;
    margin-right: 8px;
  }

  &:hover {
    transform: scale(1.1);
    background-color: ${({ isFavorite }) => (isFavorite ? "#FF5757" : "#fff")};
    color: #fff;
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

export const PaginationButton = styled.button<{ isActive?: boolean }>`
  /* background-color: ${({ isActive }) => (isActive ? "#00FFCC" : "#fff")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#333")}; */
  border: 3px solid #ddd;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgb(255, 255, 255);
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