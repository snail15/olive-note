import React from 'react';
import Olive from '../../models/olive.model';

const Note: React.FC<Olive> = (olive: Olive) => {
  return (
    <div>
      <p>{olive.name}</p>
      <p>{olive.origin}</p>
      <p>{olive.id}</p>
    </div>
  );
};

export default Note;
