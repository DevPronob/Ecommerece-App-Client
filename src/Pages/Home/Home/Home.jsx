import React from 'react';
import HomeSlider from '../HomeSlider/HomeSlider';
import HotDealContainer from '../HotDealContainer/HotDealContainer';
import BannerContainer from '../BannerContainer/BannerContainer';
// import CategoryCart from '../../../components/CategoryCart';
import CategoryContainer from '../CategoryContainer/CategoryContainer';
import PopularProductContainer from '../PopularProductContainer/PopularProductContainer';
import BannerContainer2 from '../BannerContainer2/BannerContainer2';
import BestSellerContainer from '../BestProductContainer/BestSellerContainer';
import ReviewContainer from '../ReviewContainer/ReviewContainer';

const Home = () => {
    return (
        <div className=''>
            <HomeSlider></HomeSlider>
            <HotDealContainer></HotDealContainer>
            <BannerContainer></BannerContainer>
            <BestSellerContainer></BestSellerContainer>
            <CategoryContainer></CategoryContainer>
            <PopularProductContainer></PopularProductContainer>
            <BannerContainer2></BannerContainer2>
            <ReviewContainer></ReviewContainer>
        </div>
    );
}

export default Home;
