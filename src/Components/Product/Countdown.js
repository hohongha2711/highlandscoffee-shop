import React, { useState, useEffect } from "react";
import './style.scss'
const Countdown = () => {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 5); // Cộng thêm 5 ngày

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown(null);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown(
          `${days} : ${hours} : ${minutes} : ${seconds}`
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {countdown && countdown.split(":").map((value, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <span className="time-dot">:</span>}
          <b>{value}</b>
        </React.Fragment>
      ))}
    </>
  );
};

export default Countdown;