'use client';
import {motion, useReducedMotion} from 'motion/react';
import type {HTMLMotionProps} from 'motion/react';

type FadeInProps = HTMLMotionProps<'div'> & {duration?: number; delay?: number; direction?: 'up'|'down'|'left'|'right'};
export function FadeIn({duration=0.5, delay=0, direction='up', initial, ...props}: FadeInProps) {
  const reduced = useReducedMotion(); const offsets = {up:{y:16},down:{y:-16},left:{x:16},right:{x:-16}};
  return <motion.div initial={reduced ? false : initial ?? {opacity:0,...offsets[direction]}} whileInView={{opacity:1,x:0,y:0}} viewport={{once:true,amount:0.2}} transition={{duration: reduced ? 0 : duration,delay: reduced ? 0 : delay}} {...props}/>;
}
