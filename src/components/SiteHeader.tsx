"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Phones", href: "/products#phones" },
  { label: "All products", href: "/products" },
  { label: "Categories", href: "/#categories" },
  { label: "Phone showcase", href: "/showcase" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-3 z-[100] mx-auto mt-3 w-[calc(100%-24px)] max-w-7xl">
      <nav
        aria-label="Main navigation"
        className="relative flex items-center justify-between gap-3 rounded-full border border-white/70 bg-white/75 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:px-5"
      >
        <Link
          href="/"
          className="shrink-0 text-xl font-semibold tracking-tight"
        >
          NOVA
        </Link>

        <div className="hidden items-center gap-8 text-sm text-black/65 md:flex">
          <Link className="transition hover:text-black" href="/products#phones">
            Phones
          </Link>
          <Link className="transition hover:text-black" href="/products">
            All products
          </Link>
          <Link className="transition hover:text-black" href="/#categories">
            Categories
          </Link>
          <Link className="transition hover:text-black" href="/showcase">
            Showcase
          </Link>
        </div>

        <Link
          href="/products"
          className="hidden rounded-full bg-black px-5 py-2.5 text-sm text-white transition hover:bg-black/80 md:inline-flex"
        >
          Explore
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label="Open main menu"
          aria-controls={menuId}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
            className="h-6 w-6"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close main menu"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
              className="fixed inset-0 z-40 bg-black/35 backdrop-blur-sm md:hidden"
            />

            <motion.div
              id={menuId}
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Main menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: reduceMotion ? 0 : 0.28,
                ease: "easeOut",
              }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(88vw,380px)] flex-col overflow-y-auto rounded-l-[2rem] border-l border-white/70 bg-[#f4f5f7]/95 p-6 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              <div className="flex items-center justify-between border-b border-black/10 pb-6">
                <span className="text-xl font-semibold tracking-tight">
                  Main menu
                </span>

                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label="Close main menu"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  ×
                </button>
              </div>

              <nav aria-label="Mobile navigation" className="pt-4">
                {menuLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between border-b border-black/10 py-5 text-lg font-medium transition hover:text-black/55"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true" className="text-black/40">
                      ↗
                    </span>
                  </Link>
                ))}
              </nav>

              <p className="mt-auto pt-10 text-sm leading-6 text-black/45">
                Storefront design preview for Bangladesh
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}