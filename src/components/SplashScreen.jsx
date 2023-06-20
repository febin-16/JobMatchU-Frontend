import { useEffect, useState } from 'react';

const SplashScreen = ({ onAnimationComplete }) => {
  const [fillWidth, setFillWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFillWidth(prevWidth => {
        if (prevWidth >= 100) {
          clearInterval(interval);
          if (typeof onAnimationComplete === 'function') {
            onAnimationComplete(); // Call the onAnimationComplete function if it's a function
          }
          return 100;
        }
        return prevWidth + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onAnimationComplete]);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="text-white font-bold text-6xl border-2 relative bg-white">
        <div className="absolute top-0 left-0" />
        <h1
          className="p-5 relative text-5xl font-outline-2 text-transparent bg-gray-900"
          style={{ width: `${fillWidth}%`, height: '100%' }}
        >
          JobMatchu
        </h1>
      </div>
    </div>
  );
};

export default SplashScreen;