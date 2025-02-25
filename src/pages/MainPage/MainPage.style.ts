
import styled, {css} from "styled-components";
import { boolean } from "yup";

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
          background-image:url('')
        `
      : css`
          background-color:rgb(105, 102, 102);
          color: #1a1a1a;
          background-image: url();
        `}
        
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-shadow: ${({ isNightMode }) =>
      isNightMode ? "2px 2px 8px rgba(0, 0, 0, 0.8)" : "none"};
      
      
      
  }
  
`;
export const ThemeToggleButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007acc;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005fa3;
  }
  


`;
// export const SAbu = styled.div<{isNightMode:boolean}>`
// .Abu  {
// background-image:url(/src/assets/dom.jpg);
// height:100vh;
// background-repeat: no-repeat;
// width: 100vw;
// margin-left: 200px;
// background-size:cover;
// background-position:center;
// margin: 0;
// padding: 0;
// background-color: ${({ isNightMode }) =>
//       isNightMode ? "2px 2px 8px rgba(0, 0, 0, 0.4)" : "none"};

// }
// `
