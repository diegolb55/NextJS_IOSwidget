import {motion} from 'framer-motion'
import { useState, useEffect } from 'react'

import {AiOutlineMenuUnfold} from 'react-icons/ai'
import {AiOutlineMenuFold} from 'react-icons/ai'

import styles from '../styles/Home.module.css'



const MenuBar = () => {

  const [openMenu, setOpenMenu] = useState(false)
  
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
          <AiOutlineMenuUnfold  onClick={ ()=> setOpenMenu(openMenu => !openMenu) }/> 
          : 
          <AiOutlineMenuFold onClick={ ()=> setOpenMenu(openMenu => !openMenu) }/>
        }

      </motion.div>
      
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
       
        className={styles.navbar}
        variants={navVariants}
        animate={openNav ? "open" : "closed"}
        
      >
        <div className={styles.logo}></div>
        
        <MenuBar />

      </motion.div>
    )
}