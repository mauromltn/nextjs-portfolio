import { IoIosArrowForward } from 'react-icons/io'
import { GridBackgroundDemo } from './ui/GridBackgroundDemo'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
         <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
         <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
         <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      <div>
         <GridBackgroundDemo />

         <div className='relative flex justify-center my-20 z-10'>
            <div className='flex justify-center items-center flex-col max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] '>
               <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                  Dynamic Web Magic With Next.js
               </h2>

               <TextGenerateEffect
                  className='text-center text-[40px] md:text-5xl lg:text-6xl'
                  words='Transforming Concepts into Seamless User Experiences'
                  duration={1}
               />

               <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                  Hi, I&apos;m Mauro, a Next.js Developer based in Italy.
               </p>

               <a href="#about">
                  <MagicButton
                     title='Show my work'
                     icon={<IoIosArrowForward />}
                  />
               </a>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Hero