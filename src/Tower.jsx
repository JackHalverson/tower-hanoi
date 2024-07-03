import Disc from './Disc';

export default function Tower({ discs }) {
  return (
    <div className="tower">
      {discs.map((size, index) => (
        <Disc key={index} size={size} />
      ))}
    </div>
  );
}
