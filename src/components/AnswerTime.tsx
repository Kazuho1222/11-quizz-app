import { useEffect, useState } from "react";

interface AnswerTimeProps {
  startTimer: boolean;
  stopTimer: boolean;
  onTimeUpdate: (time: number) => void;
}

const AnswerTime = ({ startTimer, stopTimer, onTimeUpdate }: AnswerTimeProps) => {
  const [time, setTime] = useState<number>(0);
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (startTimer) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1;
          onTimeUpdate(newTime);
          return newTime;
        });
      }, 1000);
    }

    if (stopTimer && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [startTimer, stopTimer, onTimeUpdate]);

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${100 - (time / 10) * 100}%` }}
      >
      </div>
    </div >
  );
}

export default AnswerTime