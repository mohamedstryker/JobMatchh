import VideoThumb from '@/public/images/hero-image-01.jpg';
import ModalVideo from '@/components/modal-video';

export default function HeroHome() {
  return (
    <section>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Hero content */}
        <div className='py-12 md:py-20'>
          {/* Section header */}
          <div className='pb-12 text-center md:pb-20'>
            <h1
              className='animate-gradient bg-gradient-to-r from-gray-300 via-indigo-400 to-gray-100 bg-[length:200%_auto] bg-clip-text pb-5 font-mono text-4xl font-semibold text-transparent md:text-5xl'
              data-aos='fade-up'
            >
              For Job Sekeers And Companies
            </h1>
            <div className='mx-auto max-w-3xl'>
              <p
                className='mb-8 text-xl text-indigo-300/65'
                data-aos='fade-up'
                data-aos-delay={200}
              >
                Our Website is made and designed to help you and help the
                companies to find the best candidate be professional, be smart.
              </p>
              <div className='mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center'>
                <div data-aos='fade-up' data-aos-delay={400}>
                  <a
                    className='btn group mb-4 inline-flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-gradient-to-t from-indigo-600 to-indigo-500 font-sans text-sm font-semibold text-white shadow-inner transition-all hover:bg-gradient-to-b sm:mb-0 sm:w-auto'
                    href='#0'
                  >
                    <span className='relative inline-flex items-center'>
                      Start Matching
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
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt='Modal video thumbnail'
            video='videos//video.mp4'
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}