import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const jobTitles = [
    "Software Developer",
    "Data Analyst",
    "UI / UX Designer",
]

const Titles = () => {
    const [currentTitle, setCurrentTitle] = useState(0);

    useEffect(()=> {
        const interval = setInterval(()=>{
            setCurrentTitle((prev)=> (prev +1) % jobTitles.length);
        }, 3500); // Change every 3.5 seconds
        return () => clearInterval(interval);
    }, []);

  return (
    <div className="relative overflow-hiddens h-10">
        <AnimatePresence mode="wait">
            <motion.h2
                    key={jobTitles[currentTitle]}
                    className="text-2xl font-semibold text-center"
                    initial={{ 
                        y: "40%",
                        opacity: 0
                    }}
                    animate={{ 
                        y: "0%",
                        opacity: 1
                    }}
                    exit={{ 
                        y: "0%",
                         opacity: 1
                    }}
                    transition={{
                        duration:0.7,
                    }}>
                {jobTitles[currentTitle]}
            </motion.h2>
        </AnimatePresence>
    </div> 
  )
}

export default Titles
