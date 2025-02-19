"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const projects = [
  {
    id: 1,
    title: "VR Game World",
    description: "An immersive fantasy VR game",
    image: "https://source.unsplash.com/random/800x600?vr,game",
  },
  {
    id: 2,
    title: "Virtual Museum",
    description: "A VR tour of ancient artifacts",
    image: "https://source.unsplash.com/random/800x600?museum,technology",
  },
  {
    id: 3,
    title: "VR Training Simulator",
    description: "Corporate training in VR",
    image: "https://source.unsplash.com/random/800x600?training,virtual",
  },
  {
    id: 4,
    title: "Augmented Reality App",
    description: "Blending virtual and real worlds",
    image: "https://source.unsplash.com/random/800x600?augmented,reality",
  },
  {
    id: 5,
    title: "VR Meditation Space",
    description: "A calming virtual environment",
    image: "https://source.unsplash.com/random/800x600?meditation,vr",
  },
  {
    id: 6,
    title: "Interactive VR Story",
    description: "A narrative-driven VR experience",
    image: "https://source.unsplash.com/random/800x600?story,virtual",
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="w-full py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">My VR Projects</h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -5 }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 p-4 rounded-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedProject.image || "/placeholder.svg"}
              alt={selectedProject.title}
              width={800}
              height={600}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{selectedProject.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedProject.description}</p>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

