import React from 'react';

const BookAppointment = ({date}) => {
    return (
        <section>
            <h1 className="text-center text-brand">Available Appointment on {date.toDateString()}</h1>
        </section>
    );
};

export default BookAppointment;