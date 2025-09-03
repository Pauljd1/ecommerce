import Image from "next/image";
import Link from "next/link";

export interface FooterLink {
  label: string;
  href?: string;
}
export interface FooterColumn {
  title: string;
  links: FooterLink[];
}
export interface FooterProps {
  columns?: FooterColumn[];
  year?: number;
  country?: string;
  className?: string;
}

const DEFAULT_COLUMNS: FooterColumn[] = [
  { title: "Featured", links: [{ label: "Air Force 1" }, { label: "Huarache" }, { label: "Air Max 90" }, { label: "Air Max 95" }] },
  { title: "Shoes", links: [{ label: "All Shoes" }, { label: "Custom Shoes" }, { label: "Jordan Shoes" }, { label: "Running Shoes" }] },
  { title: "Clothing", links: [{ label: "All Clothing" }, { label: "Modest Wear" }, { label: "Hoodies & Pullovers" }, { label: "Shirts & Tops" }] },
  { title: "Kids'", links: [{ label: "Infant & Toddler Shoes" }, { label: "Kids' Shoes" }, { label: "Kids' Jordan Shoes" }, { label: "Kids' Basketball Shoes" }] },
];

export default function Footer({
  columns = DEFAULT_COLUMNS,
  year = new Date().getFullYear(),
  country = "Croatia",
  className,
}: FooterProps) {
  return (
    <footer className={`w-full bg-[var(--color-dark-900)] text-[var(--color-light-100)] ${className ?? ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 items-start">
          <div className="lg:col-span-1">
            <Image src="/logo.svg" alt="Nike" width={48} height={48} className="invert" />
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[var(--color-light-100)] text-[var(--text-heading-3)] leading-[var(--text-heading-3--line-height)] font-medium">
                  {col.title}
                </h4>
                <ul className="mt-3 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href ?? "#"} className="text-[var(--color-dark-500)] hover:text-[var(--color-light-100)] text-[var(--text-body)]">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="lg:col-span-1 flex gap-3 lg:justify-end">
            {[
              { src: "/x.svg", alt: "X" },
              { src: "/facebook.svg", alt: "Facebook" },
              { src: "/instagram.svg", alt: "Instagram" },
            ].map((i) => (
              <a
                key={i.alt}
                href="#"
                aria-label={i.alt}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.18)] transition"
              >
                <Image src={i.src} alt={i.alt} width={18} height={18} className="invert" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.1)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-[var(--color-dark-500)] text-[var(--text-caption)]">
            <Image src="/globe.svg" alt="" width={16} height={16} />
            <span>{country}</span>
            <span>© {year} Nike, Inc. All Rights Reserved</span>
          </div>
          <ul className="flex items-center gap-6 text-[var(--color-dark-500)] text-[var(--text-caption)]">
            <li>
              <Link href="#" className="hover:text-[var(--color-light-100)]">
                Guides
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[var(--color-light-100)]">
                Terms of Sale
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[var(--color-light-100)]">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[var(--color-light-100)]">
                Nike Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
