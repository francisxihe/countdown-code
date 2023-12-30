import { FlipItem } from "./flip";
import "./countdown.scss";
import { useState } from "react";
import { getTimeArr } from "./utils";

interface IProps {
  countdown: string | number;
  state: boolean;
  refresh: boolean;
}

export function CountDown(props: IProps) {
  // const { refresh, state, countdown } = toRefs(props);
  const [nCountdown, setNCountdown] = useState(Number(props.countdown));
  const [timeArr, setTimeArr] = useState(getTimeArr(nCountdown));

  // 定时器句柄
  let timeHandle: any;
  // 锚定时间
  let timeMark: Date;

  function stopTimer() {
    clearTimeout(timeHandle);
    timeHandle = undefined;
  }

  function startTimer() {
    if (timeHandle) stopTimer();
    if (nCountdown <= 0) {
      setNCountdown(0);
      return;
    }
    timeMark = new Date();
    timeHandle = setTimeout(() => {
      const diffTime = new Date().getTime() - timeMark.getTime();

      setNCountdown(nCountdown - Math.floor(diffTime / 1000));
      if (nCountdown < 0) setNCountdown(0);

      setTimeArr(getTimeArr(nCountdown));
      startTimer();
    }, 1000);
  }

  const handleLoadClock = () => {
    setNCountdown(Number(props.countdown));
    setTimeArr(getTimeArr(nCountdown));
    if (props.state === true) {
      startTimer();
    }
  };

  // watch(state, (value) => {
  //   if (value === true) {
  //     if (!timeHandle) startTimer();
  //   }
  //   if (value === false) {
  //     if (timeHandle) stopTimer();
  //   }
  // });

  // watch(countdown, (value, oldValue) => {
  //   if (value === oldValue) return;
  //   handleLoadClock();
  // });

  // watch(refresh, (value) => {
  //   if (!value) return;
  //   handleLoadClock();
  //   emit("update:refresh", false);
  // });

  // return {
  //   timeArr,
  // };

  return (
    <div className="clock-container">
      <FlipItem total={2} current={timeArr[0]}></FlipItem>
      <FlipItem total={9} current={timeArr[1]}></FlipItem>
      <div className="colon"></div>
      <FlipItem total={5} current={timeArr[2]}></FlipItem>
      <FlipItem total={9} current={timeArr[3]}></FlipItem>
      <div className="colon"></div>
      <FlipItem total={5} current={timeArr[4]}></FlipItem>
      <FlipItem total={9} current={timeArr[5]}></FlipItem>
    </div>
  );
}
