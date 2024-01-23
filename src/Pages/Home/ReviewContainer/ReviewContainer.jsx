import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactStars from "react-rating-stars-component";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { FreeMode, Pagination,Navigation } from 'swiper/modules';
import { Rating, Stack } from '@mui/material';
const ReviewContainer = () => {
    const testimonials = [
        {
          title: "Exceptional Product Experience",
          text: "I take great pride in maintaining my own vehicle",
          review: 4,
          name: "Jon Carter",
          job: "Senior Product Designer"
        },
        {
          title: "Unmatched Quality and Service",
          text: "Detail Doctors provides an outstanding level of service. ",
          review: 4,
          name: "Sarah Johnson",
          job: "Automotive Engineer"
        },
        {
          title: "Top-notch Professionalism",
          text: "I have entrusted Detail Doctors with my vehicle's maintenance, ",
          review: 5,
          name: "Dr. Michael Anderson",
          job: "Dentist and Car Enthusiast"
        },
        {
          title: "Exquisite Craftsmanship",
          text: "Detail Doctors brings a level of craftsmanship to car detailing that is true ",
          review: 4,
          name: "Elizabeth Walker",
          job: "Interior Designer"
        },
        {
          title: "Outstanding Detailing",
          text: "Detail Doctors has demonstrated an unmatched level of expertise in car detailing.",
          review: 4,
          name: "Andrew Bennett",
          job: "Financial Analyst"
        },
        {
          title: "Satisfaction Beyond Expect",
          text: "My experience with Detail Doctors was nothing short of exceptional. ",
          review: 5,
          name: "Olivia Adams",
          job: "Marketing Manager"
        },
        {
          title: "Reliable and Trustworthy that awasome",
          text: "Detail Doctors has consistently proven to be a reliable and trustworthy",
          review: 5,
          name: "David Miller",
          job: "Business Executive"
        }
      ];
    return (
        <div className='px-8 mt-[57px]'>
           <div className=''>
<Swiper
slidesPerView={4}
spaceBetween={20}
freeMode={true}
navigation={false}
// pagination={{
// clickable: true,
// }}
modules={[FreeMode, Pagination,Navigation]}
className="mySwiper"
>
{
testimonials.map(items =>{
return <SwiperSlide>
<div class="flex flex-col overflow-hidden rounded-xl border shadow-sm">
                <div class="flex flex-1 flex-col justify-between bg-white p-6 lg:px-7 lg:py-8">
                  <div class="flex-1">
                    <div class="flex items-center justify-center">
                    <Stack spacing={1}>
                    <Rating name="size-small" value={items.review} size="small" />
                    </Stack>
                    </div>
                    <h4 className='font-bold text-[20px] py-4'>{items.title}</h4>
                    <blockquote class="mt-3 flex-1">
                      <p class="font-[400] text-xl italic text-blue-900">{items.text}</p>
                    </blockquote>
                  </div>
    
                  <div class="mt-3 flex items-center">
                    {/* <img class="h-11 w-11 flex-shrink-0 rounded-full object-cover" src="/images/Ju6-1negUEjTnBKw_ZP4r.png" alt="" /> */}
                    <div class="ml-4">
                      <p class="text-base font-bold text-blue-900">{items.name}</p>
                      <p class="mt-0.5 text-sm text-gray-500">{items.job}</p>
                    </div>
                  </div>
                </div>
              </div>
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

export default ReviewContainer;






{/* <svg class="h-5 w-5 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="h-5 w-5 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="h-5 w-5 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="h-5 w-5 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg class="h-5 w-5 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg> */}