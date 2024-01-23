import React, { useState } from 'react';
import { RiAccountCircleFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { HiChevronDown } from "react-icons/hi";
// import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";

const Navbar = () => {
    const [openBar,setOpenBar] =useState(true)
    const [openCategory,setCategory] =useState(false)




    return (
       <div className=''>
        {/* navbar-top */}
         
        <div className='flex items-center justify-between bg-main_color w-full px-[40px] py-4 h-[115px]'>
            <div className='flex items-center gap-[10px]'>
            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-overlay-example">
  Open offcanvas
</button>
           {/* <button  type="button"
   className='block lg:hidden xl:hidden btn' data-hs-overlay="#hs-overlay-example"> <FaBarsStaggered className='text-[18px]' /></button> */}


        {/* <!-- drawer component --> */}
        <div id="hs-overlay-example" class="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full w-full z-[80] bg-white border-e dark:bg-gray-800 dark:border-gray-700 hidden" tabindex="-1">
  <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
    <h3 class="font-bold text-gray-800 dark:text-white">
      Offcanvas title
    </h3>
    <button type="button" class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-overlay-example">
      <span class="sr-only">Close modal</span>
      <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    </button>
  </div>
  <div class="p-4">
    <p class="text-gray-800 dark:text-gray-400">
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </p>
  </div>
</div>
{/* <!-- drawer component --> */}




            <img
  className="w-[156px] h-[43px]"
  src="https://wpbingosite.com/wordpress/bumbleb/wp-content/uploads/2022/09/logo-1.png"
  alt="logo" />
            </div>

  
            <div>
           
<form className='w-[410px] hidden lg:block xl:block'>
    <div class="flex h-[48px]">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button onClick={() =>setOpenBar(!openBar)} id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
        <div id="dropdown" class={`z-10 absolute top-[89px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${openBar? 'hidden':""}`}>
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
            </li>
            </ul>
        </div>
        <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block h-[48px] p-2.5 w-full z-20 text-sm text-gray-900 bg-white rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search"/>
            <button type="submit" class="absolute w-[60px] top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-black rounded-e-lg   hover:bg-main_color focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4 ms-[8px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>

            </div>
            <div className='flex items-center gap-[16px]'>
                <span className='hidden lg:block xl:block'><RiAccountCircleFill  className='text-[20px]'/></span>
                <span className='hidden lg:block xl:block'><FaHeart className='text-[20px]'/></span>
                <span><FaCartPlus className='text-[20px]'/></span>
            </div>
        </div>
        {/* navbar-end */}
        {/* second-bar start */}
        <div className='px-[40px]   flex items-center justify-between hidden lg:flex xl:flex'>
            <div onClick={() =>setCategory(!openCategory)} className='cursor-pointer relative'>
                <div className='w-[294] flex items-center gap-[10px] bg-black text-white h-[50px] px-[15px]'>
                <FaBarsStaggered />
                <h5 className='font-bold'>BROWSE ALL CATEGORIES</h5>
                <span><HiChevronDown /></span>
                </div>
                {
            openCategory && (
            <div class="w-[250px] absolute z-10 hover:z-20 top-[56px] text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
            </li>
            </ul>
</div>
            )
            }
            </div>
            {/* list component start */}
            
            

            {/* list component end */}
            <div>
                <ul className='flex gap-[33px] text-[18px] font-semibold'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Product</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>Need help: <span className='text-main_color font-bold'>1900 568 659</span></div>
        </div>
        {/* second bar end */}




       </div>
    );
}

export default Navbar;
