import {motion} from 'framer-motion'
import { useState, useEffect } from 'react'

import {AiOutlineMenuUnfold} from 'react-icons/ai'
import {AiOutlineMenuFold} from 'react-icons/ai'

import styles from '../styles/Home.module.css'



const MenuBar = ({ openMenu, setOpenMenu, changeflagRef}) => {

  
  // variants that open/close the menu bar
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

  // variants that move horizontal of menu burger
  const burgerVariants = {
    open:{
      left: 20
    },
    closed:{
      
      left: -70
    }
  }

  return (
    <motion.div 
      
      className={styles.menubar}
      variants={menuVariants}
      animate={openMenu ? "open" : "closed"}
      transition={{ type: "tween", stiffness: 10 }}

    >

      <motion.div
        className={styles.menuburger}
        variants={burgerVariants}
        animate={openMenu ? "open":"closed"}
      >

        {openMenu ? 
          <AiOutlineMenuUnfold  onClick={ ()=>setOpenMenu(b => !b) }/> 
          : 
          <AiOutlineMenuFold onClick={  ()=>setOpenMenu(b => !b) }/>
        }

        

      </motion.div>
      <h3 style={{
          marginLeft:100
        }}
        onClick={ () => {
          changeflagRef("horario");
          setOpenMenu(false);
        }}>
          horario
      </h3>
      <h3 style={{
          marginLeft:100
        }}
        onClick={ () => {
          changeflagRef("localizacion");
          setOpenMenu(false);
        }}>
          localizacion
      </h3>
      
    </motion.div>
  )
}

export default function NavBar({openNav, setOpenWidget, changeflagRef, closeAllPages}){

    const [openMenu, setOpenMenu] = useState(false);


    const navVariants = {
        open:{top: 0},
        closed:{top: "-20%"}
    }

    return (
      <motion.div
       
        className={styles.navbar}
        variants={navVariants}
        animate={openNav ? "open" : "closed"}
        
      >
        <div className={styles.logo}
          onClick={ () => closeAllPages()}
        ></div>
        
        <MenuBar openMenu={openMenu} setOpenMenu={setOpenMenu} changeflagRef={changeflagRef}/>

      </motion.div>
    )
}