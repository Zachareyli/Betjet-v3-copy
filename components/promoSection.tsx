"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { fadeIn } from "./animation"


export default function PromoSection() {
    return (
        <div className="relative overflow-hidden bg-black">
        <div className="pb-60 pt-16 sm:pb-40 sm:pt-24 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <motion.div
             variants={fadeIn("up", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.7}}
             className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              <span className="text-[#1CA5BD] textShadow">Skyward</span> has finally landed!
              </h1>
              <p className="mt-4 text-xl text-white">
              Come fly with us at Bet.co.za as we soar through the beautiful skies of Skyward
              </p>
            </motion.div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center justify-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <video
                            autoPlay
                            loop
                            muted
                            className="w-full max-w-md sm:max-w-2xl"
                          >
                            <source src="https://central.bet.co.za/wp-content/uploads/2024/08/skyward-video-720.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.a
                 variants={fadeIn("up", 0.5)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{once: false, amount: 0.7}}
                  href="https://www.bet.co.za/registration"
                  className="inline-block rounded-md border border-transparent bg-[#65bf7d] px-8 py-3 text-center font-medium text-white hover:bg-[#54b270] hidden md:inline-block"
                >
                  Bet Now
                </motion.a>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
  }
  