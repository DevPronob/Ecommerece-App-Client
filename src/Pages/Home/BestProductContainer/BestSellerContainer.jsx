
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { FreeMode, Pagination,Navigation } from 'swiper/modules';

// import required modules
// import { Pagination, Navigation } from 'swiper/modules';
import product from '../../../products';
import Product from '../../../components/ProductCart';
import MainText from '../../../components/MainText';
const BestSellerContainer = () => {
        const [name,setName] =useState(false)
        console.log(product)
        return (
            <div className='ml-10px px-8'>
                <MainText text={'BESTSELLER PRODUCTS'}></MainText>
    
                <div className=''>
                <Swiper
            slidesPerView={4}
            spaceBetween={20}
            freeMode={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination,Navigation]}
            className="mySwiper"
          >
            {
        product[0].map(items =>{
            return <SwiperSlide>
                <Product items ={items}></Product>
            </SwiperSlide>
        })
    }
          </Swiper>
    
    
    
    
    <div>
    
    </div>
    
    
    
    
    
                </div>
            </div>
        );
}

export default BestSellerContainer;
