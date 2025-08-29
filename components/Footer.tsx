'use client';

import {motion} from "framer-motion"
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import Link from "next/link";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView={"show"}
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">Enter the Metaverse</h4>
        <button className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]" type="button">
          <img src="/headset.svg" alt="headset icon button" className="w-6 h-6 object-contain" />
          <span className="font-normal text-base text-white">ENTER METAVERSE</span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-2xl text-white">Metaversus</h4>
          <p className="text-white font-normal text-sm opacity-50">Copyright &copy; 2021 - 2025 Metaversus. All rights reserved.</p>
          <div className="flex gap-4">
            {socials.map(social => (
              <Link target="_blank" key={social.name} href={social.url}>
                <img src={social.imgPath} alt={social.name} className="w-6 h-6 object-contain cursor-pointer"  />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
