import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";

export function PlayController(
  props: {
    state: boolean;
    setState: (data: boolean) => void;
  } & React.HTMLProps<HTMLElement>
) {
  const { state, setState } = props;

  return (
    <>
      {state || (
        <PauseCircleOutlined
          className={props.className}
          onClick={() => {
            setState(!state);
          }}
          style={{ color: "#fff", fontSize: "30px" }}
        ></PauseCircleOutlined>
      )}
      {state && (
        <PlayCircleOutlined
          className={props.className}
          onClick={() => {
            setState(!state);
          }}
          style={{ color: "#fff", fontSize: "30px" }}
        ></PlayCircleOutlined>
      )}
    </>
  );
}
