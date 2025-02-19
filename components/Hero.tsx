"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import VRHeadset from "./VRHeadset"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">VR Developer Extraordinaire</h1>
          <p className="text-xl md:text-2xl mb-8">Crafting immersive virtual experiences</p>
          <motion.button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
        </motion.div>
        <motion.div
          className="md:w-1/2 h-64 md:h-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <VRHeadset />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </motion.div>
      </div>
    </section>
  )
}

