import { db } from '../src/lib/db';
import { products } from '../src/lib/db/schema';

const nikeProducts = [
  {
    name: 'Nike Air Max 90',
    description: 'The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details.',
    price: '119.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/air-max-90-mens-shoes-6n7J06.png',
    category: 'Shoes',
    brand: 'Nike'
  },
  {
    name: 'Nike Air Force 1',
    description: 'The radiance lives on in the Nike Air Force 1 \'07, the basketball original that puts a fresh spin on what you know best.',
    price: '109.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png',
    category: 'Shoes',
    brand: 'Nike'
  },
  {
    name: 'Nike Dri-FIT T-Shirt',
    description: 'The Nike Dri-FIT T-Shirt delivers a soft feel, sweat-wicking performance and great range of motion to get you through your workout in total comfort.',
    price: '29.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16a04c80-3b54-44d5-ac72-092a7d60709a/dri-fit-mens-fitness-t-shirt-HPFTlH.png',
    category: 'Apparel',
    brand: 'Nike'
  },
  {
    name: 'Nike React Infinity Run',
    description: 'The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run.',
    price: '159.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ailoqcwn8edlfnpc8ixe/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.png',
    category: 'Shoes',
    brand: 'Nike'
  },
  {
    name: 'Nike Tech Fleece Hoodie',
    description: 'The Nike Sportswear Tech Fleece Windrunner Hoodie reimagines our iconic Windrunner jacket in premium fleece.',
    price: '89.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7c5678f4-c28d-4862-a8d9-021b97ab0d7e/sportswear-tech-fleece-windrunner-mens-full-zip-hoodie-1VnXdn.png',
    category: 'Apparel',
    brand: 'Nike'
  }
];

async function seed() {
  try {
    console.log('Seeding database...');
    
    await db.insert(products).values(nikeProducts);
    
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seed();