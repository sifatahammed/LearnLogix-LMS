const express = require("express");
const {
  getAllStudentViewCourses, getStudentViewCourseDetails, checkCoursePurchaseInfo
} = require("../../controllers/student-controllers/course-controller");
const router = express.Router();

router.get("/get", getAllStudentViewCourses);
router.get("/get/details/:id", getStudentViewCourseDetails);
router.get("/purchase-info/:id/:studentId", checkCoursePurchaseInfo);

module.exports = router;
