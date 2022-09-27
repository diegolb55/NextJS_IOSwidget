import {motion, AnimatePresence} from "framer-motion"
import Widget from "../components/Widget"
import WidgetCover from "../components/WidgetCover";
import {useState, useEffect} from "react"


export default function Localizacion({toggleNav}){

    const [isOpen, setIsOpen] = useState(false);

    const wTitle = {
        open:{
            margin:"150px auto 30px auto ",
            padding: 0,

        },
        closed:{
            margin: "0 0 0 0",
            padding:"0 0 0 20px",
            
        },
    }


    return (
        <WidgetCover>
        <Widget 
            height={150} 
            width={180} 
            isOpen={isOpen} 
            toggleOpen={ () => setIsOpen(!isOpen)} 
            toggleNav={toggleNav}
            color="lightgray">

            <motion.h2 
                style={{ 
                    // width:"fit-content", 
                    // position: "relative", 
                    // border:"2px solid white",
                    width:"fit-content",
                    position: "relative"
                }}
                variants={wTitle}
                animate={isOpen ? "open" : "closed"}
                transition={{type:"tween", duration:.4}}
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
        </WidgetCover>
    )
}