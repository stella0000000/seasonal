import React, { useEffect, useState } from "react";

const Loading = () => {
  const [isDisplaying, setIsDisplaying] = useState(true);

  // fix
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDisplaying(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    isDisplaying && (
      <div className="animate-pulse fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-500 text-5xl">
        🌱
      </div>
    )
  );
};

export default Loading;
