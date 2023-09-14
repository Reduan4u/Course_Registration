import PropTypes from 'prop-types';

const Cart = ({ cartedCourse }) => {
    const { title } = cartedCourse;

    return (
        <li>{title}</li>
    );
};

Cart.propTypes = {
    cartedCourse: PropTypes.object
}
export default Cart;