import { DndContext } from '@dnd-kit/core';
import Tower from './Tower';
import { useState } from 'react';

const initialDiscs = [6, 5, 4, 3, 2, 1];

export default function Game() {
  const [towers, setTowers] = useState([initialDiscs, [], []]);

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
      overTower.push(disc);

      const newTowers = [...towers];
      newTowers[fromTowerIndex] = activeTower;
      newTowers[toTowerIndex] = overTower;

      setTowers(newTowers);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <main className="game">
        {towers.map((discs, index) => (
          <Tower key={index} id={`tower-${index}`} discs={discs} />
        ))}
      </main>
    </DndContext>
  );
}
