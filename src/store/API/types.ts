// // src/types.ts

// export interface Geography {
//     lat: number;
//     lng: number;
//   }
  
//   export interface CoverPhoto {
//     id: number;
//     url: string;
//     title: string;
//   }
  
//   export interface Agency {
//     id: number;
//     name: string;
//     externalID: string;
//   }
  
//   export interface Property {
//     id: number;
//     title: string;
//     description: string;
//     price: number;
//     purpose: string;
//     area: number;
//     location: string[];
//     coverPhoto: CoverPhoto;
//     agency: Agency;
//     phoneNumber: string;
//   }
  
//   export interface ApiResponse {
//     hits: Property[];
//   }
  // Тип для фото недвижимости
export interface Photo {
  id: number;
  externalID: string;
  title: string;
  url: string;
  orderIndex: number;
  nimaScore: number;
}

// Тип для недвижимости (Property)
export interface Property {
  id: number;
  externalID: string;
  title: string;
  description: string;
  price: number;
  rentFrequency: string | null;
  rooms: number;
  baths: number;
  area: number;
  coverPhoto: Photo;
  photos: Photo[];
}

// Тип для ответа списка недвижимости
export interface PropertyListResponse {
  hits: Property[];
}

// Тип для деталей недвижимости
export interface PropertyDetailsResponse extends Property {}
