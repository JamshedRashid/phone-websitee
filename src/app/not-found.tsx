import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f4f5f7] text-[#111111]">
      <SiteHeader />

      <div className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-xl rounded-[2rem] border border-white/80 bg-white/65 p-8 text-center shadow-[0_20px_70px_rgba(30,50,90,0.08)] backdrop-blur-xl sm:p-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/40">
            Page not found
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            We couldn’t find that page.
          </h1>

          <p className="mt-5 leading-7 text-black/55">
            The address may have changed, or the product may not be in
            the catalog.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/products#phones"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/80"
            >
              Explore phones
            </Link>

            <Link
              href="/"
              className="rounded-full border border-black/15 bg-white/70 px-6 py-3 text-sm font-medium transition hover:bg-white"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}