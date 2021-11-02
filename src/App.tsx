import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from '../src/Components/SignIn'
import SignUp from '../src/Components/SignUp'
import DashBoard from '../src/Components/DashBoard'
import PrivacyPolicy from './Components/PrivacyPolicy'
// import NoteState from './Context/notes/noteState'
// import { useState } from 'react';
// import { ISignUp } from './Components/Interfaces/ISignUp'
import UserDataState from './Context/user/userDataState'


function App() {

  // console.log(saveUserData);
  return (
    <UserDataState>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SignUp} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/dashBoard' component={DashBoard} />
          <Route exact path='/privacyPolicy' component={PrivacyPolicy} />
        </Switch>
      </BrowserRouter>
    </UserDataState>
  );
}

export default App;
