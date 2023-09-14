import PropTypes from 'prop-types';

const Cart = ({ cartedCourse }) => {
    const { title } = cartedCourse;

    return (
        <div>
            <ol>{title}</ol>
        </div>
    );
};

Cart.propTypes = {
    cartedCourse: PropTypes.object
}
export default Cart;