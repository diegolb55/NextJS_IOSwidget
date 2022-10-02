import { AnimatePresence, motion } from "framer-motion";

export default function OpenContent(props){

    const {isOpen, style, children} = props;

    return(
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    style={style}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    exit={{opacity:0}}
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                    
                >


                    

                    {children}




                </motion.div>
            )}
        </AnimatePresence>
    )
}