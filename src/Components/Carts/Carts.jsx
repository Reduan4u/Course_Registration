import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';

const Carts = ({ cartedCourses, creditHour, creditHourRemaining, totalPrice }) => {

    return (
        <div className="card bg-base-100 shadow-xl px-4">
            <h1 className="mt-6 mb-4 text-blue-500 font-bold text-lg">Credit Hour Remaining: <strong>{creditHourRemaining} hr</strong></h1>
            <hr />
            <h1 className="mt-4 mb-5 text-xl font-bold">Courses: <strong>{cartedCourses.length}</strong> </h1>
            <ol className='px-4 mb-4 text-gray-500 text-sm font-normal list-decimal'>
                {
                    cartedCourses.map((cartedCourse, id) => <Cart key={id} cartedCourse={cartedCourse}></Cart>)
                }
            </ol>
            <hr />
            <h1 className="my-4 text-base font-medium">Total Credit Hour: <strong>{creditHour} hr</strong> </h1>
            <hr />
            <h1 className="my-4 text-base font-semibold">Total Price: <strong>{totalPrice} USD</strong></h1>

        </div>
    );
};

Carts.propTypes = {
    cartedCourses: PropTypes.array,
    creditHour: PropTypes.number,
    creditHourRemaining: PropTypes.number,
    totalPrice: PropTypes.number
}
export default Carts;