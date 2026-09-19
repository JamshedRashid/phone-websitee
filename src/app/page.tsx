"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Phone movement
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const phoneScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [0, -4]);

  // Text movement
  const textY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.15]);

  // Background glass movement
  const glassScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const glassOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.15]);

  return (
    <main className="min-h-screen bg-[#f4f5f7] text-[#111111]">
      {/* Announcement bar */}
      <div className="relative z-50 bg-black px-4 py-2 text-center text-xs text-white">
        Free nationwide delivery on selected devices
      </div>

      {/* Liquid-glass navigation */}
      <header className="sticky top-3 z-50 mx-auto mt-3 w-[calc(100%-24px)] max-w-7xl">
        <nav className="flex items-center justify-between rounded-full border border-white/70 bg-white/60 px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
          <a href="#" className="text-xl font-semibold tracking-tight">
            NOVA
          </a>

          <div className="hidden items-center gap-8 text-sm text-black/70 md:flex">
            <a className="transition hover:text-black" href="#">
              Phones
            </a>

            <a className="transition hover:text-black" href="#">
              Accessories
            </a>

            <a className="transition hover:text-black" href="#">
              Brands
            </a>

            <a className="transition hover:text-black" href="#">
              Support
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button className="rounded-full px-4 py-2 text-sm transition hover:bg-black/5">
              Search
            </button>

            <button className="rounded-full bg-black px-5 py-2 text-sm text-white transition hover:bg-black/80">
              Cart
            </button>
          </div>
        </nav>
      </header>

      {/* Scroll-controlled hero */}
      <section ref={heroRef} className="relative min-h-[145vh]">
        <div className="sticky top-0 mx-auto grid min-h-screen max-w-7xl items-center overflow-hidden px-6 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-10">
          {/* Atmospheric background light */}
          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : {
                    scale: glassScale,
                    opacity: glassOpacity,
                  }
            }
            className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-300/30 blur-[120px]"
          />

          {/* Hero text */}
          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : {
                    y: textY,
                    opacity: textOpacity,
                  }
            }
            className="relative z-10 text-center md:text-left"
          >
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.32em] text-black/50">
              Premium technology for Bangladesh
            </p>

            <h1 className="text-6xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Your next device,
              <span className="block text-black/35">
                beautifully chosen.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-black/60 md:mx-0 md:text-lg">
              Genuine phones and accessories with transparent pricing,
              dependable warranty and nationwide delivery.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row md:justify-start">
              <button className="rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition hover:scale-[1.03] hover:bg-black/80">
                Explore phones
              </button>

              <button className="rounded-full border border-black/15 bg-white/50 px-7 py-3.5 text-sm font-medium backdrop-blur-xl transition hover:bg-white">
                View new arrivals
              </button>
            </div>

            <p className="mt-8 text-sm text-black/40">
              Flagship devices starting from ৳49,999
            </p>
          </motion.div>

          {/* Animated phone presentation */}
          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : {
                    y: phoneY,
                    scale: phoneScale,
                    rotate: phoneRotate,
                  }
            }
            className="relative z-10 mt-14 flex min-h-[520px] items-center justify-center md:mt-0"
          >
            {/* Liquid-glass surface */}
            <motion.div
              style={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: glassScale,
                      opacity: glassOpacity,
                    }
              }
              className="absolute h-[75%] w-[75%] rounded-full border border-white/70 bg-white/35 shadow-[0_30px_100px_rgba(50,80,130,0.18)] backdrop-blur-2xl"
            />

            <Image
              src="/images/phone-duo.png"
              alt="Two premium flagship smartphones"
              width={1024}
              height={1536}
              priority
              className="relative z-10 h-[520px] w-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.22)] lg:h-[650px]"
            />

            {/* Floating glass product card */}
            <div className="absolute bottom-12 right-0 z-20 hidden rounded-3xl border border-white/70 bg-white/55 px-5 py-4 shadow-xl backdrop-blur-2xl lg:block">
              <p className="text-xs uppercase tracking-[0.22em] text-black/40">
                New arrival
              </p>

              <p className="mt-1 font-medium">Titanium Series</p>

              <p className="mt-1 text-sm text-black/50">
                From ৳89,999
              </p>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: textOpacity,
                  }
            }
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-black/35 md:flex"
          >
            <span>Scroll to explore</span>

            <div className="h-12 w-px bg-gradient-to-b from-black/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Section revealed after scrolling */}
      <section className="relative z-20 rounded-t-[3rem] bg-[#090909] px-6 py-28 text-white md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-white/45">
            Designed around you
          </p>

          <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Technology that moves with you.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/55">
            Explore carefully selected devices, accessories and support made
            for everyday life in Bangladesh.
          </p>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
              <p className="text-sm text-white/45">01</p>
              <h3 className="mt-12 text-2xl font-medium">Genuine devices</h3>
              <p className="mt-3 leading-7 text-white/50">
                Clearly identified products with transparent warranty details.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
              <p className="text-sm text-white/45">02</p>
              <h3 className="mt-12 text-2xl font-medium">
                Nationwide delivery
              </h3>
              <p className="mt-3 leading-7 text-white/50">
                Reliable delivery information before you place an order.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
              <p className="text-sm text-white/45">03</p>
              <h3 className="mt-12 text-2xl font-medium">Human support</h3>
              <p className="mt-3 leading-7 text-white/50">
                Helpful guidance before and after purchasing your device.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}