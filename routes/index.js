const express = require('express');
const router  = express.Router();

const Booking = require("./../models/booking.model");

/* POST and receive data from booking form */
router.post('/', (req, res, next) => {
  console.log(req.body)

  const { name, email, service, session, phone, goals } = req.body;
  const dataOBJ = {
    name: name,
    email: email,
    service: service,
    session: session,
    phone: phone,
    goals: goals
  }

  Booking.create(dataOBJ)
    .then((newBooking) => {
      console.log(`New booking created: ${newBooking}`);
      res.send("Succes!")
    })
    .catch((err) => console.log(err));
});

module.exports = router;
