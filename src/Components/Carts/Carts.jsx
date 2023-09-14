import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';

const Carts = ({ cartedCourses, creditHour, creditHourRemaining }) => {

    return (
        <div className="card bg-base-100 shadow-xl px-4">
            <h1 className="mt-6 mb-4 ">Credit Hour Remaining: {creditHourRemaining}hr</h1>
            <hr />
            <h1 className="mt-4 mb-5">Courses: 0{cartedCourses.length} </h1>
            <div className='mb-4 text-gray-500 text-sm font-normal'>
                {
                    cartedCourses.map(cartedCourse => <Cart key={cartedCourse.id} cartedCourse={cartedCourse}></Cart>)
                }
            </div>
            <hr />
            <h1 className="my-4">Total Credit Hour: {creditHour} </h1>
            <hr />
            <h1 className="my-4">Total Price: USD</h1>

        </div>
    );
};

Carts.propTypes = {
    cartedCourses: PropTypes.array,
    creditHour: PropTypes.number,
    creditHourRemaining: PropTypes.number
}
export default Carts;