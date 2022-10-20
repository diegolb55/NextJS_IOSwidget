import {motion, AnimatePresence} from "framer-motion"
import Widget from "../components/Widget"
import {useState, useEffect, forwardRef} from "react"
import WidgetCover from "../components/WidgetCover"
import styles from '../styles/Home.module.css'
import hstyles from '../styles/Horario.module.css'
import {FiClock} from 'react-icons/fi'
import ClosedContent from "../components/ClosedContent"
import OpenContent from "../components/OpenContent"

function Horario({ setIsOpenNav, menuControlRef, changeRefValue }, ref){


    const [isOpen, setIsOpen] = useState(false);

    
    useEffect(()=>{
        if(menuControlRef.current.horario){
            setIsOpen(true);
            
        }
        else {
            setIsOpen(false);
        }
    })
    

    
    return (
        <WidgetCover 
            ref={ref}
        >

        <Widget 
            height={120}
            width={120}
            isOpen={isOpen} 
            setIsOpenNav={setIsOpenNav}
            toggleOpen={ () => {
                setIsOpen(true);
                changeRefValue("horario")
            }}
            style={{ 
                scrollBehavior: "smooth", 
                background: "white", 
                boxShadow: "2px 2px 20px 2px #72C491" 
            }}

        >
            
            {/* Widget closed content */}
            <ClosedContent isOpen={isOpen} 
                style={{
                    // background: "red",
                    margin: 5,
                    height: "90%",
                    display: "flex",
                    flexDirection:"column"
                }}>
                <div className={hstyles.wheading}>
                        <FiClock className={hstyles.clock}/>
                        <p>abierto, Manati</p>
                </div>
                <p className={hstyles.info}>Lunes: <br/> 9:00AM - 4:00PM</p>
            </ClosedContent>

            
            {/* Widget open content */}
            <OpenContent isOpen={isOpen}
                style={{
                    // background:"white",
                    position:"relative"
                }}
                
            >
                 <div className={hstyles.imgtobe}></div>


                <div className={hstyles.gradientbox}>

                    <h2>Horas de Oficina</h2>
                    <div className={hstyles.horariobox}>
                    
                    </div>
                </div>

            </OpenContent>
           
                       
                    
        </Widget>
        </WidgetCover>

    )
}

const forwaredHorario = forwardRef(Horario);
export default forwaredHorario;