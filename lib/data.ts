import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import foobiePandaImg from "@/public/foobiePanda.jpg";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
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
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "ShadCN",
  "React-Hook-Forms",
  "SpringBoot",
] as const;
export const projectsData = [
  {
    title: "foobiePanda🐼.com",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
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
    title: "Bachelor's Degree",
    location: "Bangalore, India",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a web3 developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;
