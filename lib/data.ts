import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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

export const experiencesData = [
  {
    title: "Operations Associate – BYJU’S",
    location: "Bangalore, India",
    description:
      "Created and optimized digital learning content while ensuring smooth academic operations across centers. Achieved 95% SLA compliance in customer query resolution and managed academic schedules to improve overall resource utilization.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer – Finkraft.ai",
    location: "Bangalore, India",
    description:
      " Created and optimized digital learning content while ensuring smooth academic operations across centers. Achieved 95% SLA compliance in customer query resolution and managed academic schedules to improve overall resource utilization.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Hair Care AI ",
    description:
      "ScalpSense uses AI to analyze scalp images and quickly identify hair-fall patterns. It gives users personalized care suggestions to improve their hair health.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Manual GST Invoice Validation Pipeline",
    description:
      "An automated pipeline that extracts and validates GST 2B invoices, supported by a simple web interface for manual review.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Recipe Sharing Platform",
    description:
      "A simple platform to upload, search, and share recipes, with ingredient-based search and personalized favorites.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "GitHub",
  "AWS",
  "Docker",
  "Firebase",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Database Design",
  "Data Structures & Algorithms",
  "MySQL",
  "NoSQL",
  "Framer Motion",
] as const;
