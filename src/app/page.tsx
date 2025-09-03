import React from "react";
import Card from "@/components/Card";

const products = [
  {
    id: 1,
    title: "Nike Air Max",
    price: 120,
    imageSrc: "/shoes/shoe-1.jpg",
    imageAlt: "Nike Air Max",
    badgeText: "Best Seller",
    category: "Men's Shoes",
    colorsCount: 6,
  },
  {
    id: 2,
    title: "Nike Revolution",
    price: 90,
    imageSrc: "/shoes/shoe-2.webp",
    imageAlt: "Nike Revolution",
    badgeText: "Extra 20% off",
    category: "Men's Shoes",
    colorsCount: 4,
  },
  {
    id: 3,
    title: "Nike Pegasus",
    price: 110,
    imageSrc: "/shoes/shoe-3.webp",
    imageAlt: "Nike Pegasus",
    badgeText: "Extra 10% off",
    category: "Men's Shoes",
    colorsCount: 6,
  },
];

const Home = () => {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-[var(--text-heading-1)] leading-[var(--text-heading-1--line-height)] font-[var(--text-heading-1--font-weight)] text-[var(--color-dark-900)]">
          Latest Shoes
        </h1>

        <section className="mt-10">
          <h2 className="text-[var(--text-heading-3)] leading-[var(--text-heading-3--line-height)] font-[var(--text-heading-3--font-weight)] text-[var(--color-dark-900)] mb-6">
            Best of Air Max
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                price={product.price}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
                badgeText={product.badgeText}
                category={product.category}
                colorsCount={product.colorsCount}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
