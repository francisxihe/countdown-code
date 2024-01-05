import { useCallback, useRef } from "react";
import { ETickState } from "../enum";

export function useCountdownTimer(
  countdown: number,
  setCountdown: React.Dispatch<React.SetStateAction<number>>,
  setTickState: React.Dispatch<React.SetStateAction<ETickState>>
) {
  // 定时器句柄
  let timeHandle = useRef<NodeJS.Timeout | undefined>();
  // 锚定时间
  let timeMark = useRef<Date>(new Date());

  /** 暂停 */
  const pauseTimer = useCallback(() => {
    clearTimeout(timeHandle.current);
    timeHandle.current = undefined;
  }, []);

  /** 开始 */
  const startTimer = useCallback(() => {
    if (timeHandle) pauseTimer();
    if (countdown <= 0) {
      setCountdown(() => 0);
      setTickState(() => ETickState["结束"]);
      return;
    }
    timeMark.current = new Date();
    timeHandle.current = setTimeout(() => {
      const diffTime = new Date().getTime() - timeMark.current.getTime();

      setCountdown((countdown) => countdown - Math.floor(diffTime / 1000));
      if (countdown < 0) {
        setCountdown(() => 0);
        setTickState(() => ETickState["结束"]);
        return;
      }

      startTimer();
    }, 1000);
  }, [countdown, pauseTimer, setCountdown, setTickState]);

  return {
    pauseTimer,
    startTimer,
  };
}
