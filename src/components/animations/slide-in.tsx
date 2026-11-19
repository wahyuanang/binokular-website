'use client';
import {motion, useReducedMotion} from 'motion/react';
import type {HTMLMotionProps} from 'motion/react';

type SlideInProps = HTMLMotionProps<'div'> & {direction?:'up'|'down'|'left'|'right'; distance?:number; duration?:number; delay?:number};
export function SlideIn({direction='left',distance=24,duration=0.45,delay=0, ...props}:SlideInProps) { const reduced=useReducedMotion(); const pos={up:{y:distance},down:{y:-distance},left:{x:-distance},right:{x:distance}}; return <motion.div initial={reduced?false:{opacity:0,...pos[direction]}} whileInView={{opacity:1,x:0,y:0}} viewport={{once:true,amount:0.2}} transition={{duration:reduced?0:duration,delay:reduced?0:delay}} {...props}/>; }
