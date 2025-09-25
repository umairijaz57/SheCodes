"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "ERP Implementation",
    desc: "Streamline your business operations with our expert ERP solutions, customized to meet your specific needs."
  },
  {
    title: "Training & Support",
    desc: "Comprehensive functional and technical training, along with ongoing support to ensure your systems run smoothly."
  },
  {
    title: "ERP Audit & Testing",
    desc: "Thorough audits and testing to ensure your ERP system is functioning correctly and delivering expected benefits."
  },
  {
    title: "Consultation & Recommendation",
    desc: "Expert guidance to understand your business needs and recommend the best IT solutions for efficiency and growth."
  },
  {
    title: "Customization & Enhancements",
    desc: "Tailored modifications and enhancements to improve efficiency and meet specific business processes."
  },
  {
    title: "Integration of Other Applications",
    desc: "Expert integration services to connect your ERP system with other business applications seamlessly."
  }
];

export default function Services() {
  return (
    <div className="relative py-16 bg-white">
        <h1 className="text-center p-6 font-bold text-3xl">OUR SERVICES</h1>
        <div className="absolute left-1/2 w-1 bg-purple-400 min-h-[520px] rounded-2xl transform "></div>
      {/* Vertical line in center */}
    <div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
            {services.map((service, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-6 bg-white shadow-lg rounded-2xl border border-gray-100`}
            >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
            ))}
        </div>

    </div>
      

      

      {/* Button */}
      <div className="text-center mt-10">
        <button className="px-6 py-3 border border-purple-400 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition">
          View Details of Services
        </button>
      </div>
    </div>
  );
}
