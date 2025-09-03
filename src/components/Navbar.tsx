"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface NavItem {
  label: string;
  href?: string;
}

export interface NavbarProps {
  items?: NavItem[];
  logoAlt?: string;
  cartCount?: number;
  className?: string;
}

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "Kids", href: "#" },
  { label: "Collections", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar({
  items = DEFAULT_ITEMS,
  logoAlt = "Nike",
  cartCount,
  className,
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`w-full bg-[var(--color-light-100)] border-b border-[var(--color-light-300)] ${className ?? ""}`}>
      <nav aria-label="Primary" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link href="#" className="flex items-center shrink-0" aria-label="Home">
            <Image src="/logo.svg" width={36} height={36} alt={logoAlt} priority />
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href ?? "#"}
                  className="text-[var(--color-dark-900)] text-[var(--text-body)] leading-[var(--text-body--line-height)] font-medium hover:text-[var(--color-dark-700)] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-6">
            <button type="button" className="text-[var(--color-dark-900)] hover:text-[var(--color-dark-700)] text-[var(--text-body)]">
              Search
            </button>
            <button type="button" className="text-[var(--color-dark-900)] hover:text-[var(--color-dark-700)] text-[var(--text-body)]">
              My Cart{typeof cartCount === "number" ? ` (${cartCount})` : ""}
            </button>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[var(--color-dark-900)] hover:bg-[var(--color-light-200)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-dark-900)]"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <span className="block w-6 h-0.5 bg-[var(--color-dark-900)] mb-1.5" />
            <span className="block w-6 h-0.5 bg-[var(--color-dark-900)] mb-1.5" />
            <span className="block w-6 h-0.5 bg-[var(--color-dark-900)]" />
          </button>
        </div>

        <div id="mobile-menu" className={`${open ? "block" : "hidden"} md:hidden pb-4`}>
          <ul className="flex flex-col gap-2">
            {items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href ?? "#"}
                  className="block px-2 py-2 rounded-md text-[var(--color-dark-900)] hover:bg-[var(--color-light-200)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="flex gap-4 px-2 pt-2">
              <button className="text-[var(--color-dark-900)]">Search</button>
              <button className="text-[var(--color-dark-900)]">
                My Cart{typeof cartCount === "number" ? ` (${cartCount})` : ""}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
