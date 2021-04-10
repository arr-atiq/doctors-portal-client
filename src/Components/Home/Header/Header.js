import React from 'react';
import './Header.css';
import HeaderMainContent from '../HeaderMainContent/HeaderMainContent';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderMainContent></HeaderMainContent>
        </div>
    );
};

export default Header;