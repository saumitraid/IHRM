import logo from './logo.svg';
import './App.css';
import React from 'react';
import Student from './component/Student';
import Reg from './component/Reg';

function App() {
  return (
    <div className='container'>
      {/* <Student name='Sourav' email_id='sourav@gmail.com'/>
      <Student name='Rahul' email_id='rahul@gmail.com'/>
      <Student name='Sayan' email_id='sayan@gmail.com'/> */}
      <Reg/>
    </div>
  );
}

export default App;
