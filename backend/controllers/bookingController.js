
import Booking from '../models/Booking.js'


export const createBooking = async (req, res) => {
    // Validate and sanitize the input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
        const newBooking = await Booking.create(req.body);
        res.status(200).json({ success: true, message: "Your tour is booked", data: newBooking });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};



export const getBooking =  async(req,res)=>{
    const id = req.params.id

    try {
        const book = await Booking.findById(id)
        
        res.status(200).json({success:true, message: "successful",data: book,});
    } catch (err) {
        res.status(404).json({success:false, message: "not found",});
    }
}

export const getAllBooking =  async(req,res)=>{
    
    try {
        const books = await Booking.find()
        
        res.status(200).json({success:true, message: "successful",data: books,});
    } catch (err) {
        res.status(500).json({success:false, message: "internal server error",});
    }
}