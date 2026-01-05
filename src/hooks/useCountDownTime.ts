import { useState, useEffect } from "react";

const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  let currentDate = new Date();
  let targetDate = new Date(year, 0, 15); // January 15th of current year
  if (currentDate > targetDate) {
    targetDate = new Date(year + 1, 0, 15); // January 15th of next year
  }
  let difference = +targetDate - +currentDate;

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const useCountDownTime = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return timeLeft;
};

export default useCountDownTime;
