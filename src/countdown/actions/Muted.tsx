import { useContext } from "react";
import { ClockContext } from "../context";
import Icon from "@ant-design/icons/lib/components/Icon";
import { ReactComponent as DefaultSvg } from "static/icon/media_vol_default.svg";
import { ReactComponent as MutedSvg } from "static/icon/media_vol_mute.svg";

export function MutedController(props: {} & React.HTMLProps<HTMLElement>) {
  const { setMuted, muted } = useContext(ClockContext);

  return (
    <>
      {muted === true && (
        <Icon
          component={MutedSvg}
          className={props.className}
          style={props.style}
          onClick={() => {
            setMuted(false);
          }}
        ></Icon>
      )}
      {muted === true || (
        <Icon
          component={DefaultSvg}
          className={props.className}
          style={props.style}
          onClick={() => {
            setMuted(true);
          }}
        ></Icon>
      )}
    </>
  );
}
