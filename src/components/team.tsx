"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const teamMembers = [
  {
    name: "Dr. Madiha Khalid",
    role: "Founder & CEO",
    image: "/Madiha.jpg",
    description: "Passionate about empowering women in technology and creating opportunities for growth",
  },
  {
    name: "Dr.s Nadia Sultan",
    role: "Head of Education",
    image: "/Nadia.jpg",
    description: "10+ years experience in tech education and building innovative learning programs",
  },
  {
    name: "Dr. Joddat Fatima",
    role: "Community Manager",
    image: "/Joddat.jpg",
    description: "Building supportive communities that inspire collaboration and success",
  },
];

function OurTeam() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-purple-50 via-white to-purple-100 overflow-hidden">
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

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The passionate leaders behind SheCodes
          </p>
        </motion.div>

        {/* Team Members - Unique Zigzag Layout */}
        <div className="space-y-16 md:space-y-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-6 md:gap-10`}
            >
              {/* Image Side */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0 "
              >
                <div className="absolute -inset-3 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-full blur-xl opacity-30"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover scale-120"
                  />
                </div>
                
                {/* Floating Number Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-white text-lg font-bold">{index + 1}</span>
                </motion.div>
              </motion.div>

              {/* Content Side */}
              <div className={`flex-1 text-center ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                <motion.h3
                  variants={fadeInUp}
                  className="text-2xl md:text-3xl font-extrabold mb-2"
                >
                  <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                    {member.name}
                  </span>
                </motion.h3>
                
                <motion.p
                  variants={fadeInUp}
                  className="text-purple-600 font-semibold text-base md:text-lg mb-3"
                >
                  {member.role}
                </motion.p>
                
                <motion.p
                  variants={fadeInUp}
                  className={`text-gray-600 text-base leading-relaxed max-w-xl ${
                    index % 2 === 0 ? "mx-auto md:mx-0 md:mr-auto" : "mx-auto md:mx-0 md:ml-auto"
                  }`}
                >
                  {member.description}
                </motion.p>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;