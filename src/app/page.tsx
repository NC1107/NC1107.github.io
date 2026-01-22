"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ContactLinks } from "@/components/ContactLinks";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)]">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/images/headshot.png"
          alt="Nicholas Conn"
          width={200}
          height={200}
          className="rounded-full border-[5px] border-bone mx-auto mb-6"
          priority
        />
        <h1 className="text-4xl text-bone mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Nicholas Conn
        </h1>
        <p className="text-xl text-bone/90 mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          Software Engineer | Self-hosted enthusiast
        </p>
        <ContactLinks />
      </motion.div>
    </div>
  );
}
