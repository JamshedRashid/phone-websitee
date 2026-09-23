"use client";

import Link from "next/link";
import { showcasePhones } from "../data/showcasePhones";
import ShowcasePhoneCard from "./ShowcasePhoneCard";

const featuredIds = [
  "iphone-18-pro",
  "galaxy-s26-ultra",
  "pixel-11-pro",
];

export default function FeaturedShowcase() {
  const featuredPhones = featuredIds
    .map((id) => showcasePhones.find((phone) => phone.id === id))
    .filter((phone) => phone !== undefined);

  return (
    <section className="bg-[#f4f5f7] px-6 py-24 text-[#111111] md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/40">
          Device showcase · Demo listings
        </p>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              A closer look.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-black/55">
              Explore selected phones and their specifications. Store prices
              and availability have not been confirmed.
            </p>
          </div>

          <Link
            href="/showcase"
            className="rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium transition hover:bg-white"
          >
            View all phones ↗
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredPhones.map((phone) => (
            <ShowcasePhoneCard key={phone.id} phone={phone} />
          ))}
        </div>
      </div>
    </section>
  );
}