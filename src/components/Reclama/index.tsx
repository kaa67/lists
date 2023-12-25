import { useEffect, useState } from 'react';

import './styles.css';

const parts = ['Самый', 'лучший', 'в мире', 'список', 'каталогов'];

const Reclama = () => {
  const [tileIndex, setTileIndex] = useState(0);

  useEffect(
    () => {
      setTimeout(
        () => {
          const next = tileIndex + 1;
          const checkedNext = next < parts.length ? next : 0;
          setTileIndex(checkedNext);
        },
        100
      );
    },
    [tileIndex]
  );

  return (
    <div>
      {parts.map(
        (item, index) => {
          const className = index === tileIndex ? 'superTile' : 'tile';
          return (
            <span className={className}>{item}</span>
          );
        }
      )}
    </div>
  );
};

export default Reclama;
