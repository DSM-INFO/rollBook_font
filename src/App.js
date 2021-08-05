import React from 'react'
import Apps from "./admin/Apps"
import RollS from './Roll/RollS';
import Form from './Signup/Form';
import UApps from './userLogin/UApps';


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
