import {motion, AnimatePresence} from "framer-motion"
import Widget from "../components/Widget"
import {useState, useEffect} from "react"

export default function Horario({toggleNav}){

    const [isOpen, setIsOpen] = useState(false);
    
    const wTitle = {
        open:{margin: "80px auto"},
        closed:{margin: 0 },
    }
   
    
    return (

        <Widget height={150}
            width={150}
            color="lightblue"
            isOpen={isOpen} 
            toggleOpen={ () => setIsOpen(!isOpen) }
            toggleNav={toggleNav}
            >
            
            <motion.h2 
                style={{ width:"fit-content", position: "relative"}}
                variants={wTitle}
                animate={isOpen ? "open" : "closed"}
            >Horario</motion.h2>

            

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        style={{ 
                            border: "2px solid black", 
                            height: "150vh", width: "90vw", 
                            margin: "0 auto",

                        }}
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        exit={{opacity:0}}
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                    >
                        <div style={{
                            background: "pink", height: 200,
                        }}></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Widget>
    )
}