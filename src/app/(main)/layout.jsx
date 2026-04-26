import BreakingNews from '@/components/shared/BreakingNews';
import Header from '@/components/shared/Header';
import NavBar from '@/components/shared/NavBar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div className='container mx-auto px-3'>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            {children}
        </div>
    );
};

export default MainLayout;