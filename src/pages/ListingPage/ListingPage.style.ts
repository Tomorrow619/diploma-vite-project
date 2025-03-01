// Listing.style.ts
// import styled from "styled-components";

// export const SListing = styled.div<{ isNightMode: boolean }>`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 20px;
//   background-color: ${({ isNightMode }) => (isNightMode ? "#333" : "#fff")};
//   padding: 20px;
// `;

// export const ListingCardContainer = styled.div<{ isNightMode: boolean }>`
//   background-color: ${({ isNightMode }) => (isNightMode ? "#444" : "#f9f9f9")};
//   padding: 15px;
//   border-radius: 10px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   cursor: pointer;
//   transition: transform 0.2s;
//   &:hover {
//     transform: scale(1.02);
//   }
// `;

// export const ListingImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
//   border-radius: 5px;
// `;

// export const ListingTitle = styled.h2`
//   font-size: 1.2rem;
//   margin: 10px 0;
// `;

// export const ListingPrice = styled.p`
//   font-size: 1rem;
//   font-weight: bold;
// `;

// export const FavoriteButton = styled.button<{ isFavorite: boolean }>`
//   background-color: ${({ isFavorite }) => (isFavorite ? "#ff4d4d" : "#ccc")};
//   border: none;
//   border-radius: 50%;
//   width: 30px;
//   height: 30px;
//   cursor: pointer;
// `;

// export const PaginationContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 20px 0;
// `;

// export const PaginationButton = styled.button<{ isActive?: boolean }>`
//   background-color: ${({ isActive }) => (isActive ? "#333" : "#fff")};
//   color: ${({ isActive }) => (isActive ? "#fff" : "#333")};
//   border: 1px solid #333;
//   margin: 0 5px;
//   padding: 5px 10px;
//   cursor: pointer;
// `;

// export const Loader = styled.div`
//   text-align: center;
//   padding: 20px;
// `;

// export const ErrorText = styled.div`
//   text-align: center;
//   color: red;
//   padding: 20px;
// `;
