import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef, useCallback } from 'react'
import React from "react";
import styles from '../styles/Home.module.css'


export default function Widget(props){

    const {height, width, isOpen,color, toggleOpen, toggleNav, children} = props;

    /**
     *  ref used to get scroll top position of 
     *  scrollable-yth widget (div)
     */
    const ref = useRef(null);
    const element = ref.current; // null on first render
    let prevScroll = element?.scrollTop; 

    const handleScroll2 = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation(); // event : widget scroll event
        
        let currentScroll = element?.scrollTop;
        let deltaY = currentScroll - prevScroll;      

        if( deltaY < -6) {  // scrolling up
            // show nav
            toggleNav(true);
            
        }
        else if(deltaY > 6){ // scrolling down 
            // hide nav
            toggleNav(false);
            
        }

        prevScroll = currentScroll; 

    }, [toggleOpen]);

    useEffect( () => {

        if(isOpen){
            element.addEventListener('scroll', handleScroll2);
            disableWindowScroll();
            
        } else {
            element?.removeEventListener('scroll', handleScroll2);
            enableWindowScroll();

        }

        return () => { // cleanup function
            element?.removeEventListener('scroll', handleScroll2);
            
        } 

    }, [isOpen]);

    function disableWindowScroll() {
        // Get the current window scroll position
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
       
        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function() {
            window.scrollTo(0, scrollTop);
        }
    };
    function enableWindowScroll() {
        window.onscroll = function() {}; // default is an empty function?
    }
    

    const widgetVar = {
        open: { 
            height:  "100vh", 
            width: "100vw", 
            position: "fixed", 
            top: 0, 
            left: 0,
            zIndex: 2, 
            borderRadius: 0, 
            overflow: "scroll",
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
        },
        
      }

    return (
        /**
         * widgetCover : holds the widget flex-centered. 
         *      currently taking 50% width and 100% height
         *      of its parent container (widgetholder).
         */
        <div className={styles.widgetCover}>
            {/* 
                actualWidget : the real colored widget.
            */}
            <motion.div 
                ref={ref}
                className={styles.actualWidget}

                style={{ 
                    scrollBehavior: "smooth", 
                    background: color,  
                }}

                variants={widgetVar}
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