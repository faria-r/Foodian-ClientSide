import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
//import images for slideshow
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <div>
        <SectionTitle
        heading={"Order Online"}
        subHeading={"---From 11:00am to 10:00pm---"}
        ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-8"
      >
        <SwiperSlide><img src={slide1}/>
        <h3 className="text-4xl text-white shadow font-[Cinzel] -mt-16 text-center uppercase">Salads</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide2}/> <h3 className="text-4xl text-white shadow font-[Cinzel] -mt-16 text-center uppercase"> Pizzas</h3></SwiperSlide>
        <SwiperSlide><img src={slide3}/> <h3 className="text-4xl text-white shadow font-[Cinzel] -mt-16 text-center uppercase">Soups</h3></SwiperSlide>
        <SwiperSlide><img src={slide4}/> <h3 className="text-4xl text-white shadow font-[Cinzel] -mt-16 text-center uppercase">Dessert</h3></SwiperSlide>
        <SwiperSlide><img src={slide5}/> <h3 className="text-4xl text-white shadow font-[Cinzel] -mt-16 text-center uppercase">Salads</h3></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
