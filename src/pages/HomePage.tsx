import { Link } from 'react-router-dom';

import React, { useContext } from 'react';

import CreateEditPage from './CreateEditPage';
import { RoomzContext } from '../store/roomz-context';
import classes from './Roomz.module.css';


const HomePage: React.FC = () => {
    const roomzCtx = useContext(RoomzContext);
  return (

    <div  >
    <Link to='/CreateEditPage'>

      <button>yesyes</button>

      </Link>

    </div>

  );





};

export default HomePage;
