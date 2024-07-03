import { DndContext } from '@dnd-kit/core';
import Tower from './Tower';
import { useState } from 'react';

const initialDiscs = [6, 5, 4, 3, 2, 1];

export default function Game() {
  const [towers, setTowers] = useState([initialDiscs, [], []]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeIdParts = active.id.split('-');
    const overIdParts = over.id.split('-');

    const fromTowerIndex = parseInt(activeIdParts[1]);
    const toTowerIndex = parseInt(overIdParts[1]);

    if (isNaN(fromTowerIndex) || isNaN(toTowerIndex)) return;

    const activeTower = towers[fromTowerIndex];
    const overTower = towers[toTowerIndex];

    if (!Array.isArray(activeTower) || !Array.isArray(overTower)) return;

    const disc = activeTower.pop();
    overTower.push(disc);

    const newTowers = [...towers];
    newTowers[fromTowerIndex] = activeTower;
    newTowers[toTowerIndex] = overTower;

    setTowers(newTowers);
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
