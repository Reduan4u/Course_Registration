import { useEffect } from "react";
import Cart from "../Cart/Cart";
import Course from "../Course/Course";

const Courses = () => {
    const [course, setCourse] = ([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [])

    return (

        <div className="grid grid-cols-4">
            <div className="col-span-3 bg-blue-400">
                <Course></Course>
            </div>
            <div className="col-span-1 bg-red-400">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Courses;