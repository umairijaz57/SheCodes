"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutHero from "@/components/AboutHero";
import MissionVision from "@/components/MissionVision";
import Team from "@/components/team";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <AboutHero />
        <MissionVision />
        <Team />
    </main>
  );
}
