import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

export interface MyTimeHandle {
  start: () => void;
  stop: () => void;
  getTime: () => number;
}


const AnswerTime = forwardRef<MyTimeHandle>((_, ref) => {
  const [time, setTime] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useImperativeHandle(ref, () => ({
    start() {
      setTime(0);
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    },
    stop() {
      if (intervalRef.current) clearInterval(intervalRef.current);
    },
    getTime() {
      return time;
    },
  }));

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${100 - (time / 10) * 100}%` }}
      >
      </div>
    </div >
  );
})

export default AnswerTime