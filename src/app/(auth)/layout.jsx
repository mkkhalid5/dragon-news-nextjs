import NavBar from '@/components/shared/NavBar';
import React from 'react';
import { montserrat } from '../layout';

export const metadata = {
  title: "Dragon News - Sign UP",
  description: "Best news portal in Bangladesh",
};

const AuthLayout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
            <NavBar></NavBar>
            {children}
        </div>
    );
};

export default AuthLayout;