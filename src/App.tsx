import { FaRegHand } from 'react-icons/fa6'
import './App.css'
import Answer from './components/Answer'
import AnswerTime from './components/AnswerTime'
import QuizzQuestion from './components/QuizzQuestion'

function App() {

  return (
    <div className='container p-4 mx-auto'>
      <QuizzQuestion />
      <AnswerTime />
      <Answer />
      <div className='p-4'>
        <button className='bg-red-600 p-4 text-white rounded-full'>
          <FaRegHand />
        </button>


      </div>
    </div>

  )
}

export default App