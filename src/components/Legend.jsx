import React from "react";

import s from "./Legend.module.css";

const Legend = () => (
  <div className={s.wrap}>
    <div className={s.left}>
      <div>
        <span className={`${s.circle} ${s.selected}`} />
        <span>Đã đặt</span>
      </div>
      <div>
        <span className={`${s.circle} ${s.selecting}`} />
        <span>Đang chọn</span>
      </div>
    </div>
    <div className={s.right}>
      <div>
        <span className={s.circle} />
        <span>Standard - 60K</span>
      </div>
      <div>
        <span className={`${s.circle} ${s.vip}`} />
        <span>VIP - 90K</span>
      </div>
      <div>
        <span className={`${s.circle} ${s.deluxe}`} />
        <span>Deluxe - 110K</span>
      </div>
    </div>
  </div>
);

export default Legend;
