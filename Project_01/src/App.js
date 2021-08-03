import React from 'react'
import Apps from "./admin/Apps"
import Form from './Signup/Form';
import UApps from './userLogin/UApps';
import RollS from './RollS';
import RollS1 from './RollS1';

function App() {
  return (
    <div>
      <Apps/>
      <Form/>
      <UApps/>
      <RollS/>
      <RollS1/>
    </div>
  )
}

export default App;
