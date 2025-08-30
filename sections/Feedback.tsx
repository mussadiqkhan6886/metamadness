'use client';

import {motion, Variants} from "framer-motion"
import styles  from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import Image from "next/image";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer(0.2,0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
    >
      <motion.div
        variants={fadeIn('right', "tween", 0.2, 1) as Variants}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-3xl text-2xl sm:leading-10 leading-9 text-white">
            Samantha
          </h4>
          <p className="mt-2 font-normal text-xs sm:text-lg sm:leading-5 leading-4 text-white ">
            Founder | Metaverse
          </p>
        </div>
        <p className="mt-6 font-normal text-lg sm:text-2xl sm:leading-10 leading-9 text-white ">
          "With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anuthing"
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', "tween", 0.2, 1) as Variants}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image unoptimized={true} priority={true} width={500} height={500}  src="/planet-09.png" alt="planet image feedback" className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />

        <motion.div
          variants={zoomIn(0.4, 1) as Variants}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image width={144} height={144} src="/stamp.png" alt="stamp icon feedback" className="w-36 h-36 object-contain" />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
