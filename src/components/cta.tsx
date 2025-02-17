import Image from 'next/image';
import BlurredShape from '@/public/images/blurred-shape.svg';

export default function Cta() {
  return (
    <section className='relative overflow-hidden'>
      <div
        className='pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2'
        aria-hidden='true'
      >
        <Image
          className='max-w-none'
          src={BlurredShape}
          width={760}
          height={668}
          alt='Blurred shape'
        />
      </div>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2
              className='animate-gradient bg-gradient-to-r from-gray-200 via-indigo-300 to-gray-50 bg-[length:200%_auto] bg-clip-text pb-8 font-mono text-3xl font-semibold text-transparent md:text-4xl'
              data-aos='fade-up'
            >
              Find Your Perfect Job with JobMatch
            </h2>
            <div className='mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center'>
              <div data-aos='fade-up' data-aos-delay={400}>
                <a
                  className='btn group mb-4 inline-flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-gradient-to-t from-indigo-600 to-indigo-500 font-sans text-sm font-semibold text-white shadow-inner transition-all hover:bg-gradient-to-b sm:mb-0 sm:w-auto'
                  href='#0'
                >
                  <span className='relative inline-flex items-center'>
                    Find Your Dream Job Now
                    <span className='ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5'>
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
              <div data-aos='fade-up' data-aos-delay={600}>
                <a
                  className='btn relative inline-flex w-full items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-gradient-to-b from-gray-800 to-gray-800/60 font-sans text-sm font-semibold text-gray-300 transition-all hover:bg-gradient-to-t sm:ml-4 sm:w-auto'
                  href='#0'
                >
                  Start Searchiing for the best Candidate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}