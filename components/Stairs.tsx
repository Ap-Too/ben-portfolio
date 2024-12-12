import {motion} from "motion/react";

const Stairs = () => {
    const stairAnimation = {
        initial: {
            bottom: "0%",
            left: "0%",
        },
        animate: {
            bottom: "100%",
            left: "100%",
        },
        exit: {
            bottom: ["100%", "0%"],
            left: ["100%", "0%"],
        }
    };
    const reverseIndex=(index:number)=>{
        const totalSteps = 6;
        return totalSteps - index - 1;
    }

    return (
        <>
        {[...Array(6)].map((_, index)=>(
            <motion.div key={index} 
                        variants={stairAnimation}
                        initial="initial" 
                        animate="animate" 
                        exit="exit"
                        transition={{
                            duration:0.3,
                            ease:'easeInOut',
                            delay: reverseIndex(index) * 0.1,
                        }} 
                        className="w-full h-full bg-white/10 relative"
            />
        ))}
        </>
    )
}

export default Stairs
