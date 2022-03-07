import {motion} from 'framer-motion'

const MotionDiv = ({children}) => {
    return (
        
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:1}}
        transition={{duration: 1}}
        >
            {children}
        </motion.div>       

    )
}

export default MotionDiv