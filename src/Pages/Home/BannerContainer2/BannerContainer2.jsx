import React from 'react';

const BannerContainer2 = () => {
    return (
        <div className='flex px-8 gap-[40px] justify-center mt-[55px]'>
            <div className='flex'>
            <div
                    style={{
                        width: '430px',
                        height: '264px',
                        backgroundImage: `url(${"https://wpbingosite.com/wordpress/bumbleb/wp-content/uploads/2022/10/banner-21.jpg"})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                     className=''>
                    <div className='flex flex-col pl-[30px] pt-[78px]'>
                        <h5 className={`text- text-[26px] font-bold`}>WHEEL RIM NEW</h5>
                        <p className={`text-black`}>More Color Options</p>
                    </div>
                    </div>
            </div>
            <div>
            <div
                    style={{
                        width: '730px',
                        height: '264px',
                        backgroundImage: `url(${"https://wpbingosite.com/wordpress/bumbleb/wp-content/uploads/2023/03/img-7.jpg"})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                     className=''>
                    <div className='flex flex-col pl-[30px] px-[60px] pt-[78px] text-right'>
                        <h5 className={`text-black text-[26px] font-bold`}>MEMBERS TITANIUM EXHAUST</h5>
                        <p className={`text-black`}>{"$198.00 $409.00"}</p>
                    </div>
                    </div>
            </div>

        </div>
    );
}

export default BannerContainer2;
