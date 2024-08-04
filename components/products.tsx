"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { fadeIn } from "./animation"
import Image from 'next/image';
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: '777 Strike',
    href: 'https://www.bet.co.za/registration',
    price: 'Bet Now',
    imageSrc: 'https://cdn.play-gaming.com/casino/29756/1660156559525_777strike-min.jpeg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Lightning Roulette',
    href: 'https://www.bet.co.za/registration',
    price: 'Bet Now',
    imageSrc: 'https://cdn.play-gaming.com/casino/25352/1701427015062_7001-LightningRoulette440x440.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Cash Volt',
    href: 'https://www.bet.co.za/registration',
    price: 'Bet Now',
    imageSrc: 'https://cdn.play-gaming.com/casino/29759/1660156603025_cash-volt.jpeg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 4,
    name: 'Crazy Time',
    href: 'https://www.bet.co.za/registration',
    price: 'Bet Now',
    imageSrc: 'https://cdn.play-gaming.com/casino/25644/1701425727350_7001-CrazyTime440x440.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  // More products...
]

export default function ProductList() {
  return (
    <div className="bg-black" id="More Games">
  <motion.div
     variants={fadeIn("down", 0.5)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once: false, amount: 0.7}}
  className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
    <h2 className="text-2xl font-bold tracking-tight text-white">More Games to Bet on Now!</h2>

    <h2 className="sr-only">Products</h2>

    <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
      {products.map((product) => (
        <a key={product.id} href={product.href} className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 transition-transform duration-300 ease-in-out group-hover:scale-110">
      <Image
        src={product.imageSrc}
        alt={product.imageAlt}
        width={440}
        height={440}
        className="transition-transform duration-300 ease-in-out group-hover:scale-105" // Keep your Tailwind classes
      />
    </div>
          <h3 className="mt-4 text-sm text-white">{product.name}</h3>
          <button className="mt-1 text-lg font-medium text-white rounded-md hover:bg-[#54b270] hover:px-2">{product.price}</button>
        </a>
      ))}
    </div>
  </motion.div>
</div>

  )
}




