'use client';
import {motion, useReducedMotion} from 'motion/react';
import type {HTMLMotionProps} from 'motion/react';

export function Reveal({children, ...props}: HTMLMotionProps<'div'>) { const reduced = useReducedMotion(); return <motion.div initial={reduced ? false : {opacity:0, y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.2}} transition={{duration:reduced?0:0.45}} {...props}>{children}</motion.div>; }
