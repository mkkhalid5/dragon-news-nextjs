import NewsDetailsCard from '@/components/homepage/news/NewsDetailsCard';
import RightSideBar from '@/components/homepage/RightSideBar';
import { getNewsDetailsById } from '@/lib/data';
import React from 'react';
import { MdDescription } from 'react-icons/md';

export const generateMetadata = async ({params}) => {
    const {id} = await params;
    const news = await getNewsDetailsById(id);

    return {
        title: news.title,
        description: news.details,
    };

};

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetailsById(id);
    return (
        <div className='container mx-auto grid grid-cols-9 gap-10 mt-15 py-5'>
            <div className='col-span-6'><NewsDetailsCard news={news} /></div>
            <div className='col-span-3'><RightSideBar /></div>
        </div>
    );
};

export default NewsDetailsPage;