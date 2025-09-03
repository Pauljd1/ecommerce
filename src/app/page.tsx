import React from "react";
import Card from "@/components/Card";

const products = [
  {
    id: 1,
    title: "Nike Air Max",
    price: 120,
    imageSrc: "/shoes/shoe-1.jpg",
    imageAlt: "Nike Air Max",
    badgeText: "New",
  },
  {
    id: 2,
    title: "Nike Revolution",
    price: 90,
    imageSrc: "/shoes/shoe-2.webp",
    imageAlt: "Nike Revolution",
    badgeText: "New",
  },
  {
    id: 3,
    title: "Nike Pegasus",
    price: 110,
    imageSrc: "/shoes/shoe-3.webp",
    imageAlt: "Nike Pegasus",
    badgeText: "New",
  },
];

const Home = () => {
  return (
    <main>
      <h1 className="text-heading-1 font-jost">Latest Shoes</h1>
      <section className="mt-10">
        <h2 className="text-heading-2 font-jost mb-4">Latest Shoes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              price={product.price}
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              badgeText={product.badgeText}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
