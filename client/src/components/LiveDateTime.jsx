import { useState, useEffect } from "react";

const LiveDateTime = ({ locale = "en-US", options }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  // Default options for full date & time
  const formatOptions = options || {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  return <span>{currentTime.toLocaleString(locale, formatOptions)}</span>;
};

export default LiveDateTime;
