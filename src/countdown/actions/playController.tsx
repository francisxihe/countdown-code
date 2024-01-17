import { useContext } from "react";
import { ClockContext } from "../context";
import { ETickState } from "../enum";
import Icon from "@ant-design/icons/lib/components/Icon";
import { ReactComponent as PlaySvg } from "static/icon/media_play.svg"
import { ReactComponent as PauseSvg } from "static/icon/media_pause.svg"

export function PlayController(props: {} & React.HTMLProps<HTMLElement>) {
  const { setTickState, tickState } = useContext(ClockContext);

  return (
    <>
      {tickState === ETickState["开始"] && (
        <Icon component={PauseSvg}
          className={props.className}
          style={props.style}
          onClick={() => {
            setTickState(ETickState["暂停"]);
          }}
        ></Icon>
      )}
      {tickState === ETickState["开始"] || (
        <Icon component={PlaySvg}
          className={props.className}
          style={props.style}
          onClick={() => {
            if (tickState === ETickState["暂停"])
              setTickState(ETickState["开始"]);
          }}
        ></Icon>
      )}
    </>
  );
}
