import { useRef, useContext } from 'react';

import { RoomzContext } from '../store/roomz-context';
import classes from './NewRoomz.module.css';

const NewRoomz: React.FC = () => {
  const roomzCtx = useContext(RoomzContext);

  const roomzTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();



    const enteredText = roomzTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {

      return;
    }

    roomzCtx.addRoomz(enteredText);

  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Enter room name</label>
      <input type='text' id='text' ref={roomzTextInputRef} />
      <button>ADD ROOM</button>
    </form>

  );
};

export default NewRoomz;
