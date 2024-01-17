import { useState } from "react";
import { Countdown } from "./countdown/clock/countdown";
import "./App.scss";
import { ClockContext } from "./countdown/context";
import { ETickState } from "./countdown/enum";
import Icon from "@ant-design/icons/lib/components/Icon";
import { ReactComponent as NextSvg } from "static/icon/media_next.svg";
import { ReactComponent as RestartSvg } from "static/icon/restart.svg";
import { MutedController } from "countdown/actions/Muted";
import { PlayController } from "countdown/actions/PlayController"; // @ is an alias to /src
import { Setting } from "countdown/actions/Setting";

function App() {
  const [tickState, setTickState] = useState(ETickState["暂停"]);
  const [countdowns, setCountdowns] = useState([1500, 300]);
  const [clockRefresh, setClockRefresh] = useState(false);
  const [step, setStep] = useState(0);
  const [muted, setMuted] = useState(false);

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
          muted,
          setMuted,
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
          <Icon
            component={NextSvg}
            onClick={() => {
              setStep(step < countdowns.length - 1 ? step + 1 : 0);
            }}
            className="action"
          ></Icon>

          <MutedController
            className="action action-reload"
            style={{ color: "#fff", fontSize: "24px" }}
          ></MutedController>
          <Icon
            component={RestartSvg}
            onClick={() => {
              handleRefresh();
            }}
            className="action action-reload"
            style={{ color: "#fff", fontSize: "24px" }}
          ></Icon>

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

export default App;
