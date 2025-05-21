'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = {
    damping: 20,
    stiffness: 400,
    mass: 0.3,
  }

  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)
    const handleMouseDown = () => setIsHovered(false)

    const attachHoverListeners = () => {
      const hoverTargets = document.querySelectorAll('a, button, [data-cursor-hover]')
      hoverTargets.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })
    }

    // Attach on initial render
    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', handleMouseDown)
    attachHoverListeners()

    // Re-attach on DOM updates (route changes, etc.)
    const observer = new MutationObserver(() => {
      attachHoverListeners()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      observer.disconnect()
    }
  }, [cursorX, cursorY])

  return (
    <div className="hidden lg:block">
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          scale: isHovered ? 1.3 : 0.7,
          transition: 'transform 0.05s ease-out',
        }}
      />
    </div>
  )
}
