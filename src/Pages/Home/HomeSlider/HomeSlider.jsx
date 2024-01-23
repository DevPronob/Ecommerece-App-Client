import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './HomeSlider.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import bg1 from '../../../assets/images/banner1.jpg'
import bg2 from '../../../assets/images/banner2.jpg'
import bg3 from '../../../assets/images/banner3.jpg'

const HomeSlider = () => {
    const items =[
        {
            name:"BODY PARTS ",
            name2:"FOR ANY VEHICLE",
            bg:bg1,
            // dec:"a dynamic and ever-evolving form of self-expression that goes beyond just clothing; it encompasses a wide range of styles, trends, and aesthetics. It's a reflection of our culture, identity, and personal tastes. Fashion enables individuals to convey their personality and creativity,"
        },
        {
            name:"VARIETY OF",
            name2:"NEW TYRE",
            bg:bg2,
            // dec:"Events are organized occasions or occurrences that bring people together for a specific purpose, such as entertainment, education, networking, celebration, or raising awareness. Events can vary widely in size, scale"
        },
        {
            name:"PROVIDE TOOL",
            name2:"FOR CAR",
            bg:bg3,
            // dec:"Animal photography is a popular and fascinating genre of photography that focuses on capturing images of animals in their natural habitat, zoos, sanctuaries, or domestic environments."
        },
    ]
    return (
        <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiperr"
      >
        {
            items.map(ite =>{
               return <SwiperSlide>
                   <div
style={{
  width: '100%',
  height: '100%',
  backgroundImage: `url(${ite.bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}
 className='slider-container'>
<div className='slider-content text-white'>
<h1>{ite.name}</h1>
<h3>{ite.name2}</h3>
<button type="button" class=" mt-3 text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5 inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
<svg class="w-4 h-4 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="bitcoin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.1-111 248-248 248S8 392.1 8 256 119 8 256 8s248 111 248 248zm-141.7-35.33c4.937-32.1-20.19-50.74-54.55-62.57l11.15-44.7-27.21-6.781-10.85 43.52c-7.154-1.783-14.5-3.464-21.8-5.13l10.93-43.81-27.2-6.781-11.15 44.69c-5.922-1.349-11.73-2.682-17.38-4.084l.031-.14-37.53-9.37-7.239 29.06s20.19 4.627 19.76 4.913c11.02 2.751 13.01 10.04 12.68 15.82l-12.7 50.92c.76 .194 1.744 .473 2.829 .907-.907-.225-1.876-.473-2.876-.713l-17.8 71.34c-1.349 3.348-4.767 8.37-12.47 6.464 .271 .395-19.78-4.937-19.78-4.937l-13.51 31.15 35.41 8.827c6.588 1.651 13.05 3.379 19.4 5.006l-11.26 45.21 27.18 6.781 11.15-44.73a1038 1038 0 0 0 21.69 5.627l-11.11 44.52 27.21 6.781 11.26-45.13c46.4 8.781 81.3 5.239 95.99-36.73 11.84-33.79-.589-53.28-25-65.99 17.78-4.098 31.17-15.79 34.75-39.95zm-62.18 87.18c-8.41 33.79-65.31 15.52-83.75 10.94l14.94-59.9c18.45 4.603 77.6 13.72 68.81 48.96zm8.417-87.67c-7.673 30.74-55.03 15.12-70.39 11.29l13.55-54.33c15.36 3.828 64.84 10.97 56.85 43.03z"></path></svg>
APPLY NOW
</button>
</div>

</div> 
                </SwiperSlide>
            })
        }
        
      </Swiper>
      
        </div>
    );
}

export default HomeSlider;



