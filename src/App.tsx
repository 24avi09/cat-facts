import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserInput from './Components/UserInput'
import ResultComponent from './Components/ResultComponent'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserInput />} />
        <Route path='/result/:noOfFacts' element={<ResultComponent />} />
      </Routes>

    </>
  )
}

export default App
