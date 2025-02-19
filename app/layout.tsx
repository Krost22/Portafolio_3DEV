import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import dynamic from "next/dynamic"

const ThemeProvider = dynamic(() => import("@/components/ThemeProvider"), { ssr: false })
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false })

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VR Developer Portfolio",
  description: "Showcasing immersive virtual reality experiences",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'