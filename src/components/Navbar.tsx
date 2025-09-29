"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  const Options = [
    {
      NavOption: "Home",
      NavLink: "/"
    },
    {
      NavOption: "About",
      NavLink: "/about"
    },
    {
      NavOption: "Services",
      NavLink: "/services"
    },
    {
      NavOption: "Contact",
      NavLink: "/contact"
    }
  ]
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const hamburgerVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 }
  };

  return (
    <>
      <div className="hidden md:block">
        <div className="flex gap-2 items-center border-b-2 justify-between py-3 px-6 border-purple-400">
          <div className="flex items-center gap-2">
            <Image src={"/logo.jpg"} alt='' height={500} width={500} className='size-12' draggable="false" />
            <h1 className="text-2xl font-bold text-purple-400 cursor-pointer">
              SheCodes
            </h1>
          </div>

          <ul className="flex gap-8">
            {Options.map((option, index) => (
              <motion.li
                key={index}
                className="cursor-pointer relative group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={option.NavLink} className="text-gray-700 font-medium text-lg cursor-pointer block relative group hover:text-purple-400">
                  {option.NavOption}
                  <motion.div
                    className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"
                  />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div className="md:hidden relative z-50">
        <div className="flex items-center justify-between py-3 px-4 border-b-2 border-purple-400 bg-white relative z-50">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-purple-400">
              SheCodes
            </h1>
          </div>

          <motion.button
            onClick={toggleMenu}
            className="relative z-50 p-2"
            variants={hamburgerVariants}
            animate={isOpen ? "open" : "closed"}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-purple-400 block"
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-purple-400 block"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-purple-400 block"
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 z-40"
              onClick={toggleMenu}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 overflow-hidden border-b-2 border-purple-400"
            >
              <div className="py-4">
                {Options.map((option, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="px-6 py-3"
                    whileHover={{ backgroundColor: "#f3f4f6", x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={toggleMenu}
                  >
                    <Link href={option.NavLink} className="text-gray-700 font-medium text-lg cursor-pointer block relative group hover:text-purple-400">
                      {option.NavOption}
                      <motion.div
                        className="absolute left-0 bottom-0 h-0.5 bg-purple-400 w-0 group-hover:w-full transition-all duration-300"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Navbar;