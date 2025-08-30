'use client';

import { motion, Variants} from "framer-motion"
import {TypingText, TitleText} from "../components/CustomTexts"
import { fadeIn, staggerContainer } from "../utils/motion";
import styles from "../styles/index"
import Image from "next/image";

const World = () => (
<section className={`${styles.paddings} relative z-10`}>
    <motion.div variants={staggerContainer(0.2, 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.25}} className={`${styles.interWidth} mx-auto flex flex-col`}>
      <TypingText title={"| People on the World"} textStyles={"text-center"} />
      <TitleText title={<>
          Track friend around you and invite them to play together in the same world
        </>} textStyles={"text-center"} />

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1) as Variants}
          className="relative mt-[68px] flex w-full"
        >
          <Image width={100} height={100} unoptimized={true}  src="/map.png" alt="map image" className="w-full h-full object-cover" />
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
            <Image width={100} height={100} src="/people-01.png" alt="people" className="w-full h-full" />
          </div>
          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
            <Image width={100} height={100} src="/people-02.png" alt="people" className="w-full h-full" />
          </div>
          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
            <Image width={100} height={100} src="/people-03.png" alt="people" className="w-full h-full" />
          </div>
        </motion.div>
    </motion.div>
  </section>
);

export default World;
