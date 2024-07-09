"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Dynamic software engineer with a Master's in{" "}
        <span className="font-medium">Computer Science </span>
        specializing in{" "}
        <span className="font-medium">cloud and software engineering</span>, and
        a second major in <span className="font-medium">cyber security</span>{" "}
        focused on advanced computer networking security, cyber security risk
        policies, and information assurance. Robust experience in{" "}
        <span className="font-medium">
          full-stack and blockchain development
        </span>
        , proficient in{" "}
        <span className="font-medium">Node.js, TypeScript, and React</span> .
        Demonstrated expertise in improving system performance, implementing
        secure solutions, and managing projects from conception to deployment.
        Adept at Agile methodologies and DevOps practices, with excellent
        problem-solving and teamwork skills.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. I am currently
        looking for a <span className="font-medium">full-time position</span> as
        a software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy dancing,
        watching shark tank pitch stories. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Finance, Stock market</span>.
      </p>
    </motion.section>
  );
}
