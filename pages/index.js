

import Horario from './Horario'
import Localizacion from './Localizacion'
import { useState, useEffect} from 'react'

import NavBar from '../components/NavBar'


export default function Home() {


  const [openNav, setIsOpenNav] = useState(true);
  const toggleNav = (b) => {
    setIsOpenNav(b)
  }



  



  return (
    <div className="container">

      <NavBar openNav={openNav}/>

      <h1 style={{margin: "100px 0 0", textAlign:"center"}}>Home Page</h1>

      <div style={{ height: 1000, width: "70vw", margin:"20px auto", background:"#414a4c", boxShadow:"inset 5px 0px 12px 2px black"}}></div>

      <div className="widgetholder">
        <Horario toggleNav={toggleNav}/>
        <Localizacion toggleNav={toggleNav}/>
      </div>
      <div className="widgetholder">
        <Localizacion toggleNav={toggleNav}/>
        <Horario toggleNav={toggleNav}/>

      </div>
      
        
        
      

      

    </div>
  )
}
