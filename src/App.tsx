import React, { FunctionComponent } from 'react';
import './App.css';
import ToDoMain from './todo/';
import TopNavbar from './components/headerComponent/TopNavbar';
import MainPage from './chs/mainPage/MainPage';


const App: FunctionComponent<{ props?: any }> = (props) => {
  return <div>
    <TopNavbar appTitle={"CHS"}/>
    <MainPage />
  </div>
}

export default App;
