import Tower from './Tower';

const initialDiscs = [6, 5, 4, 3, 2, 1];

export default function Game() {
  return (
    <main className="game">
      <Tower discs={initialDiscs} />
      <Tower discs={[]} />
      <Tower discs={[]} />
    </main>
  );
}
