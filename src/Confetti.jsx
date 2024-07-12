import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function Confetti() {
  useEffect(() => {
    confetti({
        particleCount: 2000,
        gravity: .7,
        startVelocity: 150,
        spread: 100,
        origin: { y: 2 },
      });
  }, []);

  return null;
}
