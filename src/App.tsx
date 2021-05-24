import { Link } from 'react-router-dom';

import { Switch, Route, Redirect } from 'react-router-dom';


import NewRoomz from './components/NewRoomz';
import Roomz from './components/Roomz';
import RoomzContextProvider from './store/roomz-context';

import MainNavigation from './components/Layout/MainNavigation';
import HomePage from './pages/HomePage';
import CreateEditPage from './pages/CreateEditPage';





function App() {




  return (

      <Switch>











      <RoomzContextProvider>

          <MainNavigation />

          <Route path='/' exact>

          <NewRoomz />
          <Roomz />


        


        </Route>
        <Route path='/CreateEditPage'>
        <CreateEditPage />

        </Route>


      </RoomzContextProvider>










        <Route path='*'>
          <Redirect to='/'/>

        </Route>
      </Switch>


  );
}

export default App;
