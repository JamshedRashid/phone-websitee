"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

type ProductCardProps = {
  badge?: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  name: string;
  description: string;
  footerText?: string;
  priceLabel?: string;
  href?: string;
};

export default function ProductCard({
  badge,
  imageSrc,
  imageAlt,
  category,
  name,
  description,
  footerText,
  priceLabel,
  href,
}: ProductCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 35 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="glass-product group w-full max-w-[340px] rounded-[2rem] p-5"
    >
      <div className="relative z-10">
        {badge && (
          <span className="inline-block rounded-full border border-white/80 bg-white/60 px-3 py-1.5 text-xs text-black/60 backdrop-blur-xl">
            {badge}
          </span>
        )}

        <div className="flex h-[280px] items-center justify-center sm:h-[320px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1024}
            height={1536}
            className="h-[250px] w-auto max-w-full object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.13)] transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2 sm:h-[290px]"
          />
        </div>

        <div className="border-t border-black/10 pt-5">
          <p className="text-xs uppercase tracking-[0.2em] text-black/40">
            {category}
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-tight">
            {name}
          </h3>

          <p className="mt-2 text-sm leading-6 text-black/55">
            {description}
          </p>

          <div className="mt-6 flex items-center justify-between gap-3">
            <span className="text-sm font-medium text-black/55">
              {priceLabel ?? footerText}
            </span>

            {href ? (
              <Link
                href={href}
                aria-label={`View details for ${name}`}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-xl text-white transition group-hover:rotate-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                ↗
              </Link>
            ) : (
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-xl text-white transition group-hover:rotate-45"
              >
                ↗
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}