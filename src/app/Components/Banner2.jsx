// "use client";
// import React from "react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination,Autoplay } from "swiper/modules";
// import { bannerData } from "../../../public/Banner";
// import Image from "next/image";
// const Banner2 = () => {
//   return (
//     <Swiper
//       pagination={{
//         dynamicBullets: true,
//       }}
//       autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//       modules={[Pagination,Autoplay]}
//       className="mySwiper"
//     >
//       {bannerData.map((data, idx) => (
//         <SwiperSlide key={idx}>
//           <Image
//             src={data?.image}
//             alt={`Banner ${idx}`}
//             className="mx-auto h-full lg:h-107.5"
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default Banner2;
