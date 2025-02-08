// object destructuring

const course = {
    coursename: "Generative AI",
    price: "12999",
    courseInstructor: "Abhishek"
}

// course.courseInstructor

const { courseInstructor } = course;
const { courseInstructor: instructor } = course

// console.log(courseInstructor);
// console.log(instructor);


