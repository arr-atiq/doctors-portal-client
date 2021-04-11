import React from 'react';
import './Header.css';
import HeaderMainContent from '../HeaderMainContent/HeaderMainContent';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Navbar from '../../SharedComponent/Navbar/Navbar';

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