import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Course from "../Course/Course";

const Courses = ({ handleSelect }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3" >
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                    handleSelect={handleSelect}
                ></Course>)
            }
        </div>

    );
};

Courses.propTypes = {
    handleSelect: PropTypes.func
}
export default Courses;