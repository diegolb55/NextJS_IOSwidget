import {motion, AnimatePresence} from "framer-motion"
import Widget from "../components/Widget"
import {useState, useEffect} from "react"


export default function Localizacion({toggleNav}){

    const [isOpen, setIsOpen] = useState(false);

    const wTitle = {
        open:{margin: "80px auto", textAlign:"center"},
        closed:{margin: 0, textAlign:"auto"},
    }


    return (
        <Widget 
            height={150} 
            width={150} 
            isOpen={isOpen} 
            toggleOpen={ () => setIsOpen(!isOpen)} 
            toggleNav={toggleNav}
            color="lightgray">

            <motion.h2 
                // style={{padding: 10}}
                variants={wTitle}
                animate={isOpen ? "open" : "closed"}
                transition={{type:"tween"}}
            >Direccion</motion.h2>

        
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        style={{border: "2px solid white", height: 100, width: 150, margin: "30px auto"}}
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                    >
                        CONTENT 2
                    </motion.div>
                )}
            </AnimatePresence>
            
        </Widget>
    )
}