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

export default function Disc({ size }) {
  return (
    <div className="disc">
      <img src={discImages[size]} alt={`Disc ${size}`} />
    </div>
  );
}
