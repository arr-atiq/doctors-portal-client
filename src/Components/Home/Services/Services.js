import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const dentalInfo =[
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]
const Services = () => {
    return (
        <section className="service-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h3>Service We Provide</h3>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75  mt-4 pt-5">
                    {
                        dentalInfo.map((dentalInfo) => <ServiceDetail dentalInfo={dentalInfo}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;