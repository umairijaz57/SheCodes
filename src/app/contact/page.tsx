"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";

const containerVariants:any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const letterVariants:any = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const cardVariants:any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const headline = "Get In Touch";

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      content: "contact@shecodes.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: "📱",
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: "📍",
      title: "Visit Us",
      content: "123 Tech Street, Silicon Valley",
      description: "CA 94025, United States",
    },
  ];

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
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-200 rounded-full opacity-20"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 py-16">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16 space-y-4"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
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
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mx-auto"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4">{info.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {info.title}
              </h3>
              <p className="text-purple-600 font-semibold mb-1">
                {info.content}
              </p>
              <p className="text-gray-500 text-sm">{info.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Subject
                </label>
                <input
                  required
                  type="text"
                  name="subject"
                  value={formData.subject}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Follow Us On Social Media
          </h3>
          <div className="flex justify-center gap-6">
            {[<Instagram />, <Twitter />, <Facebook />].map((emoji, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactUs;