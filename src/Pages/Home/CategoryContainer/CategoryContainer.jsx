import React from 'react';
import category from '../../../categories';
import CategoryCart from '../../../components/CategoryCart';
import MainText from '../../../components/MainText';

const CategoryContainer = () => {
    console.log(category,"kkk")
    return (
       <div className='px-8 my-5 pb-[6px] bg-category_container_bg'>
         <MainText className='mt-3 pt-5' text={'EXPLORE BY CATEGORY'}></MainText>

         <div className=' grid grid-cols-4 gap-4'>
            {/* <CategoryCart></CategoryCart> */}
            {
                category[0].map(items =>{
                   return <CategoryCart items={items}></CategoryCart>
                })
            }
        </div>
       </div>
    );
}

export default CategoryContainer;
