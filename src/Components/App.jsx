import { useState } from 'react'
import Hero from './hero.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'


function App() {
  let [nav, setnav] = useState('bg-slate-800')
  let [bg, setbg] = useState('bg-gray-900')
  let [tx, settx] = useState('text-white')

  return (
    <>
      <Navbar nav={nav} setnav={setnav} bg={bg} setbg={setbg} tx={tx} settx={settx}/>
      <Hero bg={bg} tx={tx}/>
      <Footer nav={nav} bg={bg} tx={tx} />
    </>
  );
}
export default App;
