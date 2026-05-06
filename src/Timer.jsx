import React, { useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = React.useState(0);
  useEffect(() => {
    // 1
    console.log("컴포넌트 마운트됨");
    // 2
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
      console.log("1초마다 실행");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("컴포넌트 언마운트됨");
    };
  }, []);

  return <div>Timer : {seconds}초 </div>;
};

export default Timer;
