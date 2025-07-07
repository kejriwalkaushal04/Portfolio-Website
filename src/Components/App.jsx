import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from '../Components/Layout/layout.jsx'
import Home from './Home.jsx'
import Resume from './Resume.jsx'
import Projects from './projects.jsx'
import Contact from './Contact.jsx'


function App() {
  const [nav, setnav] = useState('bg-white');
  const [bg, setbg] = useState('bg-gray-100');
  const [tx, settx] = useState('text-black');

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout nav={nav} setnav={setnav} bg={bg} setbg={setbg} tx={tx} settx={settx} />}>
        <Route path='' element={<Home nav={nav} setnav={setnav} bg={bg} setbg={setbg} tx={tx} settx={settx} />} />
        <Route path='Resume' element={<Resume nav={nav} setnav={setnav} bg={bg} setbg={setbg} tx={tx} settx={settx} />} />
        <Route path='Projects' element={<Projects nav={nav} setnav={setnav} bg={bg} setbg={setbg} tx={tx} settx={settx} />} />
        <Route path='Contact' element={<Contact nav={nav} setnav={setnav} bg={bg} setbg={setbg} tx={tx} settx={settx} />} />
      </Route>
    )
  )

  return (
    <div className={`min-h-screen w-screen ${bg} ${tx}`}>
      <RouterProvider router={router} />
    </div>
  )
}
export default App