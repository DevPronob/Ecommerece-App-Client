import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({items}) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate=useNavigate()
    const nagivateToDetail = name=>{
        console.log(name)
        navigate(`/product/${name}`)
      }
    return (
        
        <div onMouseOver={() =>setIsHovered(true)} onMouseOut={() =>setIsHovered(false)} class="w-72 mt-12  bg-white shadow-md rounded-xl overflow-hidden duration-500 hover:scale-105 hover:shadow-xl">
        {/* <a href="#"> */}
            <img src={isHovered ? items.images[0] : items.images[1]}
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl transition-transform duration-300 transform group-hover:scale-110" />
            <div onClick={() =>nagivateToDetail(items.name)}  class="px-4 py-3 w-72 cursor-pointer">
                <span class="text-gray-400 mr-3 uppercase text-xs">{items.brand}</span>
                <p  class="text-lg font-bold text-black truncate block capitalize">{items.name}</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    { items.offerPrice && <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del> }
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div>
            </div>
        {/* </a> */}
    </div>

    );
}

export default Product;
