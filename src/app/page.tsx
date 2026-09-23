"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import FeaturedShowcase from "../components/FeaturedShowcase";
import ProductCard from "../components/ProductCard";
import SiteHeader from "../components/SiteHeader";

const categories = [
  "Phones",
  "Audio",
  "Wearables",
  "Charging",
  "Cases",
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const phoneScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.15]);
  const glassScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const glassOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.15]);

  return (
    <main className="min-h-screen bg-[#f4f5f7] text-[#111111]">
      <div className="relative z-50 bg-black px-4 py-2 text-center text-xs text-white">
        Storefront design preview
      </div>

      <SiteHeader />

      {/* Hero */}
      <section
        id="top"
        ref={heroRef}
        className="relative min-h-[115vh] md:min-h-[145vh]"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-6 overflow-hidden px-6 pb-20 pt-20 md:sticky md:top-0 md:min-h-screen md:grid-cols-[0.9fr_1.1fr] md:gap-0 md:px-10 md:py-24">
          <motion.div
            aria-hidden="true"
            style={
              shouldReduceMotion
                ? undefined
                : { scale: glassScale, opacity: glassOpacity }
            }
            className="pointer-events-none absolute right-[-150px] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-blue-300/30 blur-[100px] md:right-0 md:h-[600px] md:w-[600px] md:blur-[120px]"
          />

          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : { y: textY, opacity: textOpacity }
            }
            className="relative z-10 min-w-0 text-center md:text-left"
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-black/50 sm:tracking-[0.32em]">
              A new way to explore technology
            </p>

            <h1 className="text-[clamp(2.7rem,11vw,4rem)] font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Your next device,
              <span className="block text-black/35">
                beautifully chosen.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-black/60 md:mx-0 md:mt-8 md:text-lg">
              A preview of a clean, thoughtful shopping experience for
              phones and accessories in Bangladesh.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-10 md:justify-start">
              <Link
                href="/products#phones"
                className="rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition hover:scale-[1.03] hover:bg-black/80"
              >
                Explore phones
              </Link>

              <a
                href="#categories"
                className="rounded-full border border-black/15 bg-white/50 px-7 py-3.5 text-sm font-medium backdrop-blur-xl transition hover:bg-white"
              >
                View categories
              </a>
            </div>

            <p className="mt-7 text-sm text-black/40 md:mt-8">
              Concept imagery and sample content
            </p>
          </motion.div>

          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : { y: phoneY, scale: phoneScale, rotate: phoneRotate }
            }
            className="relative z-10 mx-auto flex w-full max-w-[420px] items-center justify-center md:mt-0 md:max-w-none"
          >
            <motion.div
              aria-hidden="true"
              style={
                shouldReduceMotion
                  ? undefined
                  : { scale: glassScale, opacity: glassOpacity }
              }
              className="pointer-events-none absolute h-[75%] w-[75%] rounded-full border border-white/70 bg-white/35 shadow-[0_30px_100px_rgba(50,80,130,0.18)] backdrop-blur-2xl"
            />

            <Image
              src="/images/phone-duo.png"
              alt="Concept illustration of two fictional smartphones"
              width={1024}
              height={1536}
              priority
              className="relative z-10 h-auto w-full max-w-[270px] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.22)] sm:max-w-[350px] lg:max-w-[430px]"
            />

            <div className="absolute bottom-12 right-0 z-20 hidden rounded-3xl border border-white/70 bg-white/55 px-5 py-4 shadow-xl backdrop-blur-2xl lg:block">
              <p className="text-xs uppercase tracking-[0.22em] text-black/40">
                Design concept
              </p>
              <p className="mt-1 font-medium">Titanium Series</p>
              <p className="mt-1 text-sm text-black/50">
                Fictional device preview
              </p>
            </div>
          </motion.div>

          <motion.div
            aria-hidden="true"
            style={
              shouldReduceMotion
                ? undefined
                : { opacity: textOpacity }
            }
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-black/35 md:flex"
          >
            <span>Scroll to explore</span>
            <div className="h-12 w-px bg-gradient-to-b from-black/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-20 scroll-mt-40 rounded-t-[3rem] bg-[#090909] px-6 py-28 text-white md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-white/45">
            Designed around you
          </p>

          <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Technology that moves with you.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/55">
            A look at how the store could make browsing devices and
            accessories feel simple and enjoyable.
          </p>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
              <p className="text-sm text-white/45">01</p>
              <h3 className="mt-12 text-2xl font-medium">
                Clear product details
              </h3>
              <p className="mt-3 leading-7 text-white/50">
                Space for specifications, colour options and accurate
                product information.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
              <p className="text-sm text-white/45">02</p>
              <h3 className="mt-12 text-2xl font-medium">
                Easy exploration
              </h3>
              <p className="mt-3 leading-7 text-white/50">
                Browse useful categories and discover devices that fit
                your needs.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
              <p className="text-sm text-white/45">03</p>
              <h3 className="mt-12 text-2xl font-medium">
                Thoughtful design
              </h3>
              <p className="mt-3 leading-7 text-white/50">
                A calm layout with smooth movement on phones and desktops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category overview */}
      <section
        id="categories"
        className="scroll-mt-40 bg-[#f4f5f7] px-6 py-24 text-[#111111] md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/40">
            Explore the collection
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Find what fits your life.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category, index) => (
              <div
                key={category}
                className="group relative flex min-h-44 flex-col justify-between rounded-[2rem] border border-white/80 bg-white/60 p-6 shadow-[0_16px_50px_rgba(30,50,90,0.05)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[0_25px_60px_rgba(30,50,90,0.12)] md:min-h-64"
              >
                {category === "Phones" && (
                  <Link
                    href="/products#phones"
                    aria-label="Explore phones"
                    className="absolute inset-0 z-10 rounded-[2rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  />
                )}

                <span className="text-sm text-black/35">
                  0{index + 1}
                </span>

                <div className="flex items-end justify-between gap-2">
                  <h3 className="text-2xl font-medium tracking-tight">
                    {category}
                  </h3>

                  {category === "Phones" && (
                    <span
                      aria-hidden="true"
                      className="text-xl text-black/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                    >
                      ↗
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedShowcase />

      {/* Product card preview */}
      <section
        id="concept"
        className="scroll-mt-40 bg-[#f4f5f7] px-6 pb-28 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/40">
            A closer look
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            The product experience.
          </h2>

          <div className="mt-12">
            <ProductCard
              badge="Design preview"
              imageSrc="/images/phone-duo.png"
              imageAlt="Concept image showing two sides of a fictional smartphone"
              category="Smartphone concept"
              name="Titanium Series"
              description="A preview of how devices will appear in the store."
              footerText="Details coming soon"
            />
          </div>
        </div>
      </section>

      <footer className="bg-[#090909] px-6 py-10 text-white/60 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row">
          <span className="font-semibold text-white">NOVA</span>
          <span className="text-sm">
            Storefront design preview for Bangladesh
          </span>
        </div>
      </footer>
    </main>
  );
}