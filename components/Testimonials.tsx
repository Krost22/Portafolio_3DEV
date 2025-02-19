"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechVR",
    content:
      "Working with this VR developer was an incredible experience. Their expertise and creativity brought our vision to life in ways we never imagined.",
    image: "https://source.unsplash.com/random/100x100?portrait,man",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Project Manager, EduVirtual",
    content:
      "The VR training simulations developed for our company have revolutionized our onboarding process. The attention to detail and user experience is outstanding.",
    image: "https://source.unsplash.com/random/100x100?portrait,woman",
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Game Designer, VRCade",
    content:
      "I've worked with many VR developers, but this one stands out. Their technical skills combined with a deep understanding of game design principles resulted in a truly immersive VR game.",
    image: "https://source.unsplash.com/random/100x100?portrait,person",
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="w-full py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">What Clients Say</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

