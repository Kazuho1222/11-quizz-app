import { useRef, useState } from 'react'
import { FaRegHand } from 'react-icons/fa6'
import './App.css'
import AnswerInput from './components/AnswerInput'
import AnswerTime from './components/AnswerTime'
import QuizzQuestion from './components/QuizzQuestion'

function App() {
  const inputEl = useRef<HTMLInputElement | null>(null)
  const [text, setText] = useState("")
  const [showInput, setShowInput] = useState<boolean>(true)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [answerTime, setAnswerTime] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false)
  const [startTimer, setStartTimer] = useState<boolean>(false)
  const [stopTimer, setStopTimer] = useState<boolean>(false)
  const correctAnswers = ['となりがシー', '隣がシー', 'となりがしー', '隣がしー'];

  const handleClick = () => {
    if (inputEl.current) {
      const userAnswer = inputEl.current.value
      setText(userAnswer)
      setShowInput(false)
      setStopTimer(true)
      setIsCorrect(correctAnswers.includes(userAnswer))
    }
  }

  const handleStart = () => {
    setHasStarted(true)
    setShowInput(true)
    setStartTimer(true)
    setStopTimer(false)
  }

  const handleTimeUpdate = (time: number) => {
    setAnswerTime(time)
  }

  return (
    <div className='container p-4 mx-auto w-1/2 h-1/2 shadow-xl rounded-lg'>
      {!hasStarted ? (
        <div className='p-4 text-center'>
          <h1 className='text-3xl mb-4 font-extrabold mx-auto'>クイズアプリ</h1>
          <button onClick={handleStart} className='bg-red-600 p-4 text-white rounded-full'>スタート</button>
        </div>
      ) : (
        <>
          <QuizzQuestion />
          <AnswerTime startTimer={startTimer} stopTimer={stopTimer} onTimeUpdate={handleTimeUpdate} />
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
                <p className='text-green-500'>正解です！解答時間は{answerTime}秒でした。</p>
              ) : (
                <p className='text-red-500'>間違いです。正解は{correctAnswers[0]}です。</p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default App