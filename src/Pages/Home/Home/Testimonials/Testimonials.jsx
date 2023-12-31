import React, { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import {BiSolidQuoteLeft} from 'react-icons/bi'
// Import Swiper styles
import "swiper/css"; 
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const Testimonials = () => {
  const [reveiw, setReveiw] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReveiw(data));
  }, []);
  return (
    <section>
      <div>
        <SectionTitle
          heading={"TESTIMONIALS"}
          subHeading={"What Our Clients Say"}
        ></SectionTitle>
      </div>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
          {reveiw.map((item) => (
            <SwiperSlide key={item._id} item={item}>
              <div className="text-center my-8 p-8 lg:mx-24 flex flex-col items-center ">
                <Rating
                  className="py-4"
                  style={{ maxWidth: 250 }}
                  value={item.rating}
                  readOnly
                />
                <BiSolidQuoteLeft className="text-2xl lg:text-6xl  font-bold"></BiSolidQuoteLeft>
              <div className="p-4"> 
              <p className="text-justify ">{item.details}</p>
                <p className="text-golden my-2 lg:text-2xl uppercase">{item.name}</p>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
