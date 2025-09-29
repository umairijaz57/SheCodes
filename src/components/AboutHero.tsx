"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-24 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-24 right-10 w-28 h-28 bg-purple-300 rounded-full opacity-30 blur-lg"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 py-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-6 text-center md:text-left max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                About SheCodes
              </span>
            </h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              We are a passionate community dedicated to{" "}
              <span className="text-purple-600 font-semibold">empowering women in technology</span>.  
              Our mission is to provide mentorship, education, and opportunities 
              that inspire innovation and leadership.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="pt-4"
            >
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
              <Image
                src="/about-hero.png"
                alt="About SheCodes"
                width={420}
                height={420}
                className="relative rounded-2xl shadow-xl border-4 border-white w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
