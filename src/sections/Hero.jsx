import React from 'react'
import { palabras } from '../constants'

export default function Hero() {




  return (
    <section id='hero' className='raltive overflow-hidden'>
      <div className='absolute top-0 left-0 z-10'> 
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className='hero-layout'>
        {/* Left Column */}
        <header className='flex flex-col justify-center md:w-fulll w-screen md:px-20 px-5'>
          <div className='felx flex-col gap-7'>
            <div className='hero-text '>
              <h1>Organizacion
                <span className='slide'>
                  <span className='wrapper'>
                    {palabras.map((palabra) =>(
                      <span key={palabra.text} className='flex items-center md:gap-3 gap-1 pb-2 '>
                        <img src={palabra.imgPath} alt={palabra.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'/>
                        <span>
                          {palabra.text}
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>en proyectos reales</h1>
              <h1>que dan resultado</h1>
            </div>
          </div>
        </header>
        {/* Right Column */}
      </div>
    </section>
  )
}
