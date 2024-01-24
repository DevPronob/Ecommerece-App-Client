import React from 'react';
import product from '../products';
import category from '../categories';
import { Slider } from '@mui/material';

const FilterContainer = () => {
// Extract unique categories
const uniqueCategories = [...new Set(product[0].map(item => item.category))];

// Extract unique brands
const uniqueBrands = [...new Set(product[0].map(item => item.brand))];

// Now, uniqueCategories and uniqueBrands contain arrays of unique values
console.log("Unique Categories:", uniqueCategories,product);
console.log("Unique Brands:", uniqueBrands);
    return (
        <div className='mt-[20px]'>
            <div className='px-[40px] py-[10px]'>
                <h3 className='text-xl font-semibold p-2'>PRODUCT CATEGORIES</h3>
                <hr/>
                <div>
                    {
                        uniqueCategories.map(items =>{
                            return <p className='text-base hover:text-main_color cursor-pointer font-light curser-pointer p-[5px]'>{items}</p>
                        })
                    }
                </div>
            </div>
            <div className='px-[40px] py-[10px]'>
            <h3 className='text-xl font-semibold p-2'>FILTER BY PRICE</h3>
                <hr/>
                <div className='py-1 pt-[12px]'>
                <Slider
  size="small"
  defaultValue={1}
  aria-label="Small"
  valueLabelDisplay="auto"
  min={0}
  max={300}
/>
                </div>
            </div>
            <div className='px-[40px] py-[10px]'>
            <h3 className='text-xl font-semibold p-2'>PRODUCT BRAND</h3>
                <hr/>
                <div>
                    {
                        uniqueBrands.map(items =>{
                            return <p className='text-base hover:text-main_color cursor-pointer font-light curser-pointer p-[5px]'>{items}</p>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default FilterContainer;
