const {
  createCourse,
  deleteCourse,
  getCourse,
  getCourses,
  updateCourse,
} = require('./courseService');
const {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  updateCategory,
} = require('./categoryService');
const {
  createSchedule,
  deleteSchedule,
  getSchedule,
  getSchedules,
  updateSchedule,
} = require('./scheduleService');
const {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} = require('./userService');

const CourseService = {
  createCourse,
  deleteCourse,
  getCourse,
  getCourses,
  updateCourse,
};
const CategoryService = {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  updateCategory,
};
const ScheduleService = {
  createSchedule,
  deleteSchedule,
  getSchedule,
  getSchedules,
  updateSchedule,
};
const UserService = {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
};
module.exports = {
  CourseService, CategoryService, ScheduleService, UserService,
};
