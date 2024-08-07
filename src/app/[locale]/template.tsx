"use client"

import { motion } from "framer-motion"


export default function Template({children}:
   {children : React.ReactNode}) {

      return (
         <motion.div
         initial={{opacity: 0 , x: 0}}
         animate={{opacity: 1 , x: 0}}
         exit={{opacity: 0 , x: 0}}
         transition={{duration: 0.5}}>
            {children}
         </motion.div>
      )
   }