"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After completing my{" "}
        <span className="font-medium">Master's in Computer Applications</span>, I
        discovered my passion for building impactful digital solutions. Over the
        years, I’ve developed strong skills in{" "}
        <span className="font-medium">full-stack development</span>, working with
        technologies like{" "}
        <span className="font-medium">React, Python, JavaScript, Docker, and cloud platforms</span>.
        <span className="italic"> My favorite part of development</span> is turning
        complex challenges into clean, elegant solutions. I{" "}
        <span className="underline">love</span> the process of breaking down a
        problem, understanding it deeply, and bringing a thoughtful product to life.
        I have experience building scalable applications, integrating APIs, and
        deploying cloud-based systems, and I’m always excited to learn and explore
        new technologies. I am currently seeking opportunities where I can grow and
        contribute as a{" "}
        <span className="font-medium">full-stack or backend developer</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
