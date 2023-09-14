import Courses from './Components/Courses/Courses'
import Carts from './Components/Carts/Carts'
import { useState } from 'react'
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';


function App() {
  const [cartedCourses, setCartedCourses] = useState([]);
  const [creditHour, setCreditHour] = useState(parseInt("00", 10));
  const [creditHourRemaining, setCreditHourRemaining] = useState(20)
  const [totalPrice, setTotalPrice] = useState(0)


  const handleSelect = (credit, course, price) => {
    const selectedCourses = [...cartedCourses, course];
    const creditNumber = parseFloat(credit);
    const newCreditHour = (creditHour + creditNumber);
    const newCreditHourRemaining = (creditHourRemaining - creditNumber)
    const priceNumber = parseFloat(price);
    const newTotalPrice = (totalPrice + priceNumber);

    if (cartedCourses.find(item => item === course)) {
      Swal.fire({
        icon: 'error',
        title: 'Already Selected',
        text: 'Please, try other Courses',
        footer: '<a href="">Want To Restart</a>'
      })
    }
    else if (newCreditHour > 20) {
      Swal.fire({
        icon: 'error',
        title: 'Credit Hour Limit Crossed',
        text: 'Please, try other Courses',
        footer: '<a href="">Want to Restart</a>'
      })
    }
    else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Course Added to The Cart',
        showConfirmButton: false,
        timer: 1500
      })
      setCreditHour(newCreditHour);
      setCartedCourses(selectedCourses);
      setCreditHourRemaining(newCreditHourRemaining);
      setTotalPrice(newTotalPrice);

    }

  }

  return (
    <>
      <div className='w-11/12  m-auto max-w-7xl my-10'>
        <h1 className="text-4xl font-bold text-center my-8">Course Registration</h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          <div className="lg:col-span-3 md:col-span-2 col-span-1">
            <Courses handleSelect={handleSelect}></Courses>
          </div>

          <div className="lg:col-span-1 md:col-span-1 col-span-1">
            <Carts cartedCourses={cartedCourses} creditHour={creditHour}
              creditHourRemaining={creditHourRemaining}
              totalPrice={totalPrice}
            ></Carts>
          </div>

        </div>

      </div>
    </>
  )
}

App.propTypes = {
  Swal: PropTypes.func
}
export default App
