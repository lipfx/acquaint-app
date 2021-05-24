import { Link } from 'react-router-dom';
import logo from './logo.jpg';


import classes from './RoomzItem.module.css';


const RoomzItem: React.FC<{ text: string; onRemoveRoomz: () => void }> = (props) => {
  return (
    <div className={classes.item}>
  <h2> Room Name:</h2>
    <li className={classes.item}>
    <h1>
      {props.text}
      </h1>

        <img className={classes.image} src={logo} alt="Logo" />


      </li>

      <li className={classes.form}>
      <button className={classes.form}>ENTER / CHANGE NAME</button>
      <button onClick={props.onRemoveRoomz}>DELETE ON CLICK</button>
      <Link to='/CreateEditPage'>
        <button >EDIT</button>
        </Link>
</li>
      <li >
        <form><h2>Description:</h2></form>
      </li>

        <div className={classes.item}>

        background-color: #f7f5ef;order-radius: 4px;border: none;border-bottom: 2px solid #494844;border-bottom-right-radius: 0;border-bottom-left-radius: 0;margin-bottom: 0.5rem; order-radius: 4pxbackground-color: #f7f5ef;border: none;
      border-bottom: 2px solid #494844;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      margin-bottom: 0.5rem;
      order-radius: 4px;
      background-color: #f7f5ef;
      border: none;
      border-bottom: 2px solid #494844;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      margin-bottom: 0.5rem;order-radius: 4px;
      background-color: #f7f5ef;
      border: none;
      border-bottom: 2px solid #494844;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      margin-bottom: 0.5rem;
        </div>
      <div >

      </div>
            <li >
              <form className={classes.form2}><h2> Select type:
              <button >STANDARD</button>
              <button >DELUX</button>
               </h2>
              </form>
            </li>

        <div className={classes.item}>standard</div>
        <div className={classes.item}>delux</div>
</div>
  );
};

export default RoomzItem;
// <li className={classes.edit}>
//   <button >  delete on click</button>
//     <button >Edit Page</button>
