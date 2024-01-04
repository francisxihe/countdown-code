import { ReloadOutlined, StepForwardOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Countdown } from "./clock/countdown";
import "./index.scss";
import { PlayController } from "./actions/playController"; // @ is an alias to /src
import { Setting } from "./actions/setting";
import { ClockContext } from "./context";
import { ETickState } from "./enum";

export function Home() {
  const [tickState, setTickState] = useState(ETickState["暂停"]);
  const [countdowns, setCountdowns] = useState([1, 300]);
  const [clockRefresh, setClockRefresh] = useState(false);
  const [step, setStep] = useState(0);

  const handleRefresh = () => {
    setClockRefresh(true);
    setTickState(ETickState["暂停"]);
  };

  const onConfirmSetting = (): void => {
    handleRefresh();
  };

  return (
    <>
      <ClockContext.Provider
        value={{
          tickState,
          setTickState,
          countdowns,
          setCountdowns,
          step,
          setStep,
        }}
      >
        <div className="clock">
          <Countdown
            refresh={clockRefresh}
            setRefresh={setClockRefresh}
          ></Countdown>
        </div>
        <div className="actions">
          <PlayController className="action action-play"></PlayController>
          <StepForwardOutlined
            onClick={() => {
              setStep(step < countdowns.length - 1 ? step + 1 : 0);
            }}
            className="action"
          ></StepForwardOutlined>
          <ReloadOutlined
            onClick={() => {
              handleRefresh();
            }}
            className="action action-reload"
            style={{ color: "#fff", fontSize: "24px" }}
          ></ReloadOutlined>

          <Setting
            onConfirm={onConfirmSetting}
            className="action action-setting"
            style={{ color: "#fff", fontSize: "24px" }}
          ></Setting>
        </div>
      </ClockContext.Provider>
    </>
  );
}
