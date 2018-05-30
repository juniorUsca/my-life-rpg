import React from 'react'

import ToDoList from "./components/ToDoList.jsx";

function App(props) {
  return (
    <main role='application' className='contaniner'>
      <ToDoList />
    </main>
  )
}

export default App;