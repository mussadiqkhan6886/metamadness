'use client';
import {motion} from "framer-motion"
import { textContainer, textVariant2 } from "../utils/motion";
import React from "react";

interface Props1 {
  title: String 
  textStyles?: String 
}
interface Props2 {
  title: React.ReactElement 
  textStyles?: String 
}

export const TypingText = ({title, textStyles}: Props1) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({title, textStyles}: Props2) => (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView={"show"}
      className={`mt-[8px] text-[40px] text-white ${textStyles} font-bold md:text-[64px] md:leading-[75px] sm:leading-[50px]`}
    >
      {title}
    </motion.h2>
);
