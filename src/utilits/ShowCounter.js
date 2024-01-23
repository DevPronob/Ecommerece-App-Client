import { useEffect, useState } from 'react';
import moment from "moment"

export const getTimeFromLocalStorage = () => {
  const result = localStorage.getItem('time');
  const time = result ? JSON.parse(result) : null;
  return time;
};

const useCountdown = (targetDate) => {
  const targetTime = moment("2024-01-27");


  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  localStorage.setItem('time', JSON.stringify(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  // <span>{timeBetween.days()}d </span>
  // <span>{timeBetween.hours()}h </span>
  // <span>{timeBetween.minutes()}min </span>
  // <span>{timeBetween.seconds()}s </span>

  return [timeBetween.days(),timeBetween.hours(),timeBetween.minutes(),timeBetween.seconds()]
  // const countDownDate = new Date(targetDate).getTime();

  
  // const [countDown, setCountDown] = useState(
  //   countDownDate - new Date().getTime()
  // );

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCountDown(countDownDate - new Date().getTime());
  //   }, 100);

  //   return () => clearInterval(interval);
  // }, [countDownDate]);

  // return getReturnValues(countDown);
};

// const getReturnValues = (countDown) => {
//   // calculate time left
//   const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

//   return [days, hours, minutes, seconds];
// };

export { useCountdown };