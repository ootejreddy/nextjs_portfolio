import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import foobiePandaImg from "@/public/foobiePanda.jpg";

import smartStreamImg from "@/public/smartStream.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "Postgre SQL",
  "Python",
  "Framer Motion",
  "ShadCN",
  "React-Hook-Forms",
  "Spring Boot",
  "Blockchain",
  "smart contracts",
  "Hyperledger Fabric",
  "chaincode",
] as const;
export const projectsData = [
  {
    title: "foobiePanda🐼.com",
    description:
      "	Architected and developed a full-stack food ordering platform using React.js, Node.js, Express.js, and MongoDB. Enhanced user experience through efficient search, sort, filter, and pagination functionalities. Utilized API polling to provide real-time order status updates, creating a dynamic and responsive user interface that improves customer engagement and satisfaction.",
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "React Query",
      "React Hook Forms",
      "ShadCN",
      "Cloudinary",
      "Stripe API",
      "Auth0",
    ],
    imageUrl: foobiePandaImg,
    projectLink: "https://mern-foobiepanda-frontend.onrender.com",
  },
  {
    title: "smart-stream",
    description:
      "Smart-Stream is a GPT-powered Netflix UI clone application developed using React.js, Tailwind CSS, and Redux Toolkit.Integrated a GPT-powered search feature, allowing users to effortlessly seek movie suggestions ",
    tags: [
      "React",
      "Javascript",
      "Tailwind",
      "Redux-Toolkit",
      "Firebase",
      "GPT APIs",
    ],
    imageUrl: smartStreamImg,
    projectLink: "https://smart-stream.onrender.com",
  },
] as const;
export const experiencesData = [
  {
    title: "Master's Degree in Computer Science",
    location: "Missouri, United States",
    description:
      "I am a computer science major at University of Central Missouri specializing in cloud and software engineering, with a second major in cyber security focused on advanced computer networking security, risk policies, and information assurance.",
    icon: React.createElement(LuGraduationCap),
    date: "2023-2024",
  },
  {
    title: "Associate Full-Stack Developer",
    location: "Hyderabad, IN",
    description:
      "At the National Payments Corporation of India, I was an Associate Full-Stack Blockchain Developer. I developed and integrated blockchain solutions with Hyperledger Fabric, optimized UI performance, and implemented security measures and automated testing.",
    icon: React.createElement(CgWorkAlt),
    date: "07/2021 - 01/2023",
  },
  {
    title: "Associate Software Engineer",
    location: "Noida, IN",
    description:
      "At Precisely, I was an Associate Software Engineer, developing Python scripts and Flask APIs for data extraction and storage, and overseeing data analysis for the CTO Dashboard project.",
    icon: React.createElement(FaReact),
    date: "03/2021 - 07/2021",
  },
] as const;
