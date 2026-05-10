import React, { useEffect, useState } from "react";

export default function Countdown({ expiryDate }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const difference = expiryDate - Date.now();
      if (difference <= 0) {
        setTimeLeft("Expired");
        clearInterval(interval);
      } else {
        const totalSeconds = Math.floor(difference / 1000);
        const seconds = totalSeconds % 60;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const hours = Math.floor(totalSeconds / 3600);

        setTimeLeft(`${hours}h ${minutes}m ${seconds}s `);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expiryDate]);

  return <div className="de_countdown">{timeLeft}</div>;
}