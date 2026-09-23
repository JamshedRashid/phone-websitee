import Image from "next/image";
import type { ShowcasePhone } from "../data/showcasePhones";

type ShowcasePhoneCardProps = {
  phone: ShowcasePhone;
};

export default function ShowcasePhoneCard({
  phone,
}: ShowcasePhoneCardProps) {
  return (
    <article className="glass-product group rounded-[2rem] p-5">
      <div className="relative z-10">
        <span className="inline-block rounded-full border border-white/80 bg-white/65 px-3 py-1.5 text-xs text-black/55 backdrop-blur-xl">
          {phone.brand}
        </span>

        <div className="mt-4 flex h-64 items-center justify-center overflow-hidden rounded-[1.5rem] bg-white/40 sm:h-72">
          {phone.imageSrc ? (
            <Image
              src={phone.imageSrc}
              alt={phone.name}
              width={600}
              height={600}
              className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="text-center">
              <div
                aria-hidden="true"
                className="mx-auto h-28 w-16 rounded-[1rem] border-[5px] border-black/15 bg-gradient-to-br from-white to-blue-100 shadow-lg"
              />
              <p className="mt-5 text-xs text-black/40">
                Product image coming soon
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 border-t border-black/10 pt-5">
          <h2 className="text-2xl font-semibold tracking-tight">
            {phone.name}
          </h2>

          <p className="mt-2 text-sm leading-6 text-black/55">
            {phone.summary}
          </p>

          <ul className="mt-5 space-y-2 text-sm text-black/65">
            {phone.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span aria-hidden="true" className="text-black/35">
                  •
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex items-center justify-between border-t border-black/10 pt-5">
            <span className="text-xs text-black/40">
              Demo listing · No price or stock confirmed
            </span>

            <a
              href={phone.officialSpecsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View official specifications for ${phone.name}`}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-xl text-white transition group-hover:rotate-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              ↗
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}