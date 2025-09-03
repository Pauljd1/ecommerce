import Image from "next/image";
import Link from "next/link";

export interface CardProps {
  title: string;
  description?: string;
  price?: number | string;
  imageSrc: string;
  imageAlt?: string;
  badgeText?: string;
  href?: string;
  category?: string;
  colorsCount?: number;
  className?: string;
}

export default function Card({
  title,
  description,
  price,
  imageSrc,
  imageAlt = "",
  badgeText,
  href,
  category,
  colorsCount,
  className,
}: CardProps) {
  const priceText = typeof price === "number" ? `$${price.toFixed(2)}` : price;

  const content = (
    <>
      <div className="relative">
        {badgeText ? (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-[var(--color-light-100)] text-[var(--color-red)] px-3 py-1 text-[var(--text-caption)] leading-[var(--text-caption--line-height)] font-medium shadow">
            {badgeText}
          </span>
        ) : null}
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          width={400}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="px-3 sm:px-4 pt-3 pb-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[var(--color-dark-900)] text-[var(--text-heading-3)] leading-[var(--text-heading-3--line-height)] font-medium">
            {title}
          </h3>
          {priceText ? (
            <span className="text-[var(--color-dark-900)] text-[var(--text-body)] font-medium shrink-0">
              {priceText}
            </span>
          ) : null}
        </div>
        {category ? (
          <p className="mt-1 text-[var(--color-dark-700)] text-[var(--text-body)] leading-[var(--text-body--line-height)]">
            {category}
          </p>
        ) : null}
        {typeof colorsCount === "number" ? (
          <p className="text-[var(--color-dark-700)] text-[var(--text-caption)] leading-[var(--text-caption--line-height)]">
            {colorsCount} Colour
          </p>
        ) : null}
        {description ? (
          <p className="mt-2 text-[var(--color-dark-700)] text-[var(--text-body)]">
            {description}
          </p>
        ) : null}
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`group block overflow-hidden rounded-xl bg-[var(--color-light-100)] shadow-sm hover:shadow-md transition-shadow ${className ?? ""}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={`group block overflow-hidden rounded-xl bg-[var(--color-light-100)] shadow-sm hover:shadow-md transition-shadow ${className ?? ""}`}>
      {content}
    </div>
  );
}
