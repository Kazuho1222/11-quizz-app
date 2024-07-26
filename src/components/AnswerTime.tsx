import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const {
    seconds,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div>
      <progress max="10" value={seconds}></progress>
    </div >
  );
}

function AnswerTime() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);
  return (
    <div className="pb-2">
      <MyTimer expiryTimestamp={time} />
    </div >
  );
}

export default AnswerTime