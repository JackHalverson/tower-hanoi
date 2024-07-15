import { useDraggable } from '@dnd-kit/core';
import circle1 from './assets/circle1.png';
import circle2 from './assets/circle2.png';
import circle3 from './assets/circle3.png';
import circle4 from './assets/circle4.png';
import circle5 from './assets/circle5.png';
import circle6 from './assets/circle6.png';

const discImages = {
  1: circle1,
  2: circle2,
  3: circle3,
  4: circle4,
  5: circle5,
  6: circle6,
};

export default function Disc({ size, towerId }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `disc-${towerId}-${size}`,
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
  };

  return (
    <div className='thing'>
    <div ref={setNodeRef} style={style} className="disc" {...attributes} {...listeners}>
      <img src={discImages[size]} alt={`Disc ${size}`} />
      
    </div>
    <div className='disc-spacer'></div>
    </div>
  );
}
