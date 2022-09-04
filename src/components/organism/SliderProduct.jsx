import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import pack1 from "../../assets/images/pack1.jpg"
import pack2 from "../../assets/images/pack2.jpg"
import pack3 from "../../assets/images/pack3.jpg"
import pack4 from "../../assets/images/pack4.jpg"
import pack5 from "../../assets/images/pack5.jpg"
import pack6 from "../../assets/images/pack6.jpg"
import pack7 from "../../assets/images/pack7.jpg"
import pack8 from "../../assets/images/pack8.jpg"
import pack9 from "../../assets/images/pack9.jpg"
import pack10 from "../../assets/images/pack10.jpg"

const SliderProduct = () => {
    const imageList = [pack1, pack2, pack3, pack4, pack5, pack6, pack7, pack8, pack9, pack10]
    const CardPreview = ({ image }) => {
        return (
            <div className="w-full h-40">
                <img src={image} className="rounded-xl" alt="productImage" />
            </div>
        )
    }
    return (
        <React.Fragment>
            <div className="w-full max-w-[1440px] mx-auto px-4 my-12 md:my-16 md:px-24">
                <Swiper
                    navigation={false}
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    autoplay={true}
                    modules={[Navigation]}
                    centeredSlides={true}
                    breakpoints={{
                        480: { slidesPerView: 1, spaceBetween: 10, centeredSlides: false },
                        640: { slidesPerView: 2, spaceBetween: 10, centeredSlides: false },
                        1024: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
                        1280: { slidesPerView: 3, spaceBetween: 30, centeredSlides: false },
                    }}
                    className="h-[300px] px-20 w-full gap-x-8">
                    {
                        imageList.map((item) => (
                            <SwiperSlide style={{ height: 'auto' }}>
                                <CardPreview image={item} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </React.Fragment>
    );
}

export default SliderProduct