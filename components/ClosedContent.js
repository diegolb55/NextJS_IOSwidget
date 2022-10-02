import { motion, AnimatePresence } from "framer-motion"
import React from "react";




export default function ClosedContent(props){

    const {isOpen, style, children} = props;

    return (
        
        <AnimatePresence>
            {!isOpen && (
                <motion.div 
                    style={style}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    exit={{opacity:0}}
                    transition={{duration:.2}}
                    
                >


                    

                    {children}




                </motion.div>
            )}
        </AnimatePresence>
    )
}