const express=require('express');
const { loginController, registerController, authController, applyDoctorController,
    getAllNotificationController ,deleteAllNotificationController, getAllDocotrsController, 
    bookAppointmentController,
    bookingAvailabilityController,
    userAppointmentsController
    } = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

//router objects
const router=express.Router();

//routes   //login||post
router.post('/login',loginController);

//register ||post method
router.post('/register',registerController);
//Auth||post
router.post('/getUserData',authMiddleware,authController);
//APply Doctor || POST
 router.post("/apply-doctor", authMiddleware, applyDoctorController);
 //notification doctor|| POST
 router.post("/get-all-notification", authMiddleware, getAllNotificationController);
  //deleteallnotification doctor|| POST
  router.post("/delete-all-notification", authMiddleware, deleteAllNotificationController);

  //GET ALL DOCTORS
  router.get('/getAllDoctors',authMiddleware,getAllDocotrsController)

  //book appointmentrouter 
  router.post('/book-appointment',authMiddleware,bookAppointmentController) //video mai spelling mistake h bookAppointmentController ki 
//booking avliability 
router.post("/booking-availbility",authMiddleware,bookingAvailabilityController);

//appointment lists 
router.get('/user-appointments',authMiddleware,userAppointmentsController)
module.exports=router;
