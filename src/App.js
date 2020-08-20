import React, { useState } from 'react';
import MainExpense from './components/MainExpense';
import ViewExpense from './components/ViewExpense';
import AddExpense from './components/AddExpense';
import {TransactionProvider} from './store/globalContext'
import './App.css';

function App() {
  
  let[mode, setMode] = useState(true);

  return (
    <TransactionProvider>
      <div className={` ${mode ? 'LightApp' : 'DarkApp'} `}>
        <div className={` ${mode ? 'LightAppToggle' : 'DarkAppToggle'} `}>
          <button onClick={()=> setMode(!mode)}> {` ${mode ? 'Light Mode' : 'Dark Mode'} `} </button>
        </div>
        <div className={` ${mode ? 'LightAppMain' : 'DarkAppMain'} `}>
            <MainExpense mode={mode}/>
        </div>

        <div className={` ${mode ? 'LightAppMain' : 'DarkAppMain'} `}>
          <ViewExpense mode={mode}/>
        </div>
        
        <div className={` ${mode ? 'LightAppMain' : 'DarkAppMain'} `}>
          <AddExpense mode={mode}/>
        </div>
      </div>
    </TransactionProvider>
  );
}

export default App;
