import React from "react";

import Legend from "./Legend";
import Zoom from "./Zoom";
import Payment from "./Payment";
import { rows } from "../utils";
import s from "./Cinema.module.css";

class Cinema extends React.Component {
  state = {
    chairs: this.props.chairs,
    selection: 0,
    scale: 0.8
  };

  toggleChair = chair => {
    if (chair.type === "selected") {
      return;
    }
    let { chairs, selection } = this.state;
    const i = chair.pos[0];
    const j = chair.pos[1];
    const currentItem = chairs[i][j];

    const item = { ...currentItem, selecting: !currentItem.selecting };
    if (item.selecting) {
      selection += 1;
    } else {
      selection -= 1;
    }
    if (selection > 6) {
      return;
    }
    chairs[i][j] = item;
    this.setState({ chairs, selection });
  };

  zoomIn = () => {
    this.setState({ scale: this.state.scale + 0.1 });
  };

  zoomOut = () => {
    this.setState({ scale: this.state.scale - 0.1 });
  };

  render() {
    const { chairs, scale, selection } = this.state;
    console.log(chairs);
    return (
      <div>
        <div className={s.cinema}>
          <h2>Spider Man- Nguoi nhen xa nha</h2>
          <p>C13 | 2D Vietnam sub</p>
          <div className={s.screen} />
          <h3 className={s.screenText}>Màn hình</h3>

          <p
            style={{
              color: "red",
              visibility: selection >= 6 ? "visible" : "hidden"
            }}
          >
            Bạn chỉ được chọn tối đa 6 ghế
          </p>
          <div className={s.chairs}>
            <Zoom zoomIn={this.zoomIn} zoomOut={this.zoomOut} />
            <div style={{ transform: `scale(${scale})` }}>
              {chairs.map((row, i) => (
                <div key={i} className={s.row}>
                  <div className={s.rowName}>{rows[i]}</div>
                  {row.map(column => (
                    <div
                      key={column.number}
                      className={`${s.column} ${s[column.type]} ${
                        column.selecting ? s.selecting : ""
                      }`}
                      onClick={() => this.toggleChair(column)}
                    >
                      {column.number}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <Legend />
        </div>
        <Payment money={selection * 70000} />
      </div>
    );
  }
}

export default Cinema;
