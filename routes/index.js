const express = require('express');
const router  = express.Router();

const Booking = require("./../models/booking.model");
const Subscription = require("./../models/subscription.model");
const Resource = require("./../models/resources.model");

/* POST and receive data from booking form */
router.post('/', (req, res, next) => {
  const { name, email, service, session, phone, goals } = req.body;
  let interpretedService;
  let interpretedSession;
  
  interpretedService = service === "1" ? interpretedService = "individual" : interpretedService = "company";
  switch(session) {
    case "1":
      interpretedSession = "introductory session for individual";
      break;
    case "2":
      interpretedSession = "single session";
      break;
    case "3":
      interpretedSession = "1 session of package 5";
      break;
    case "4":
      interpretedSession = "1 session of package 10";
      break;
    case "5":
      interpretedSession = "introductory session for company";
      break;
    case "6":
      interpretedSession = "corporate initial consultation";
      break;
    case "7":
      interpretedSession = "corporate ongoing services";
      break;
    default:
      interpretedSession = "not specified";
  }

  const dataOBJ = {
    name: name,
    email: email,
    service: interpretedService,
    session: interpretedSession,
    phone: phone,
    goals: goals
  }

  Booking.create(dataOBJ)
    .then((newBooking) => {
      console.log(`New booking created: ${newBooking}`);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

/* POST and receive data from subscription forms */
router.post("/subscribe", (req, res, next) => {
  const { name, email } = req.body;

  const dataOBJ = {
    name: name,
    email: email
  }

  Subscription.create(dataOBJ)
    .then((newSubscription) => {
      console.log(`New subscription created: ${newSubscription}`);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
})

/* POST and receive data from external resources access forms */
router.post("/access-resource", (req, res, next) => {
  const { name, email } = req.body;

  const dataOBJ = {
    name: name,
    email: email
  }

  Resource.create(dataOBJ)
    .then((newVisitor) => {
      console.log(`New user has accessed external resources: ${newVisitor}`);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
})

module.exports = router;
