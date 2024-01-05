import { PauseOutlined, CaretRightOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { ClockContext } from "../context";
import { ETickState } from "../enum";

export function PlayController(props: {} & React.HTMLProps<HTMLElement>) {
  const { setTickState, tickState } = useContext(ClockContext);

  return (
    <>
      {tickState === ETickState["开始"] && (
        <PauseOutlined
          className={props.className}
          style={props.style}
          onClick={() => {
            setTickState(ETickState["暂停"]);
          }}
        ></PauseOutlined>
      )}
      {tickState === ETickState["开始"] || (
        <CaretRightOutlined
          className={props.className}
          style={props.style}
          onClick={() => {
            setTickState(ETickState["开始"]);
          }}
        ></CaretRightOutlined>
      )}
    </>
  );
}
