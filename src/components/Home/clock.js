import { useEffect, useState } from "react";

/* Component to get date object and convert to current time in hours minutes and seconds */
export default function Clock() {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const d = new Date();

      const hour = addZero(d.getHours());
      const minute = addZero(d.getMinutes());
      const second = addZero(d.getSeconds());

      /* Convert to double digits if singular number */
      function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }

      const currentTime = hour + " : " + minute + " : " + second;

      setTime(currentTime);
    }, 1000);
  }, []);

  return <div>{time}</div>;
}
