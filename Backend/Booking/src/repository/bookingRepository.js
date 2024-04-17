const {Booking} = require('../models/index');

class BookingRepository{
    async create(data){
        try{
            const booking  = await Booking.create(data);
            return booking;
        } catch(error){
            console.log("Error at repository Layer. ");
            throw error;
        }
    }
};

module.exports = BookingRepository;