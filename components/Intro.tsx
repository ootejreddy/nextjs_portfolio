"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] relative">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/myImage.jpg"
              alt="SAI OOTEJ REDDY BACHAPALLY"
              width={"292"}
              height={"292"}
              quality={"95"}
              priority={true}
              className="h-44 w-44 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
            <motion.span
              className="absolute bottom-0 right-0 text-5xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="relative mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">
          Hello, I'm SAI OOTEJ REDDY BACHAPALLY.
        </span>{" "}
        I'm a <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row px-4 gap-2 items-center justify-center text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href={"#contact"}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href={"/public/SAI_OOTEJ_REDDY_BACHAPALLY.pdf"}
          className="group flex gap-2 bg-white py-3 px-7 rounded-full items-center outline-none 
          focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black/10"
          download={true}
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition " />
        </a>
        <a
          href="https://www.linkedin.com/in/saiootej-reddy-8a541014b/"
          target="_blank"
          className="bg-white flex items-center p-4 text-blue-600 rounded-full 
          focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer hover:text-blue-[650]"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/ootejreddy"
          target="_blank"
          className="bg-white flex items-center p-4 text-gray-600 rounded-full text-[1.10rem]
          focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer hover:text-gray-950"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
