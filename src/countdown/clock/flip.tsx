import { useEffect, useState } from "react";
import "./flip.scss";

interface IProps {
  total: number;
  current: number;
}

export function FlipItem(props: IProps) {
  const { current } = props;
  const [isPlay, setIsPlay] = useState(false);
  const [preCurrent, setPreCurrent] = useState(current);

  const getClassName = (index: number) => {
    let className = "item";

    if (current === index) {
      className += " active";
    }

    if (preCurrent === index) {
      className += " before";
    }
    return className;
  };

  useEffect(() => {
    return () => {
      setPreCurrent(current);
    };
  }, [current]);

  useEffect(() => {
    if (current === preCurrent) {
      return;
    }
    setIsPlay(true);
  }, [current, preCurrent]);

  return (
    <div className={isPlay ? "play" : ""}>
      <ul className="flip">
        {Array.from({ length: props.total + 1 }, (_, index) => (
          <li className={getClassName(index)} key={index}>
            <div className="up">
              <div className="shadow"></div>
              <div className="inn">{index}</div>
            </div>
            <div className="down">
              <div className="shadow"></div>
              <div className="inn">{index}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
