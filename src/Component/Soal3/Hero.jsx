import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

export const Hero = () => {
    return (      
        <>
            <Swiper style={{
                      "--swiper-navigation-color": "#FFFFFF",
                      "--swiper-navigation-size": "20px",
                    }} navigation={true} modules={[Navigation]} className="h-64 lg:h-96">
                <SwiperSlide>
                    <div className="mt-16 px-12 md:mt-24 lg:mt-36">
                        <h1 className="text-gray-100 text-xl text-center font-semibold lg:text-2xl">Carousel Title 1</h1>
                        <p className="mt-1 text-gray-200 text-sm text-center lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia porro fugiat repellendus quo eos similique!</p>
                    </div>
                    <div className="absolute top-0 -z-30">
                        <img className="brightness-75" src="/img/1.jpg" alt="Carousel 1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-16 px-12 md:mt-24 lg:mt-36">
                        <h1 className="text-gray-100 text-xl text-center font-semibold lg:text-2xl">Carousel Title 2</h1>
                        <p className="mt-1 text-gray-200 text-sm text-center lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia porro fugiat repellendus quo eos similique!</p>
                    </div>
                    <div className="absolute top-0 -z-30">
                        <img className="brightness-75" src="/img/2.jpg" alt="Carousel 2" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-16 px-12 md:mt-24 lg:mt-36">
                        <h1 className="text-gray-100 text-xl text-center font-semibold lg:text-2xl">Carousel Title 3</h1>
                        <p className="mt-1 text-gray-200 text-sm text-center lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia porro fugiat repellendus quo eos similique!</p>
                    </div>
                    <div className="absolute top-0 -z-30">
                        <img className="brightness-75" src="/img/3.jpg" alt="Carousel 3" />
                    </div>
                </SwiperSlide>
            </Swiper>    
        </>
    )
}