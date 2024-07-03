import { useDroppable } from '@dnd-kit/core';
import Disc from './Disc';

export default function Tower({ discs, id }) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  const style = {
    backgroundColor: isOver ? 'lightgreen' : '#2a2a2a',
  };

  return (
    <div ref={setNodeRef} className="tower" style={style}>
      {discs.map((size, index) => (
        <Disc key={index} size={size} towerId={id} />
      ))}
    </div>
  );
}
