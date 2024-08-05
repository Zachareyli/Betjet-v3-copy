'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

import { motion, AnimatePresence } from 'framer-motion'
import { fadeIn } from "./animation"

const navigation = [
  { name: 'More Games', href: '#More Games' },
  // { name: 'Whats New', href: 'https://www.bet.co.za/registration' },
  { name: 'Contact Us', href: '#Contact Us' },
  { name: 'Sport Markets', href: 'https://www.bet.co.za/sports' },
]

export default function TailwindNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [ text ] = useTypewriter({
    words: ["Feel the rush as your bets skyrocket!",
       "With a max multiplier of x100,000!",
      'A dynamic cash-out strategy.'],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 50,
    deleteSpeed: 10,
    
    });

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  }

  return (
    <div className="relative ">
      <div className="bg-[url('https://central.bet.co.za/wp-content/uploads/2024/08/SKYWARD_web_4_ce39fe277a.jpg')] bg-cover background-darken">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <a href="https://www.bet.co.za/registration" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Bet.co.za logo"
                  src="https://central.bet.co.za/wp-content/uploads/2024/04/logo-Bet.co_.za-new.png"
                  className="h-6 w-auto animate-bounce hover:transform-125"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12 ">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white hover:text-[#65bf7d]">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="https://www.bet.co.za/registration" className="text-sm font-semibold leading-6 text-white hover:text-[#65bf7d]">
                Join Now <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="https://www.bet.co.za/registration" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt="Bet.co.za logo"
                    src="https://central.bet.co.za/wp-content/uploads/2024/04/logo-Bet.co_.za-new.png"
                    className="h-2 w-auto"
                    loading="lazy"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={handleLinkClick} // Close menu on link click
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#65bf7d] hover:text-white"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="https://www.bet.co.za/registration"
                      onClick={handleLinkClick} // Close menu on link click
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-[#65bf7d] hover:text-white"
                    >
                      Join Now
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20 animate-pulse">
                Announcing our latest addition from Bet Games.{' '}
                <a href="https://www.bet.co.za/registration" className="font-semibold text-[#65bf7d]">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <motion.div 
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className="text-center">
              <h1
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Join now and Soar with <span className='text-[#1CA5BD] textShadow'>Skyward</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
              <span>{ text }</span>
                <span>
                  <Cursor/>
                </span>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://www.bet.co.za/registration"
                  className="rounded-md bg-[#65bf7d] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#54b270] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Join Now
                </a>
                <a href="https://www.bet.co.za/registration" className="text-sm font-semibold leading-6 text-white hover:text-[#65bf7d]">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.div>
          </div>
          </div>
        </div>
    </div>
  )
}
