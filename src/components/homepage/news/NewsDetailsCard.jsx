import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaArrowLeft, FaEye, FaStar } from 'react-icons/fa';

const NewsDetailsCard = ({news}) => {
    return (
        <div className='space-y-4 mb-7.5 border border-slate-200 rounded-md'>
            <div className='flex gap-3 bg-[#F3F3F3] p-5 justify-between rounded-t-md'>
                <div className='flex items-center gap-3'>
                    <Image
                        src={news.author?.img}
                        alt={news.author?.name}
                        width={60} height={60}
                        className='rounded-full' />
                    <div>
                        <h2 className='font-semibold'>{news.author?.name}</h2>
                        <p className='text-[#706F6F] text-xs'>{news.author?.published_date}</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <CiBookmark className='w-6 h-6 text-[#706F6F]' />
                    <CiShare2 className='w-6 h-6 text-[#706F6F]' />
                </div>
            </div>

            <div className='px-5 flex flex-col gap-6 justify-center'>
                <h2 className='text-xl font-bold'>{news.title}</h2>
                <Image src={news.image_url} alt={news.title} width={600} height={260} className='w-full' />
                <p className='text-[#706F6F]'>{news.details}</p>
                <Link href={`/news/category/${news.category_id}`}><button className='btn text-white bg-[#D72050] font-semibold hover:cursor-pointer'><FaArrowLeft />All news in this category</button></Link>
                 <hr className='text-slate-300'/>
            </div>
               
            <div className='flex justify-between px-5 py-4'>
                <div className='text-[#FF8C47] flex gap-2 items-center'>
                    <FaStar className=' w-6 h-6' />
                    <FaStar className=' w-6 h-6' />
                    <FaStar className=' w-6 h-6' />
                    <FaStar className=' w-6 h-6' />
                    <FaStar className=' w-6 h-6' />
                    <p className='text-[#706F6F] text-center text-2xl'>{news.rating.number}</p>
                </div>
                <div className='text-[#706F6F] text-xl flex gap-2'>
                    <FaEye className=' w-6 h-6' />
                    <p className=''>{news.total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCard;