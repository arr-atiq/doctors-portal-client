import React from 'react';
import BookingDetails from '../BookingDetails/BookingDetails';

const bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8.00 AM - 2.00 PM',
        totalSpace: 20
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '9.00 AM - 2.00 PM',
        totalSpace: 20
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '4.00 PM - 8.00 PM',
        totalSpace: 20
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '8.00 AM - 12.00 PM',
        totalSpace: 20
    },
    {
        id: 5,
        subject: 'Teeth RootCanal',
        visitingHour: '6.00PM -8.00PM',
        totalSpace: 20
    },
    {
        id: 6,
        subject: 'Teeth Braces',
        visitingHour: '10.00 AM - 5.00 PM',
        totalSpace: 20
    },
    {
        id: 7,
        subject: 'Teeth Orthodontics',
        visitingHour: '8.00 AM - 2.00 PM',
        totalSpace: 20
    },
    {
        id: 8,
        subject: 'Cosmetic Dentistry',
        visitingHour: '9.00 AM - 2.00 PM',
        totalSpace: 20
    },
    {
        id: 9,
        subject: 'Teeth Cleaning',
        visitingHour: '4.00 PM - 8.00 PM',
        totalSpace: 20
    },
    {
        id: 10,
        subject: 'Cavity Protection',
        visitingHour: '8.00 AM - 12.00 PM',
        totalSpace: 20
    },
    {
        id: 11,
        subject: 'Teeth RootCanal',
        visitingHour: '6.00PM -8.00PM',
        totalSpace: 20
    },
    {
        id: 12,
        subject: 'Teeth Braces',
        visitingHour: '10.00 AM - 5.00 PM',
        totalSpace: 20
    },
]
const BookAppointment = ({ date }) => {
    return (
        <section>
            <h1 className="text-center text-brand">Available Appointment on {date.toDateString()}</h1>
            <div className="row">
                {
                    bookingData.map(bookingData => <BookingDetails bookData={bookingData} id={bookingData.id}></BookingDetails>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;