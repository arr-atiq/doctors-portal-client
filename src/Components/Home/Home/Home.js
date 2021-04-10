import React from 'react';
import Blogs from '../Blogs/Blogs';
import FeatureService from '../FeatureService/FeatureService';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppoinment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeatureService></FeatureService>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;