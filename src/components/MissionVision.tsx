"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import Image from "next/image";
import { SlidingDiv } from "./SlidingDiv";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function MissionVision() {
    return (
        <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-100 overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/vision.jpg"   // make sure file is inside public/
                    alt="Background"
                    fill
                    className="object-cover opacity-10/50" // thora visible banane ke liye
                    priority
                />

            </div>



            <div className="container flex flex-col gap-24 mx-auto relative p-24">
                <SlidingDiv direction="left">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                                <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                                    Our Mission
                                </span>
                            </h2>
                            <p className="text-lg md:text-xl text-amber-50 leading-relaxed max-w-3xl">
                                To empower women in technology through comprehensive education,
                                mentorship, and community support. We strive to break barriers and
                                create opportunities that enable women to thrive in tech careers
                                and become leaders in innovation.
                            </p>
                        </div>
                    </div>
                </SlidingDiv>

                <SlidingDiv direction="right">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
                        <div className="text-center md:text-right">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                                <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                                    Our Vision
                                </span>
                            </h2>
                            <p className="text-lg md:text-xl text-amber-50 leading-relaxed max-w-3xl md:ml-auto">
                                A world where women are equally represented and celebrated in
                                technology. We envision a future where every woman has the skills,
                                confidence, and support to pursue and excel in tech careers and
                                shape the digital future.
                            </p>
                        </div>
                    </div>
                </SlidingDiv>
            </div>
        </section>
    );
}

export default MissionVision;