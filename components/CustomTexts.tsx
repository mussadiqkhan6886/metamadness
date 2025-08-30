'use client';
import {motion, Variants} from "framer-motion"
import { textContainer, textVariant2 } from "../utils/motion";
import React from "react";

interface Props1 {
  title: string 
  textStyles?: string 
}
interface Props2 {
  title: React.ReactElement 
  textStyles?: string 
}

export const TypingText = ({title, textStyles}: Props1) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2 as Variants} key={index}>
        {letter === ' ' ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({title, textStyles}: Props2) => (
    <motion.h2
      variants={textVariant2 as Variants}
      initial="hidden"
      whileInView={"show"}
      className={`mt-[8px] text-[40px] text-white ${textStyles} font-bold md:text-[64px] md:leading-[75px] sm:leading-[50px]`}
    >
      {title}
    </motion.h2>
);
