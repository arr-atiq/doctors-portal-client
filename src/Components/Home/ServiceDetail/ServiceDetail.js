import React from 'react';

const ServiceDetail = ({dentalInfo}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:"70px"}} src={dentalInfo.img} alt=""/>
            <h5 className="mt-3 mb-3">{dentalInfo.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, libero.</p>
        </div>
    );
};

export default ServiceDetail;