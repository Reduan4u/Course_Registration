
import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <div className='w-10/12 m-auto max-w-7xl my-10'>
        <Header></Header>
        <Courses></Courses>
      </div>
    </>
  )
}

export default App
