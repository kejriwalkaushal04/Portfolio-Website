import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home/Home.jsx';
import Navbar from './home/Navbar.jsx';
import Projects from './projects.jsx';
import Certifications from './certifications.jsx';
import Footer from './home/Footer.jsx';
import Resume from './Resume.jsx';
import Contact from './Contact.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

function HomePage({ nav, setnav, bg, setbg, tx, settx }) {
  return (
    <>
      <Navbar nav={nav} setnav={setnav} bg={bg} setbg={setbg} tx={tx} settx={settx} />
      <Home bg={nav} tx={tx} />
      <Footer nav={nav} bg={bg} tx={tx} />
    </>
  );
}

function ResumePage({ nav, setnav, bg, setbg, tx, settx }) {
  return (
    <>
      <Navbar nav={nav} setnav={setnav} bg={bg} setbg={setbg} tx={tx} settx={settx} />
      <Resume bg={nav} tx={tx} />
      <Footer nav={nav} bg={bg} tx={tx} />
    </>
  );
}

function ProjectsPage({ nav, setnav, bg, setbg, tx, settx }) {
  return (
    <>
      <Navbar nav={nav} setnav={setnav} bg={bg} setbg={setbg} tx={tx} settx={settx} />
      <Projects />
      <Footer nav={nav} bg={bg} tx={tx} />
    </>
  );
}

function CertificationsPage({ nav, setnav, bg, setbg, tx, settx }) {
  return (
    <>
      <Navbar nav={nav} setnav={setnav} bg={bg} setbg={setbg} tx={tx} settx={settx} />
      <Certifications />
      <Footer nav={nav} bg={bg} tx={tx} />
    </>
  );
}

function ContactPage({ nav, setnav, bg, setbg, tx, settx }) {
  return (
    <>
      <Navbar nav={nav} setnav={setnav} bg={bg} setbg={setbg} tx={tx} settx={settx} />
      <Contact bg={nav} tx={tx}/>
      <Footer nav={nav} bg={bg} tx={tx} />
    </>
  );
}

function App() {
  const [nav, setnav] = useState('bg-slate-800');
  const [bg, setbg] = useState('bg-gray-900');
  const [tx, settx] = useState('text-white');

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/Portfolio"
          element={<HomePage nav={nav} setnav={setnav} bg={bg} setbg={setbg} tx={tx} settx={settx} />}
        />
        <Route
          path="/Portfolio/Resume"
          element={<ResumePage nav={nav} setnav={setnav} bg={bg} setbg={setbg} tx={tx} settx={settx} />}
        />
        <Route
          path="/Portfolio/Projects"
          element={<ProjectsPage nav={nav} setnav={setnav} bg={bg} setbg={setbg} tx={tx} settx={settx} />}
        />
        <Route
          path="/Portfolio/Certifications"
          element={<CertificationsPage nav={nav} setnav={setnav} bg={bg} setbg={setbg} tx={tx} settx={settx} />}
        />
        <Route
          path="/Portfolio/Contact"
          element={<ContactPage nav={nav} setnav={setnav} bg={bg} setbg={setbg} tx={tx} settx={settx} />}
        />
      </>
    )
  );

  return (
    <div className={`${bg} ${tx} flex flex-col justify-between gap-6`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
