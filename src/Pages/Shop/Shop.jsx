import React from 'react';
import TopContainer from '../../components/TopContainer';
import { getBreadcrumbFromPath } from '../../utilits/constants';
import Product from '../../components/ProductCart';
import product from '../../products';
import FilterContainer from '../../components/FilterContainer';

const Shop = () => {
    const currentBreadcrumb = getBreadcrumbFromPath();
    console.log(currentBreadcrumb,"jiifofofor")
    return (
        <div>
            <TopContainer></TopContainer>
            <div className="grid grid-cols-[30%,70%] ">
    <div>
        <FilterContainer></FilterContainer>
    </div>
    <div className='grid grid-cols-3 gap-4'>
        {
            product[0].map(items =>{
                return <Product items ={items}></Product>
            })
        }
    </div>
</div>
        </div>
    );
}

export default Shop;
