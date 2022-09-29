import {motion, AnimatePresence} from "framer-motion"
import Widget from "../components/Widget"
import WidgetCover from "../components/WidgetCover";
import {useState, useEffect, forwardRef} from "react"


function Localizacion({setIsOpenNav, menuControlRef, changeflagRef}, ref){

    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        if(menuControlRef.current.localizacion){
            setIsOpen(true);
            // console.log(menuControlRef.current.horario)
            // menuControlRef.current.horario = false;
        }
        else {
            setIsOpen(false);
            // menuControlRef.current.horario = true;
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
        <WidgetCover ref={ref}>
        <Widget 
            height={150} 
            width={180} 
            isOpen={isOpen} 
            toggleOpen={ () => {
                setIsOpen(true);
                changeflagRef("localizacion");
            }} 
            setIsOpenNav={setIsOpenNav}
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

const forwadedLocalizacion = forwardRef(Localizacion);
export default forwadedLocalizacion;