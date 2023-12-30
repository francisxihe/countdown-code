// props: {
//     total: {
//       type: Number,
//       default: 9,
//     },
//     current: {
//       type: Number,
//       default: -1,
//     },

import { useState } from "react";
import "./flip.scss"

//   },
interface IProps {
  total: number;
  current: number;
}

export function FlipItem(props: IProps) {
  const [before, setBefore] = useState(
    props.total === props.current ? -1 : props.total
  );

  const [isPlay, setIsPlay] = useState(false);

  //   watch: {
  //     current(current, preCurrent) {
  //       this.before = preCurrent;
  //       if (!this.isPlay) {
  //         this.isPlay = true;
  //       }
  //     },
  //   },

  function renderItem(num: number) {
    return (
      <li
        className={`item ${props.current === num ? "active" : ""} ${
          num === before ? "before" : ""
        }`}
        //   v-for="(item, key) in total + 1"
        key={num}
      >
        <div className="up">
          <div className="shadow"></div>
          <div className="inn">{num}</div>
        </div>
        <div className="down">
          <div className="shadow"></div>
          <div className="inn">{num}</div>
        </div>
      </li>
    );
  }

  return (
    <div className={isPlay ? "play" : ""}>
      <ul className="flip">{}</ul>
    </div>
  );
}
