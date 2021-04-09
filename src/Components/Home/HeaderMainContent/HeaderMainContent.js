import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMainContent = () => {
    return (
        <div className="main row">
            <div className="col-md-4 offset-md-1">
                <h1>Your New Smile<br/>Start Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nobis ratione a earum vitae amet iusto voluptatem, nihil cumque dolorum?</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </div>
    );
};

export default HeaderMainContent;