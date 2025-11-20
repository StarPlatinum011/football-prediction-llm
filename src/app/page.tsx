'use client'
import Logo from "./ui/logo";
import ThemeToggle from "./ui/theme-toggle";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from 'framer-motion'
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="flex flex-row gap-4">
              <Logo /> 
              <ThemeToggle />
            </div>

            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              "Every game hides a pattern. We reveal it."
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center ">
              Woodwork.ai's advanced models simulate outcomes with precision few can match.
            </div>
              <Link 
                className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
                href={'/dashboard'}
              >
              Start predicting
            </Link>
          </motion.div>
        </AuroraBackground>
  );
}