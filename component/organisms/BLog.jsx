import React from 'react'
import CustomImage from '../atoms/CustomImage'

function BLog() {
    return (
        <div className='main flex justify-between'>
            <div className='lft relative'>
                <div className='image1 block'>
                    <img src="/assits/assits/image/blog 1.png" alt="" />
                </div>
                <div className='text absolute bottom-[20px] text-white left-[35px]'>
                    <span className='text-[32px] font-medium '>Title</span>
                    <p className='text-[14px] leading-[17.36px] w-[550px] pt-[10px]'>Our company guarantees comfortable cooperation, high-quality teaching and excellent experts our company guarantees comfortable cooperation, high-quality teaching and excellent experts oasd ur company</p>
                </div>
            </div>
            <div className='right flex flex-col gap-[20px]'>
                <div className='tp flex justify-between'>
                    <div className=' relative'>
                        <div className=' block'><CustomImage variant='four' src='/assits/assits/image/blog-2.png' /></div>
                        <div className='absolute bottom-[20px] text-white left-[15px]'>
                            <span className='text-[32px] font-medium'>Title</span>
                            <p className='text-[14px] leading-[17.36px] w-[270px] pt-[10px]'>Our company guarantees comfortable cooperation, high-quality teaching and excellent experts our company guarantees comfortabl</p>
                        </div>
                    </div>
                    <div className=' relative'>
                        <div className=' block'><CustomImage variant='four' src='/assits/assits/image/blog3.png' /></div>
                        <div className='absolute bottom-[40px] text-white left-[15px]'>
                            <span className='text-[32px] font-medium'>Title</span>
                            <p className='text-[14px] leading-[17.36px] w-[270px] pt-[10px]'>Our company guarantees comfortable cooperation, high-quality teaching and excellent experts our company guarantees comfortable cooperation, high-quality te</p>
                        </div>
                    </div>
                </div>
                <div className='bottom relative'>
                    <div className='image block'>
                    <img src="/assits/assits/image/blog 4.png" alt="" />
                    </div>
                    <div className=' absolute bottom-[20px] text-white left-[20px]'>
                        <span className='text-[32px] font-medium '>Title</span>
                        <p className='text-[14px] leading-[17.36px] w-[581px] pt-[10px]'>Our company guarantees comfortable cooperation, high-quality teaching and excellent experts our company guarantees comfortable cooperation, high-quality teaching and excellent experts oasd ur company</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BLog