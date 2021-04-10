import React from 'react';
import './Header.css';
import HeaderMainContent from '../HeaderMainContent/HeaderMainContent';
import Navbar from '../Navbar/Navbar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderMainContent></HeaderMainContent>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;