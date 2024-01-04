import { FlipItem } from "./flip";
import "./countdown.scss";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getTimeArr } from "./utils";
import { useCountdownTimer } from "./hooks";
import { ClockContext } from "../context";
import { ETickState } from "../enum";

interface IProps {
  refresh: boolean;
  setRefresh: (data: boolean) => void;
}

export function Countdown(props: IProps) {
  const { countdowns, tickState, setTickState, step, setStep } =
    useContext(ClockContext);

  const [curCountdown, setCurCountdown] = useState(countdowns[step]);

  const { pauseTimer, startTimer } = useCountdownTimer(
    curCountdown,
    setCurCountdown,
    setTickState
  );

  const timeArr = useMemo(() => {
    return getTimeArr(curCountdown);
  }, [curCountdown]);

  useEffect(() => {
    if (tickState === ETickState["结束"]) {
      setTickState(ETickState["暂停"]);
    }
  }, [setTickState, tickState]);

  /**
   * 重新开始
   * refresh为true时触发
   */
  useEffect(() => {
    if (!props.refresh) return;

    setCurCountdown(() => countdowns[0]);
    setStep(0);

    props.setRefresh(false);
  }, [countdowns, props, setStep, startTimer]);

  /**
   * 获取当前倒计时时间
   * 倒计时器和倒计时阶段变化时执行
   */
  useEffect(() => {
    setCurCountdown(() => countdowns[step]);
  }, [countdowns, step]);

  /**
   * 开始/暂停
   * 只受播放状态控制
   */
  useEffect(() => {
    if (tickState === ETickState["开始"]) {
      startTimer();
    }
    if (tickState === ETickState["暂停"]) {
      pauseTimer();
    }
  }, [tickState, pauseTimer, startTimer]);

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
