// import { useGetPropertyDetailQuery } from "../../store/api/bayutAPI";
// import { Property } from "../store/types.ts"; 

// const PropertyDetails = ({ propertyId }: { propertyId: string }) => {
//   const { data, error, isLoading } = useGetPropertyDetailsQuery(propertyId);

//   if (isLoading) return <p>Загрузка...</p>;
//   if (error) return <p>Ошибка при загрузке данных!</p>;

//   return (
//     <div>
//       <h2>{data?.title}</h2>
//       <p>{data?.description}</p>
//       <p>Цена: {data?.price} AED</p>
//       {data?.coverPhoto && <img src={data.coverPhoto.url} alt={data.title} width="300" />}
//     </div>
//   );
// };

// export default PropertyDetails;
