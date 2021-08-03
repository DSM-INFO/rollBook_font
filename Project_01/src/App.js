import React from 'react'
import Apps from "./admin/Apps"
import Form from './Signup/Form';
import UApps from './userLogin/UApps';
import RollS from './RollS';

function App() {
  return (
    <div>
      <Apps/>
      <Form/>
      <UApps/>
      <RollS/>    
    </div>
  )
}

export default App;
