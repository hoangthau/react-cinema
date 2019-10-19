import React from "react";

import s from "./Payment.module.css";

const Payment = ({ money }) => (
  <div className={s.main}>
    <div className={s.info}>
      <div>
        <p>Galaxy Tân Bình</p>
        <p>9:10-11:10 | 19/10/2019</p>
      </div>
      <p className={s.money}>{money.toLocaleString("vi")} VND</p>
    </div>
    <button>Thanh toán</button>
  </div>
);

export default Payment;
