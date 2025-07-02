import { useState } from "react";
import dark from '../../images/darkmode.png';
import light from '../../images/lightmode.png';
import {Link} from 'react-router-dom'

function Navbar(prop) {
  let [mode, setmode] = useState(dark)
  const [isMenuOpen, setisMenuOpen] = useState(false);

  function update() {
    if (prop.nav === 'bg-slate-800') {
      prop.setnav('bg-white')
      prop.setbg('bg-gradient-to-r from-blue-400 to-emerald-400')
      prop.settx('text-black')
      setmode(light)
    }
    else {
      prop.setnav('bg-slate-800');
      prop.setbg('bg-gray-900');
      prop.settx('text-white')
      setmode(dark)
    }
  }
  return (
    <>
      <div className={`flex ${prop.nav} ${prop.tx} justify-between place-items-center px-8 py-6 md:px-32`} >
        <Link to="/Portfolio/" className="text-xl font-bold ">Kaushal's Portfolio</Link>


        <ul className="hidden xl:flex justify-end gap-4 font-semibold text-base ">
          <li><Link to="/Portfolio/" className="hover:text-blue-400" target="blank">Home</Link></li>
          <li><Link to="/Portfolio/Resume" className="hover:text-blue-400" target="blank">Resume</Link></li>
          <li><Link to="/Portfolio/Projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link to="/Portfolio/Certifications" className="hover:text-blue-400">Certifications</Link></li>
          <li><Link to="/Portfolio/Contact" className="hover:text-blue-400 ">Contact</Link></li>
          <li><img src={mode} alt="toggle-button" className="flex align-middle size-7 " onClick={update} /></li>
        </ul>

        <i className="bx bx-menu xl:hidden block text-5xl cursor pointer" onClick={() => setisMenuOpen(!isMenuOpen)}></i>

        <ul className={`absolute xl:hidden top-24 left-0 w-full ${prop.nav} py-2 flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          style={{ transition: "transfrom 0.3s ease,opacity 0.3s ease" }}>
          <li><Link to="/Portfolio/" className=" list-none w-full text-center p-4 hover:text-blue-400 transition-all cursor-pointer" target="blank">Home</Link></li>
          <li><Link to="#Resume" className=" list-none w-full text-center p-4 hover:text-blue-400 transition-all cursor-pointer" target="blank">Resume</Link></li>
          <li><Link to="/Portfolio/Projects" className=" list-none w-full text-center p-4 hover:text-blue-400 transition-all cursor-pointer" target="blank">Projects</Link></li>
          <li><Link to="/Portfolio/Certifications" className=" list-none w-full text-center p-4 hover:text-blue-400 transition-all cursor-pointer" target="blank">Certifications</Link></li>
          <li><Link to="/Portfolio/Contact" className=" list-none w-full text-center p-4 hover:text-blue-400 transition-all cursor-pointer" target="blank">Contact</Link></li>
          <li><img src={mode} alt="toggle-button" className="list-none size-7 cursor-pointer" onClick={update} /></li>

        </ul>
      </div>
    </>
  )
}

export default Navbar

// #FFFFFF ,#F9FAFB , #101828 ,#1E2939
