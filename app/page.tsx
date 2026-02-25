"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ImageGallery from "@/components/ImageGallery"
import {
  ArrowRight,
  Wifi,
  Droplet,
  Camera,
  UtensilsCrossed,
  Shirt,
  Users,
  Sparkles,
} from "lucide-react"

/* ----------------------------- small helpers ----------------------------- */
function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

/** Scroll reveal (no libs) */
function useInViewOnce(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        obs.disconnect()
      }
    }, options)

    obs.observe(el)
    return () => obs.disconnect()
  }, [options])

  return { ref, inView }
}

/** 3D tilt for cards */
function useTilt3D(max = 10) {
  const [style, setStyle] = useState({
    transform:
      "perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
  })

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2

    const rY = ((x - midX) / midX) * max
    const rX = -((y - midY) / midY) * max

    setStyle({
      transform: `perspective(1200px) rotateX(${rX}deg) rotateY(${rY}deg) translateZ(12px)`,
    })
  }

  const onLeave = () =>
    setStyle({
      transform:
        "perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
    })

  return { style, onMove, onLeave }
}

function GlowOrb({ className }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl opacity-30 animate-floatSlow",
        className
      )}
    />
  )
}

/* ------------------------------ main page ------------------------------- */
export default function Home() {
  const amenities = useMemo(
    () => [
      { icon: Wifi, label: "High-Speed Wi-Fi", desc: "Fast internet connectivity" },
      { icon: Droplet, label: "RO Water", desc: "Pure drinking water" },
      { icon: Camera, label: "CCTV Security", desc: "24/7 surveillance" },
      { icon: UtensilsCrossed, label: "Food Service", desc: "Home-cooked meals" },
      { icon: Shirt, label: "Laundry Service", desc: "Free laundry facility" },
      { icon: Users, label: "Community", desc: "Friendly environment" },
    ],
    []
  )

  const hero = useInViewOnce()
  const feat = useInViewOnce()
  const gallery = useInViewOnce()
  const cta = useInViewOnce()

  return (
    <>
      <Navbar />

      {/* ----------------------------- HERO ----------------------------- */}
      <section className="relative min-h-screen pt-20 overflow-hidden bg-[#07070b]">
        {/* background image + overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="PG background"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,160,0,0.20),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(255,90,0,0.18),transparent_60%)]" />
        </div>

        {/* floating orbs */}
        <GlowOrb className="top-24 right-10 h-72 w-72 bg-amber-300" />
        <GlowOrb className="bottom-16 left-8 h-80 w-80 bg-orange-300" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
            {/* left */}
            <div
              ref={hero.ref}
              className={cn(
                "transition-all duration-700",
                hero.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white/90 backdrop-blur-md">
                <Sparkles size={16} className="text-orange-300" />
                <span className="text-sm font-semibold">
                  Your Home Away From Home
                </span>
              </div>

              <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
                Premium{" "}
                <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent animate-gradientX">
                  PG Living
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
                Experience comfort, community, and convenience at{" "}
                <span className="text-white font-semibold">Ravinairayen PG Guesthouse</span>.
                Affordable luxury accommodation in Haryana with modern amenities.
              </p>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-7 py-3 font-bold text-white shadow-[0_18px_45px_-18px_rgba(255,140,0,0.8)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
                >
                  Explore Rooms
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="tel:+918571801102"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-7 py-3 font-bold text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
                >
                  Call Us Now
                </a>
              </div>

              {/* price chips */}
              <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <p className="text-2xl font-extrabold text-orange-300">₹8,000</p>
                  <p className="text-white/70 text-sm">Per Month</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <p className="text-lg font-extrabold text-orange-300">
                    Single & Sharing
                  </p>
                  <p className="text-white/70 text-sm">Room Options</p>
                </div>
              </div>
            </div>

            {/* right 3D showcase */}
            <HeroShowcase />
          </div>
        </div>

        {/* bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </section>

      {/* -------------------------- FEATURES -------------------------- */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            ref={feat.ref}
            className={cn(
              "text-center transition-all duration-700",
              feat.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              World-Class{" "}
              <span className="bg-gradient-to-r from-amber-700 to-orange-500 bg-clip-text text-transparent">
                Amenities
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for a smooth, comfortable living experience.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((a, idx) => (
              <AmenityCard key={idx} item={a} delay={idx * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- GALLERY --------------------------- */}
      <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_25%_25%,rgba(255,130,0,0.25),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(255,210,0,0.22),transparent_55%)]" />

        <div
          ref={gallery.ref}
          className={cn(
            "relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-700",
            gallery.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Tour Our{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Premium Rooms
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Modern, spacious rooms designed for comfort and convenience.
            </p>
          </div>

          <ImageGallery
            images={[
              { src: "/gallery/room-1.jpg", title: "Premium Single Room", description: "Modern single bedroom with premium amenities and comfort" },
              { src: "/gallery/room-2.jpg", title: "Deluxe Double Room", description: "Spacious double bedroom perfect for couples or friends" },
              { src: "/gallery/room-3.jpg", title: "Contemporary Suite", description: "Well-designed suite with attached bathroom and workspace" },
              { src: "/gallery/room-4.jpg", title: "Master Bedroom", description: "Premium room with full amenities, mirror and storage" },
              { src: "/gallery/bedroom-5.jpg", title: "Shared Accommodation", description: "Affordable shared rooms with all modern facilities" },
              { src: "/gallery/bedroom-deluxe.jpg", title: "Comfort Deluxe", description: "Single occupancy with wardrobe and elegant interiors" },
              { src: "/gallery/bedroom-spacious.jpg", title: "Spacious Master", description: "Large room with premium furnishings and décor" },
              { src: "/gallery/bedroom-6.jpg", title: "Cozy Room", description: "Intimate room with modern amenities and ventilation" },
            ]}
            autoplay={true}
            autoplayInterval={5000}
          />
        </div>
      </section>

      {/* ------------------------------ CTA ------------------------------ */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 w-44 h-44 bg-white rounded-full blur-2xl animate-floatSlow" />
          <div className="absolute bottom-10 right-10 w-44 h-44 bg-white rounded-full blur-2xl animate-floatSlow" />
        </div>

        <div
          ref={cta.ref}
          className={cn(
            "relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center transition-all duration-700",
            cta.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/85">
            Book your room today and experience premium PG living.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918571801102"
              className="rounded-xl bg-white px-8 py-3 font-bold text-amber-700 transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Call: +91-8571801102
            </a>
            <Link
              href="/contact"
              className="rounded-xl border-2 border-white/90 px-8 py-3 font-bold text-white transition-all hover:bg-white hover:text-amber-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* --------------------------- GLOBAL CSS --------------------------- */}
      <style jsx global>{`
        @keyframes gradientX {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientX {
          background-size: 200% 200%;
          animation: gradientX 6s ease infinite;
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .animate-floatSlow {
          animation: floatSlow 6.5s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-120%) skewX(-12deg); }
          100% { transform: translateX(220%) skewX(-12deg); }
        }
        .shine::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.22),
            transparent
          );
          transform: translateX(-120%) skewX(-12deg);
          animation: shimmer 4.4s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}

/* -------------------------- Hero right component -------------------------- */
function HeroShowcase() {
  const { style, onMove, onLeave } = useTilt3D(10)
  const [imgError, setImgError] = useState(false)

  return (
    <div className="hidden md:block">
      <div
        className="relative"
        style={{ perspective: "1400px" }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {/* glow */}
        <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-orange-400 to-amber-300 blur-2xl opacity-45" />

        {/* 3D glass card */}
        <div
          className="relative rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden"
          style={style}
        >
          {/* top highlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.20),transparent_45%)]" />

          {/* content */}
          <div className="relative p-4">
            <div className="relative rounded-2xl overflow-hidden bg-black/20">
              {!imgError ? (
                <Image
                  src="/logo.png"
                  alt="Ravinairayen PG"
                  width={900}
                  height={600}
                  priority
                  onError={() => setImgError(true)}
                  className="h-[26rem] w-full object-contain animate-floatSlow"
                />
              ) : (
                <div className="h-[26rem] w-full grid place-items-center text-white/80">
                  <div className="text-center px-6">
                    <p className="text-xl font-bold">Logo not found</p>
                    <p className="mt-2 text-sm text-white/60">
                      Put your logo in <span className="font-semibold">/public/logo.png</span>
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* mini chips */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { t: "24/7", s: "Security" },
                { t: "AC", s: "Rooms" },
                { t: "Near", s: "Market" },
              ].map((x, i) => (
                <div
                  key={i}
                  className="relative rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center text-white/85 overflow-hidden shine"
                >
                  <p className="text-lg font-extrabold">{x.t}</p>
                  <p className="text-xs text-white/60">{x.s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* floating label */}
        <div className="absolute -bottom-5 left-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white/85 backdrop-blur-md shadow-lg animate-floatSlow">
          <span className="text-sm font-semibold">Premium • Safe • Affordable</span>
        </div>
      </div>
    </div>
  )
}

/* -------------------------- Amenity 3D card -------------------------- */
function AmenityCard({ item, delay = 0 }) {
  const { style, onMove, onLeave } = useTilt3D(8)
  const Icon = item.icon
  const { ref, inView } = useInViewOnce()

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative rounded-2xl border border-amber-100 bg-gradient-to-br from-white to-amber-50 p-7 shadow-sm hover:shadow-xl transition-shadow"
        style={style}
      >
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-orange-200/30 to-amber-200/20 opacity-0 hover:opacity-100 transition-opacity" />
        <div className="relative">
          <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 p-3 shadow-md">
            <Icon size={26} className="text-white" />
          </div>
          <h3 className="mt-4 text-xl font-extrabold text-gray-900">
            {item.label}
          </h3>
          <p className="mt-2 text-gray-600">{item.desc}</p>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-amber-200 to-transparent" />

          <div className="mt-4 text-sm text-gray-600">
            <span className="font-semibold text-gray-900">Included</span>{" "}
            in all room plans.
          </div>
        </div>
      </div>
    </div>
  )
}