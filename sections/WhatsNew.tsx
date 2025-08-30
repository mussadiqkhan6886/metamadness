'use client';

import {motion, Variants} from "framer-motion"
import {TypingText, TitleText} from "../components/CustomTexts"
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
import styles from "../styles/index"
import {newFeatures} from "../constants"
import { NewFeatures } from "../components";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div variants={staggerContainer(0.2, 0.5)} initial={"hidden"} whileInView={"show"} viewport={{once: false, amount: 0.25}} className={`${styles.interWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
      <motion.div variants={fadeIn("right", "tween", 0.2, 1) as Variants} className="flex justify-center flex-col">
        <TypingText title={"| What's New?"} />
        <TitleText title={<>What's new about Metaversus</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div variants={planetVariants('right') as Variants} className={`flex w-[90%] ${styles.flexCenter}`}>
        <img src="/whats-new.png" alt="Whats new image" className="w-[90%] h-[90%] object-contain"  />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
