'use client';
import {motion, useReducedMotion} from 'motion/react';
import type {HTMLMotionProps} from 'motion/react';

export function StaggerContainer({children, ...props}: HTMLMotionProps<'div'>) { const reduced = useReducedMotion(); return <motion.div initial="hidden" whileInView="visible" viewport={{once:true,amount:0.2}} variants={{visible:{transition:{staggerChildren:reduced?0:0.1}},hidden:{}}} {...props}>{children}</motion.div>; }
export function StaggerItem({children, ...props}: HTMLMotionProps<'div'>) { const reduced = useReducedMotion(); return <motion.div variants={{hidden:{opacity:0,y:reduced?0:12},visible:{opacity:1,y:0,transition:{duration:reduced?0:0.35}}}} {...props}>{children}</motion.div>; }
