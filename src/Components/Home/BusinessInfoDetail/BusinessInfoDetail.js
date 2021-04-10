import React from 'react';
import './BusinessInfoDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BusinessInfoDetail = ({ info }) => {
    return (
        <div className="col-md-4 text-white info-card">
            <div className={`d-flex justify-content-center align-items-center info-container info-${info.background}`}>
                <div className="mx-3">
                    <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h5>{info.title}</h5>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default BusinessInfoDetail;