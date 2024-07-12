import { DndContext } from '@dnd-kit/core';
import Tower from './Tower';
import { useState } from 'react';
import Confetti from './Confetti';
import { notify } from './toastify';

const initialDiscs = [6, 5, 4, 3, 2, 1];

export default function Game() {
  const [towers, setTowers] = useState([initialDiscs, [], []]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [moveCount, setMoveCount] = useState(0);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const fromTowerIndex = parseInt(active.id.split('-')[1]);
    const toTowerIndex = parseInt(over.id.split('-')[1]);

    console.log("Drag Ended: ", { active, over });
    console.log("From Tower Index: ", fromTowerIndex);
    console.log("To Tower Index: ", toTowerIndex);
    console.log("Towers: ", towers);

    if (isNaN(fromTowerIndex) || isNaN(toTowerIndex)) {
      console.error("Invalid tower index");
      return;
    }

    if (fromTowerIndex !== toTowerIndex) {
      const activeTower = [...towers[fromTowerIndex]];
      const overTower = [...towers[toTowerIndex]];

      if (!Array.isArray(activeTower) || !Array.isArray(overTower)) {
        console.error("Towers are not arrays");
        return;
      }

      const disc = activeTower.pop();

      if (overTower.length === 0 || disc < overTower[overTower.length - 1]) {
        overTower.push(disc);

        const newTowers = [...towers];
        newTowers[fromTowerIndex] = activeTower;
        newTowers[toTowerIndex] = overTower;

        setTowers(newTowers);
        setMoveCount(moveCount + 1);

        if (toTowerIndex === 2 && overTower.length === initialDiscs.length) {
          setShowConfetti(true);
          notify("Congratulations! You have solved the puzzle!", "success");
          setTimeout(() => setShowConfetti(false), 3000);
        }
      } else {
        activeTower.push(disc);
        notify("Invalid move! You cannot place a larger disc on a smaller one.", "error");
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="move-counter">Moves: {moveCount}</div>

      <main className="game">
        {towers.map((discs, index) => (
          <Tower key={index} id={`tower-${index}`} discs={discs} />
        ))}
        {showConfetti && <Confetti />}
      </main>
    </DndContext>
  );
}
