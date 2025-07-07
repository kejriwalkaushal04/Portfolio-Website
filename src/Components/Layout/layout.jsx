import React from 'react'
import Header from './Navbar.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'

const layout = (prop) => {
  return (
    <div>
        <Header nav={prop.nav} setnav={prop.setnav} bg={prop.bg} setbg={prop.setbg} tx={prop.tx} settx={prop.settx}/>
        <Outlet/>
        <Footer nav={prop.nav} setnav={prop.setnav} bg={prop.bg} setbg={prop.setbg} tx={prop.tx} settx={prop.settx}/>
    </div>
  )
}

export default layout
