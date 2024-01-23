import React from 'react';
import MainText from '../../../components/MainText';
import product from '../../../products';
import ExpiredNotice from '../../../components/ExpiredNotice';
import ShowCounter from '../../../components/ShowCounter';
import { useCountdown } from '../../../utilits/ShowCounter';
const HotDealContainer = () => {
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    const [days, hours, minutes, seconds] = useCountdown(dateTimeAfterThreeDays);

    
    const hotProduct =product[0].filter(ite =>ite.isDealOfTheDay ===true)
    console.log(hotProduct,"hot")
    return (
        <div className='mx-8 '>
            <MainText text={'HOT DEAL PRODUCTS'}></MainText>
            <div className="block lg:flex xl:flex  gap-[30px] mt-[38px] items-center justify-between">
                {
                    hotProduct.map(items =>{
                        return <div className='flex gap-24 p-[34px] border-2 border-yellow-500'>
                            <div className=''>
                            <img src={items.featuredImage} alt="Description of the image" max-width="160" height="200"/>
                            </div>
                            <div>
                            <span class="text-gray-400 mr-3 uppercase text-xs">{items.brand}</span>
                <p class="text-lg font-bold text-black truncate block capitalize">{items.name}</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>




                  
                    
                   </div>
                   <button type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Add To Cart</button>


                   <div>


{
    
       
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />

}
</div>
                            </div>
                        </div>
                    })
                }
            </div>
            
        </div>
    );
}

export default HotDealContainer;
