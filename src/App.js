import React from 'react';
import { useState } from 'react/cjs/react.development';
import UserForm from './component/UserForm';
import AddUser from './component/AddUser';

function App() {

  const [usersData,setUserData] = useState('')

  const saveList = (user) => {
    setUserData((userdetails) => {
      return [...userdetails,{userName:user.name,userAge:user.age ,id:Math.random().toString}]
    })
  }

  return (
    <div>
      <UserForm usersList={saveList}/>
      <AddUser appendUser={usersData}/>
    </div>
  );
}

export default App;
