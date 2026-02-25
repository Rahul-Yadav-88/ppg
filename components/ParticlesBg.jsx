"use client"

import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: { value: 55, density: { enable: true, area: 900 } },
          color: { value: ["#ffffff", "#ffb84a", "#ff7a18"] },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 140,
            opacity: 0.22,
            width: 1,
          },
          opacity: { value: 0.35 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 1.1, outModes: { default: "out" } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 140, duration: 0.3 },
            push: { quantity: 2 },
          },
        },
      }}
      className="absolute inset-0"
    />
  )
}