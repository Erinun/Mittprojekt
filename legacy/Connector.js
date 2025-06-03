import React, { useEffect, useState } from 'react';

function Connector({ startRef, endRef }) {
  const [d, setD] = useState('');

  useEffect(() => {
    function updatePath() {
      if (startRef.current && endRef.current) {
        const startRect = startRef.current.getBoundingClientRect();
        const endRect = endRef.current.getBoundingClientRect();
        const startX = startRect.right;
        const startY = startRect.top + startRect.height / 2;
        const endX = endRect.left;
        const endY = endRect.top + endRect.height / 2;
        const offset = Math.abs(endX - startX) / 4;
        // Skapa en cubic bezier-kurva
        const newD = `M ${startX},${startY} C ${startX + offset},${startY} ${endX - offset},${endY} ${endX},${endY}`;
        setD(newD);
      }
    }
    updatePath();
    window.addEventListener('resize', updatePath);
    return () => window.removeEventListener('resize', updatePath);
  }, [startRef, endRef]);

  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      }}
    >
      <path d={d} stroke="#5129ff" strokeWidth="2" fill="none" />
    </svg>
  );
}

export default Connector;
