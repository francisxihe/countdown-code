import { ClockContext } from "countdown/context";
import { ETickState } from "countdown/enum";
import { useContext, useEffect } from "react";
import chimeUrl from "static/music/chime.wav";
import rainUrl from "static/music/water-drop.wav";

const audio = new Audio();

export function BackgroundMusic(props: { tickState: ETickState }) {
  const { muted } = useContext(ClockContext);
  const { tickState } = props;

  /**
   * 开始/暂停
   * 只受播放状态控制
   */
  useEffect(() => {
    if (tickState === ETickState["开始"]) {
      audio.loop = true;
      audio.src = rainUrl;
      audio.onloadeddata = () => {
        audio.play();
        audio.loop = true;
      };
    }
    if (tickState === ETickState["暂停"]) {
      audio.pause();
    }
    if (tickState === ETickState["结束"]) {
      audio.src = chimeUrl;
      audio.onloadeddata = () => {
        audio.play();
        audio.loop = false;
      };
    }
  }, [tickState]);

  useEffect(() => {
    if (tickState === ETickState["开始"]) {
      audio.volume = muted === true ? 0 : 0.1;
    }
    if (tickState === ETickState["结束"]) {
      audio.volume = muted === true ? 0 : 1;
    }
  }, [tickState, muted]);

  return <></>;
}
