import React, { useState } from 'react';

import Roomz from '../models/roomz';

type RoomzContextObj = {
  items: Roomz[];
  addRoomz: (text: string) => void;
  removeRoomz: (id: string) => void;
};

export const RoomzContext = React.createContext<RoomzContextObj>({
  items: [],
  addRoomz: () => {},
  removeRoomz: (id: string) => {},
});

const RoomzContextProvider: React.FC = (props) => {
  const [roomz, setRoomz] = useState<Roomz[]>([]);

  const addRoomzHandler = (roomzText: string) => {
    const newRoomz = new Roomz(roomzText);

    setRoomz((prevRoomz) => {
      return prevRoomz.concat(newRoomz);
    });

  };

  const removeRoomzHandler = (roomzId: string) => {
    setRoomz((prevRoomz) => {
      return prevRoomz.filter((roomz) => roomz.id !== roomzId);
    });
  };

  const contextValue: RoomzContextObj = {
    items: roomz,
    addRoomz: addRoomzHandler,
    removeRoomz: removeRoomzHandler,
  };

  return (
    <RoomzContext.Provider value={contextValue}>
      {props.children}
    </RoomzContext.Provider>
  );
};

export default RoomzContextProvider;
