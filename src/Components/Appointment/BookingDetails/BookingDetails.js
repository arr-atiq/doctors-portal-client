import React, { useState } from 'react';
import BookModal from '../BookModal/BookModal';

const BookingDetails = ({bookData, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
      }
    
      function closeModal(){
        setIsOpen(false);
      }
    return (
        <div className="col-md-4 mb-3 mt-5">
            <div className="card p-4 bg-secondary">
                <div className="card-body text-center">
                    <h5 className="text-new">{bookData.subject}</h5>
                    <h6 className="text-white">{bookData.visitingHour}</h6>
                    <p className="text-white">Total Space are available: {bookData.totalSpace}</p>
                    <button onClick={openModal} className="btn btn-primary">Book Appointment</button>
                    <BookModal modalIsOpen={modalIsOpen} closeModal={closeModal} date={date} appointmentOn={bookData.subject}></BookModal>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;