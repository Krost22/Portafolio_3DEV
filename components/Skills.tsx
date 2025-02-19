"use client"

import { Cpu, Gamepad2, Brain, Code, PenTool, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skills = [
  { name: "VR Development", icon: Gamepad2 },
  { name: "3D Modeling", icon: Cpu },
  { name: "User Experience", icon: Users },
  { name: "Game Engines", icon: Brain },
  { name: "Programming", icon: Code },
  { name: "UI/UX Design", icon: PenTool },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="w-full py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Skills</h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-8"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <skill.icon className="w-16 h-16 mb-4 text-purple-600 dark:text-purple-400" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

