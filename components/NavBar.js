import {motion} from 'framer-motion'
import { useState, useEffect } from 'react'

import {AiOutlineMenuUnfold} from 'react-icons/ai'
import {AiOutlineMenuFold} from 'react-icons/ai'


const MenuBar = () => {

  const [openMenu, setOpenMenu] = useState(false)
  

  useEffect(()=>{
    console.log(openMenu)
  }, [openMenu])

  
  const menuVariants = {
    open:{
      right: 0,
      position: "fixed"
    },
    closed:{
      position: "absolute",
      right: "-70vw",
    }
  }
  const burgerVariants = {
    open:{
      left: 20
    },
    closed:{
      
      left: -50
    }
  }

  return (
    <motion.div 
      style={{
        background: "coral",
        height: "100vh",
        width: "70vw",
        top: 0,

      }}
      variants={menuVariants}
      animate={openMenu ? "open" : "closed"}
      transition={{ type: "tween", stiffness: 10 }}

    >

      <motion.div
        style={{
          position: "absolute",
          // border:"2px solid blue",
          width:"fit-content",
          fontSize: 30,
          marginTop:20,
        }}
        variants={burgerVariants}
        animate={openMenu ? "open":"closed"}
      >

        {openMenu ? 
          <AiOutlineMenuUnfold onClick={ ()=> setOpenMenu(openMenu => !openMenu) }/> 
          : 
          <AiOutlineMenuFold onClick={ ()=> setOpenMenu(openMenu => !openMenu) }/>
        }

      </motion.div>
      <div></div>
      
    </motion.div>
  )
}

export default function NavBar({openNav}){

    const navVariants = {
        open:{top: 0},
        closed:{top: "-20%"}
    }

    return (
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
        
        <MenuBar />

      </motion.div>
    )
}