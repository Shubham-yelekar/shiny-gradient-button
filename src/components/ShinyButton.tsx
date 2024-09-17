import {motion} from 'framer-motion';


const ShinyButton = () => {
  return <motion.button className="px-10 py-4 rounded-full relative radial-gradient"
  initial={{"--x": "100%", scale: 1}}
  animate={{"--x": "-100%"}}
  whileTap={{scale: 0.97}}
  transition={{
    repeat: Infinity,
    repeatType: 'loop',
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: 'spring',
      stiffness: 10,
      damping: 5,
      mass: 0.1,
    }
  }}
  > <motion.span className="text-neutral-100 tracking-wide font-regular text-2xl h-full w-full block relative linear-mask">Start Now</motion.span>
  <span className='block absolute inset-0 rounded-full  p-[2px] linear-overlay'></span>
  </motion.button>;
};

export default ShinyButton;
