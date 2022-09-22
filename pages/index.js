
import styles from '../styles/Home.module.css'

import Horario from './Horario'
import Localizacion from './Localizacion'
import { useState, useEffect} from 'react'
import {motion} from 'framer-motion'

import {AiOutlineMenuUnfold} from 'react-icons/ai'
import {AiOutlineMenuFold} from 'react-icons/ai'


export default function Home() {


  const [openNav, setIsOpenNav] = useState(true);
  const toggleNav = (b) => {
    setIsOpenNav(b)
  }


  const navVariants = {
    open:{top: 0},
    closed:{top: "-20%"}
  }
  



  return (
    <div className="container">

      <motion.div
        style={{
          position:"fixed",
          zIndex:10,
          padding:"30px 0",
        }} 
        className="header"
        variants={navVariants}
        animate={openNav ? "open" : "closed"}
        
      >
        <div style={{borderRadius:"100%", height: 20, width:20, background:"green", marginLeft:50}}></div>
        {openNav ? <AiOutlineMenuUnfold/> : <AiOutlineMenuFold/>}
      </motion.div>

      <h1 style={{margin: "100px 0 0", textAlign:"center"}}>Home Page</h1>

      <div style={{border: "2px solid pink", height: 1000, width: "70vw", margin:"20px auto"}}></div>

      <div className="widgetholder">
        <Horario toggleNav={toggleNav}/>
        <Localizacion toggleNav={toggleNav}/>
      </div>
      <div className="widgetholder">
        <Horario toggleNav={toggleNav}/>
        <Localizacion toggleNav={toggleNav}/>
      </div>
        
        
      

      

    </div>
  )
}
