import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef, useCallback } from 'react'
import React from "react";
import styles from '../styles/Home.module.css'


export default function Widget(props){

    const {height, width, isOpen,color, toggleOpen, toggleNav, children} = props;

    const ref = useRef(null);

    const element = ref.current;
    let prevScroll = element?.scrollTop;

    const handleScroll2 = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation(); // widget scroll event
        

        let currentScroll = element?.scrollTop;

        if( prevScroll > currentScroll){
            // scrolling up
            toggleNav(true)
            console.log("widget up", currentScroll)

        }
        else {
            // scrolling down
            toggleNav(false)
            

            
        }
        prevScroll = currentScroll;

    }, [toggleOpen])

    function disableWindowScroll() {
        // Get the current page scroll position
        let scrollTop = 
          window.pageYOffset || document.documentElement.scrollTop;
        let scrollLeft = 
          window.pageXOffset || document.documentElement.scrollLeft;
    
            // if any scroll is attempted,
            // set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }
    function enableWindowScroll() {
        window.onscroll = function() {}; // default is an empty function?
    }

    useEffect( () => {

        if(isOpen){
            element.addEventListener('scroll', handleScroll2);
            disableWindowScroll();
            
        } else {
            element?.removeEventListener('scroll', handleScroll2);
            enableWindowScroll();

        }

        return () => {
            element?.removeEventListener('scroll', handleScroll2)
            
        } 

    }, [isOpen])
    

    const variants1 = {
        open: { 
            height:  "100vh", 
            width: "100vw", 
            position: "fixed", 
            top: 0, 
            left: 0,
            zIndex: 2, 
            borderRadius: 0, 
            overflow: "scroll",
            // padding: 0,
        },
        closed: { 
            height: height, 
            width: width, 
            position: "absolute", 
            top: "auto", 
            left: "auto",
            zIndex:  1, 
            borderRadius: 25,
            overflow: "hidden",
            // padding: "20px 25px",
             
        },
        
      }

    return (
        <div className={styles.widgetCover}>

            <motion.div 
                style={{ 
                    scrollBehavior: "smooth", background: color,
                    
                }}
                ref={ref}
                className={styles.actualWidget}

                variants={variants1}
                animate={isOpen ? "open" : "closed"}
                transition={{ type: "spring", duration: .5}}
                onClick={ () => {
                    toggleOpen();
                    toggleNav(true);
                } }
                
            >
                {children}

            </motion.div>
        </div>
    )
}