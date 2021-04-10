import React from 'react';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import BusinessInfoDetail from '../BusinessInfoDetail/BusinessInfoDetail';

const infoData = [
    {
        title: 'Opening Hour',
        description: 'lorem ipsum dolor sit ame',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit our location',
        description: 'Dhaka, azimpur-1205',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Contact us now',
        description: '01500000000',
        icon: faPhone,
        background: 'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
            {
                infoData.map((info) => <BusinessInfoDetail info={info}></BusinessInfoDetail>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;