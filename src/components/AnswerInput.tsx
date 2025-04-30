import React, { ForwardedRef } from 'react'

interface AnswerInputProps {
  inputRef: ForwardedRef<HTMLInputElement>
}

const AnswerInput: React.FC<AnswerInputProps> = ({ inputRef }) => {
  return (
    <input className="rounded-md p-2 border-2 text-xs w-full" type='text' ref={inputRef} placeholder='答えを入力してください' />
  )
}

export default AnswerInput