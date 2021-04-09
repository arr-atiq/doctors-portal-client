import React from 'react';
import HeaderMainContent from '../HeaderMainContent/HeaderMainContent';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMainContent></HeaderMainContent>
        </div>
    );
};

export default Header;