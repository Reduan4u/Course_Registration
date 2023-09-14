
import './App.css'
import Header from './Components/Header/Header'
import Courses from './Components/Courses/Courses'
import Carts from './Components/Carts/Carts'
import { useState } from 'react'

function App() {
  const [cartedCourses, setCartedCourses] = useState([]);
  const [creditHour, setCreditHour] = useState(0)
  const [creditHourRemaining, setCreditHourRemaining] = useState(20)


  const handleSelect = (credit, course) => {
    const selectedCourses = [...cartedCourses, course];
    const creditNumber = parseFloat(credit)
    const newCreditHour = (creditHour + creditNumber);
    const newCreditHourRemaining = (creditHourRemaining - creditNumber)
    if (newCreditHour > 20) {
      alert("hello")
    }
    else {
      setCreditHour(newCreditHour);
      setCartedCourses(selectedCourses);
      setCreditHourRemaining(newCreditHourRemaining);
    }

  }

  return (
    <>
      <div className='w-11/12  m-auto max-w-7xl my-10'>
        <Header></Header>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <Courses handleSelect={handleSelect}></Courses>
          </div>

          <div className="col-span-1">
            <Carts cartedCourses={cartedCourses} creditHour={creditHour}
              creditHourRemaining={creditHourRemaining}></Carts>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
