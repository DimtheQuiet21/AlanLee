import { useState } from 'react'
import {Outlet} from 'react-router-dom';
import Nav from './components/Nav';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      {/* Todo: Fill in the appropriate component so that the user will conditionally see the appropriate view based on the URL */}
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App
