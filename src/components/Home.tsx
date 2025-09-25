"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const letterVariants: any = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const floatingVariants: any = {
  floating: {
    y: [0, -15, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

function Hero() {
  const headline = "Empowering Women in Tech";

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-20 h-20 bg-purple-300 rounded-full opacity-30"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 py-8">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 min-h-[80vh]">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Main Headline */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-3"
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                variants={containerVariants}
              >
                {headline.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    className={`inline-block mr-3 ${
                      i < 2 ? "text-gray-800" : "text-purple-600"
                    }`}
                    variants={letterVariants}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Decorative underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mx-auto lg:mx-0"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
            >
              Join <span className="text-purple-600 font-bold">SheCodes</span> and
              unlock your potential in a supportive community where
              <span className="text-purple-600 font-semibold"> innovation meets opportunity</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Journey
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-500 text-purple-600 font-semibold px-8 py-3 rounded-full hover:bg-purple-50 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate="floating"
              className="relative z-10"
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-2xl blur-lg opacity-30"></div>

                <Image
                  src="/hero-img.png"
                  alt="SheCodes Hero"
                  width={400}
                  height={400}
                  className="relative rounded-2xl shadow-xl border-4 border-white w-80 h-80 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;