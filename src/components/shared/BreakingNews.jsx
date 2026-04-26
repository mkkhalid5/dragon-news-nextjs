import React from 'react';
import Marquee from 'react-fast-marquee';

const news =[
    {
        _id: "1",
        title: "Breaking News: Major Event unfolds in the City"
    },
    {
        _id: "2",
        title: "Breaking News: New Policy Announced by the Government"
    },
    {
        _id: "3",
        title: "Breaking News: Sports Team Wins Championship"
    },
];

const BreakingNews = () => {
    return (
        <div className='flex justify-center gap-4 items-center bg-gray-200 py-4 px-3 container mx-auto'>
           <button className='btn bg-pink-500 text-white'>Latest</button>
           <Marquee pauseOnHover={true}>
            {news.map((n) => <span key={n._id}>{n.title}</span>)}
           </Marquee>
        </div>
    );
};

export default BreakingNews;