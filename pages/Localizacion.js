import {motion, AnimatePresence} from "framer-motion"
import Widget from "../components/Widget"
import WidgetCover from "../components/WidgetCover";
import {useState, useEffect, forwardRef} from "react"
import OpenContent from "../components/OpenContent";
import ClosedContent from "../components/ClosedContent";

function Localizacion({setIsOpenNav, menuControlRef, changeRefValue}, ref){

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

    


    return (
        <WidgetCover ref={ref}>
        <Widget 
            height={150} 
            width={180} 
            isOpen={isOpen} 
            toggleOpen={ () => {
                setIsOpen(true);
                changeRefValue("localizacion");
            }} 
            setIsOpenNav={setIsOpenNav}
            style={{ 
                scrollBehavior: "smooth", 
                background: "lightblue", 
                boxShadow: "2px 2px 20px 2px #72C491" 
            }}        >

            
            
        </Widget>
        </WidgetCover>
    )
}

const forwadedLocalizacion = forwardRef(Localizacion);
export default forwadedLocalizacion;