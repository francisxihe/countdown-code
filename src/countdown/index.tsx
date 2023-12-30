// import { ReloadOutlined } from "@ant-design/icons-vue";
// import { defineComponent, ref } from "@vue/runtime-core";
import { useState } from "react";
import { CountDown } from "./clock/countdown";
import "./index.scss";
import { PlayController } from "./actions/playController"; // @ is an alias to /src
import { Setting } from "./actions/setting";
// import setting from "./components/actions/setting.vue"; // @ is an alias to /src

export function Home() {
  const [clockState, setClockState] = useState(false);
  const [countdown, setCountdown] = useState(1500);
  const [clockRefresh, setClockRefresh] = useState(false);
  let form = { countdown: 1500 };

  const handleRefresh = () => {
    setClockRefresh(true);
    setClockState(false);
    setCountdown(form.countdown);
  };

  const onConfirmSetting = (settingForm: any): void => {
    form = settingForm;
    handleRefresh();
  };

  return (
    <>
      {/* // clock :countdown="1500"></clock> */}

      <div className="clock">
        <CountDown
          countdown={countdown}
          state={clockState}
          refresh={clockRefresh}
        ></CountDown>
      </div>
      <div className="actions">
        <PlayController
          className="action action-play"
          state={clockState}
          setState={setClockState}
        ></PlayController>
        {/* 
    <reload-outlined
      class="action action-reload"
      @click="
        () => {
          handleRefresh();
        }
      "
      :style="{ color: '#fff', fontSize: '30px' }"
    ></reload-outlined> */}
        <Setting
      className="action action-setting"
      onConfirm={onConfirmSetting}
    ></Setting>
      </div>
    </>
  );
}
