'use client';

import {motion, Variants} from "framer-motion"
import { fadeIn } from "../utils/motion";
import Image from "next/image";

const InsightCard = ({index, imgUrl, title, subtitle}: {index: number, imgUrl: string, title: string, subtitle: string}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1) as Variants}
    className="flex md:flex-row flex-col gap-4"
  >
    <Image src={imgUrl} alt="planet-01" className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover" />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-4xl text-2xl text-white">{title}</h4>
        <p className="mt-4 font-normal lg:text-lg text-[14px] text-secondary-white">{subtitle}</p>
      </div>
      <div className="lg:flex hidden items-center justify-center w-20 h-20 hover:bg-[#b0b0b0] hover:bg-opacity-10 duration-200 rounded-full bg-transparent border border-white">
        <Image src="arrow.svg" alt="arrow icon" className="w-[40%] object-contain" />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
