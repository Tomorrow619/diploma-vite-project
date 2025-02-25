import styled,{css} from "styled-components";

export const SCardPage = styled.div<{ isNightMode: boolean }>`
  background-image: url('/public/cardpage.webp');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  min-height: 100vh;

  p {
    margin-top: 20px;
    color:rgb(216, 16, 23);
    
  }

  h1 {
    color:rgb(213, 11, 38);
    font-weight: bold;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  }

  ${({ isNightMode }) =>
    isNightMode
      ? css`
          background-color:rgb(248, 248, 248);
          color:rgb(255, 255, 255);
          background-image: url('');
        `
      : css`
          background-color:rgb(44, 40, 40);
          color: #0d0d0d;
          background-image: url('');

        `} 



`;

export const CardPrice = styled.p`
  font-size: 1.5rem;
  color: #F39C12;
  margin-top: 10px;
`;
export const CardTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #ECF0F1;
`;

export const CardArea = styled.p`
  font-size: 1.2rem;
  color: #7F8C8D;
  margin-top: 10px;
`;

export const CardLocation = styled.p`
  font-size: 1.2rem;
  color: #7F8C8D;
  margin-top: 10px;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  color: #ECF0F1;
`;

export const CardImage = styled.img`
  width:400px;
 height: 400px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 30px;
`;

