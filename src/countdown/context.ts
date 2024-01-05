import { createContext } from "react";
import { ETickState } from "./enum";

export const ClockContext = createContext({
  /** 计时器状态 */
  tickState: ETickState["暂停"],
  /** 设置计时器状态 */
  setTickState: ((state: ETickState) => {}) as React.Dispatch<
    React.SetStateAction<ETickState>
  >,
  /** 倒计时 */
  countdowns: [1500, 300],
  /** 设置倒计时 */
  setCountdowns: ((countdowns: number[]) => {}) as React.Dispatch<
    React.SetStateAction<number[]>
  >,
  /** 当前倒计时阶段 */
  step: 0,
  /** 设置倒计时阶段 */
  setStep: ((state: number) => {}) as React.Dispatch<
    React.SetStateAction<number>
  >,
});
