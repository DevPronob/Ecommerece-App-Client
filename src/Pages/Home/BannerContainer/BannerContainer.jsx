import React from 'react';

const BannerContainer = () => {
    const bannerItems =[
        {
            title:"LIGHTING 25% OFF",
            text:"New generation lights",
            img:"https://wpbingosite.com/wordpress/bumbleb/wp-content/uploads/2022/10/banner-19.jpg",
            textColor:"white"
        },
        {
            title:"AUTO REPAIR KIT",
            text:"Power tools of next level",
            img:"https://wpbingosite.com/wordpress/bumbleb/wp-content/uploads/2023/03/img-3.jpg",
            textColor:"black"
        },
        {
            title:"TIRE 22% OFF",
            text:"In conjunction with other offers",
            img:"https://wpbingosite.com/wordpress/bumbleb/wp-content/uploads/2022/10/banner-18.jpg",
            textColor:"black"
        },
    ]
    return (
        <div className='flex px-8 items-center mt-[57px] justify-center gap-[30px]'>
            {
                bannerItems.map(items =>{
                    return  <div
                    style={{
                        width: '430px',
                        height: '264px',
                        backgroundImage: `url(${items.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                     className=''>
                    <div className='flex flex-col pl-[30px] pt-[78px]'>
                        <h5 className={`text-${items.textColor} text-[26px] font-bold`}>{items.title}</h5>
                        <p className={`text-${items.textColor}`}>{items.text}</p>
                    </div>
                    </div>
                })
            }
        </div>
    );
}

export default BannerContainer;


