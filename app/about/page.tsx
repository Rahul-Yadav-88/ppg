"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { CheckCircle, Users, Zap, Heart, Sparkles, ShieldCheck } from "lucide-react"

/* ----------------------------- helpers ----------------------------- */
function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

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
      transform: `perspective(1200px) rotateX(${rX}deg) rotateY(${rY}deg) translateZ(10px)`,
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
        "pointer-events-none absolute rounded-full blur-3xl opacity-25 animate-floatSlow",
        className
      )}
    />
  )
}

/* ----------------------------- page ----------------------------- */
export default function About() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 })

  const hero = useInViewOnce()
  const story = useInViewOnce()
  const valuesSec = useInViewOnce()
  const stats = useInViewOnce()

  const values = useMemo(
    () => [
      {
        icon: Heart,
        title: "Comfort First",
        description:
          "Your comfort and well-being come first. We maintain high standards in accommodation and service.",
      },
      {
        icon: Users,
        title: "Community",
        description:
          "We build a friendly environment where residents feel welcomed, supported, and valued.",
      },
      {
        icon: Zap,
        title: "Excellence",
        description:
          "Every detail matters. We consistently improve to deliver a premium living experience.",
      },
      {
        icon: CheckCircle,
        title: "Reliability",
        description:
          "You can count on us—cleanliness, safety, and support you can trust every day.",
      },
    ],
    []
  )

  const whyChoose = useMemo(
    () => [
      "Premium quality at affordable prices",
      "Safe and secure environment",
      "Experienced and friendly staff",
      "Flexible accommodation options",
    ],
    []
  )

  const onHeroMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setParallax({ x, y })
  }
  const onHeroLeave = () => setParallax({ x: 0, y: 0 })

  return (
    <>
      <Navbar />

      {/* ----------------------------- HERO ----------------------------- */}
      <section
        className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-[#07070b]"
        onMouseMove={onHeroMove}
        onMouseLeave={onHeroLeave}
      >
        <div className="absolute inset-0">
          <Image
            src="/gallery/exterior-2.jpg"
            alt="Exterior"
            fill
            priority
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,170,0,0.20),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(255,90,0,0.18),transparent_60%)]" />
        </div>

        {/* glow orbs */}
        <GlowOrb
          className="top-24 right-10 h-80 w-80 bg-amber-300"
          style={{
            transform: `translate3d(${parallax.x * -14}px, ${parallax.y * -10}px, 0)`,
          }}
        />
        <GlowOrb
          className="bottom-14 left-8 h-96 w-96 bg-orange-300"
          style={{
            transform: `translate3d(${parallax.x * 14}px, ${parallax.y * 10}px, 0)`,
          }}
        />

        <div
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full"
          style={{
            transform: `translate3d(${parallax.x * -6}px, ${parallax.y * -6}px, 0)`,
          }}
        >
          <div
            ref={hero.ref}
            className={cn(
              "max-w-3xl mx-auto text-center transition-all duration-700",
              hero.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white/90 backdrop-blur-md">
              <Sparkles size={16} className="text-orange-300" />
              <span className="text-sm font-semibold">Comfort • Community • Care</span>
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
              About{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent animate-gradientX">
                Ravinairayen
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
              We create safe, clean, and premium living spaces where students and
              professionals truly feel at home.
            </p>

            {/* floating mini badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: ShieldCheck, text: "24/7 Security" },
                { icon: CheckCircle, text: "Hygiene First" },
                { icon: Users, text: "Friendly Community" },
              ].map((b, i) => {
                const Icon = b.icon
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-white/85 backdrop-blur-md shadow-lg animate-floatSlow"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={16} className="text-amber-300" />
                      <span className="text-sm font-semibold">{b.text}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />
      </section>

      {/* ----------------------------- STORY ----------------------------- */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* left text */}
            <div
              ref={story.ref}
              className={cn(
                "transition-all duration-700",
                story.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                Our Story
              </h2>

              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Ravinairayen PG Guesthouse was founded with a simple mission: to
                provide affordable, comfortable, and safe accommodation for
                working professionals and students in Haryana.
              </p>

              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                We know finding the right place can be stressful, so we built a
                space that combines modern amenities, a friendly community, and
                responsive support.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Located in Met City, Yukubpur, our guesthouse is positioned for
                easy access to key commercial areas, colleges, and transport
                hubs.
              </p>
            </div>

            {/* right 3D glass card */}
            <WhyChooseCard items={whyChoose} />
          </div>
        </div>
      </section>

      {/* ----------------------------- VALUES ----------------------------- */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-amber-50 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            ref={valuesSec.ref}
            className={cn(
              "text-center mb-16 transition-all duration-700",
              valuesSec.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => (
              <ValueCard key={idx} value={v} />
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- STATS ----------------------------- */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 w-44 h-44 bg-white rounded-full blur-2xl animate-floatSlow" />
          <div className="absolute bottom-10 right-10 w-44 h-44 bg-white rounded-full blur-2xl animate-floatSlow" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            ref={stats.ref}
            className={cn(
              "grid grid-cols-1 md:grid-cols-3 gap-8 text-center transition-all duration-700",
              stats.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            {[
              { number: "50+", label: "Happy Residents" },
              { number: "6+", label: "Premium Amenities" },
              { number: "24/7", label: "Security & Support" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-xl hover:scale-[1.03] transition-transform"
              >
                <p className="text-5xl font-extrabold mb-2">{stat.number}</p>
                <p className="text-white/85 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* ------------------------ global animations ------------------------ */}
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
      `}</style>
    </>
  )
}

/* ----------------------------- components ----------------------------- */
function WhyChooseCard({ items }) {
  const { style, onMove, onLeave } = useTilt3D(9)
  const { ref, inView } = useInViewOnce()

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative rounded-[1.75rem] border border-amber-200 bg-gradient-to-br from-amber-500 to-orange-500 p-8 text-white shadow-2xl overflow-hidden"
        style={style}
      >
        <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.20),transparent_45%)]" />
        <div className="relative">
          <h3 className="text-3xl font-extrabold mb-4">Why Choose Us?</h3>
          <ul className="space-y-4">
            {items.map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={22} className="flex-shrink-0 mt-0.5" />
                <span className="text-white/95">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function ValueCard({ value }) {
  const { style, onMove, onLeave } = useTilt3D(8)
  const { ref, inView } = useInViewOnce()
  const Icon = value.icon

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative group rounded-2xl border border-amber-100 bg-white/80 backdrop-blur-xl p-7
        shadow-[0_20px_60px_-35px_rgba(0,0,0,0.25)]
        hover:shadow-[0_30px_90px_-45px_rgba(255,140,0,0.45)]
        transition-all duration-500"
        style={style}
      >
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-orange-200/35 to-amber-200/25 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative">
          <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 p-3 shadow-md group-hover:scale-110 transition-transform">
            <Icon size={26} className="text-white" />
          </div>

          <h3 className="mt-4 text-xl font-extrabold text-gray-900">
            {value.title}
          </h3>
          <p className="mt-2 text-gray-600 leading-relaxed">{value.description}</p>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
          <p className="mt-4 text-sm text-gray-600">
            <span className="font-semibold text-gray-900">Promise:</span> consistent experience.
          </p>
        </div>
      </div>
    </div>
  )
}