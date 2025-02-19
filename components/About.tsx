"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="w-full py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://source.unsplash.com/random/400x400?portrait,developer"
            alt="VR Developer"
            width={400}
            height={400}
            className="rounded-full"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 md:pl-12"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I'm a passionate VR developer with over 5 years of experience creating immersive virtual reality
            experiences. My journey in VR development started with a fascination for how technology can transform the
            way we interact with digital worlds.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I specialize in creating VR applications for gaming, education, and corporate training. My goal is to push
            the boundaries of what's possible in virtual reality and create experiences that leave a lasting impact on
            users.
          </p>
          <motion.button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

