const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  service: { type: Number, required: true, min: 1, max: 2 },
  session: { type: Number, min: 1, max: 7, default: "not specified" },
  phone: { type: String, required: true },
  goals: { type: String, default: "not specified" }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;