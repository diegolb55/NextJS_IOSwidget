import {motion, AnimatePresence} from "framer-motion"
import Widget from "../components/Widget"
import {useState, useEffect, forwardRef} from "react"
import WidgetCover from "../components/WidgetCover"
import styles from '../styles/Home.module.css'

function Horario({ setIsOpenNav, openWidget, menuControlRef }, ref){

    console.log("horario rendered")

    const [isOpen, setIsOpen] = useState(false);


    useEffect(()=>{
        if(menuControlRef.current.horario){
            setIsOpen(true);
            menuControlRef.current.horario = false;
        }
    })
    
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
        <WidgetCover 
        ref={ref}
        >

        <Widget 
            height={120}
            width={120}
            color="lightblue"
            isOpen={isOpen} 
            toggleOpen={ () => setIsOpen(!isOpen) }
            setIsOpenNav={setIsOpenNav}
        >
            
            <motion.h2 
                className={styles.widgetTitle}
                variants={wTitle}
                animate={isOpen ? "open" : "closed"}
                transition={{type:"tween", duration:.4}}
                
            >Horario</motion.h2>

            {/* Widget closed content */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div 
                        
                    className={styles.closedContent1}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    exit={{opacity:0}}
                    transition={{duration:.2}}
                    
                >
                    <p>Closed Content 1</p>
                </motion.div>
                )}
            </AnimatePresence>

            
            {/* Widget open content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        
                        className={styles.widgetPageContent}
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
        </WidgetCover>

    )
}

const forwaredHorario = forwardRef(Horario);
export default forwaredHorario;