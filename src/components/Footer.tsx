"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex justify-center items-center gap-3">
            <Image
              src="/logo-bg.png"
              alt="logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold text-purple-400">SheCodes</h1>
          </div>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            Empowering ideas with design, code and creativity. 
            We craft modern digital solutions with a touch of innovation.
          </p>
        </motion.div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-purple-400 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-purple-300 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-purple-300 transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-purple-300 transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-purple-300 transition">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, }}
          >
            <h3 className="text-lg font-semibold text-purple-400 mb-3">Services</h3>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Branding</li>
              <li>SEO & Marketing</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-purple-400 mb-3">Contact</h3>
            <ul className="space-y-2">
              <li>Email: support@shecodes.com</li>
              <li>Phone: +92 300 1234567</li>
              <li>Islamabad, Pakistan</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 pt-6 border-t border-gray-700 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SheCodes. All Rights Reserved. <br />
            Powered by <span className="text-purple-400 font-semibold">Hayat</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
