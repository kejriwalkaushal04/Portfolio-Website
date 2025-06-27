import { useState } from "react";
import dark from '../images/darkmode.png';
import light from '../images/lightmode.png';

function Navbar(prop) {
  let [mode, setmode] = useState(dark)

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
        <div className={`h-20 ${prop.nav} ${prop.tx} `}>
          <div className="flex justify-between place-items-center p-4 py-6" >
            <a href="./navbar.jsx" className="flex text-xl font-bold ">Kaushal's Portfolio</a>

            <ul className="flex justify-end gap-4 ">
              <li><a href="./navbar.jsx" className="hover:text-blue-400" target="blank">Home</a></li>
              <li><a href="#Resume" className="hover:text-blue-400">Resume</a></li>
              <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
              <li><a href="#certifications" className="hover:text-blue-400">Certifications</a></li>
              <li><a href="#contact" className="hover:text-blue-400 ">Contact</a></li>
              <li><img src={mode} alt="toggle-button" className="flex align-middle size-7 " onClick={update} /></li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Navbar

// #FFFFFF ,#F9FAFB , #101828 ,#1E2939
