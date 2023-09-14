
import './App.css'
import Header from './Components/Header/Header'
import Courses from './Components/Courses/Courses'
import Cart from './Components/Cart/Cart'

function App() {

  return (
    <>
      <div className='w-11/12  m-auto max-w-7xl my-10'>
        <Header></Header>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <Courses></Courses>
          </div>

          <div className="col-span-1">
            <Cart></Cart>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
