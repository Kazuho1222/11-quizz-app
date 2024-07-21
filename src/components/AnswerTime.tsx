import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const {
    seconds,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div>
      <span>{seconds}</span>秒
    </div >
  );
}

function AnswerTime() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div >
  );
}

export default AnswerTime