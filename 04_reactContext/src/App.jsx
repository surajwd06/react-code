import React from 'react';
import './App.css'
import UserContextProvider from './context/UserContextProvider';

function App() {

  return (
 <>
 <UserContextProvider>
  <h1 className='text-3xl font-bold underline text-red-700'>ReactContext</h1>
 </UserContextProvider>
 </>
  )
}

export default App
