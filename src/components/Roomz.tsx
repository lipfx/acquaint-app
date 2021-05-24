import React, { useContext } from 'react';

import RoomzItem from './RoomzItem';
import { RoomzContext } from '../store/roomz-context';
import classes from './Roomz.module.css';

const Roomz: React.FC = () => {
  const roomzCtx = useContext(RoomzContext);

  return (
    <ul className={classes.roomz}>
      {roomzCtx.items.map((item) => (
        <RoomzItem
          key={item.id}
          text={item.text}
          onRemoveRoomz={roomzCtx.removeRoomz.bind(null, item.id)}
        />
      ))}
    </ul>
  
  );
};

export default Roomz;
