import { useEffect, useRef, useState } from 'react'
import { FaRegHand } from 'react-icons/fa6'
import './App.css'
import AnswerInput from './components/AnswerInput'
import AnswerTime, { MyTimer } from './components/AnswerTime'
import QuizzQuestion from './components/QuizzQuestion'

function App() {
  const inputEl = useRef<HTMLInputElement | null>(null)
  const [text, setText] = useState("")
  const [showInput, setShowInput] = useState<boolean>(true)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const correctAnswer = 'your_correct_answer_here'

  const handleClick = () => {
    if (inputEl.current) {
      const userAnswer = inputEl.current.value
      setText(userAnswer)
      setShowInput(false)
      setIsCorrect(userAnswer === correctAnswer)
    }
  }

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus()
    }
  }, [showInput])



  return (
    <div className='container p-4 mx-auto'>
      <QuizzQuestion />
      <AnswerTime />
      {showInput ? (
        <>
          <AnswerInput inputRef={inputEl} />
          <div className='p-4'>
            <button onClick={handleClick} className='bg-red-600 p-4 text-white rounded-full' value={text}>
              <FaRegHand />
            </button>
          </div>
        </>
      ) : (
        <div className='p-4'>
          {isCorrect ? (
            <p className='text-green-500'>正解です！解答時間は何秒でした。</p>
          ) : (
            <p className='text-red-500'>間違いです。正解は{correctAnswer}です。</p>
          )}
        </div>
      )}
    </div>
  )
}

export default App