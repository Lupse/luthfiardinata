import FlowingMenu from '@/components/FlowingMenu';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';


export default function Home() {
    const portofolios = [
    { link: 'https://github.com/Lupse/monitoringweb', text: 'sidomuncul', image: '/project2.png' },
    { link: 'https://github.com/Lupse/overshare2', text: 'overshare', image: '/project3.png' },
    { link: 'https://github.com/Lupse/Gourmet-Haven', text: 'gourmet haven', image: '/project1.png' },
  ];

  return (
    <>
      {/* HERO */}
      <div id="home" className="w-full h-full px-[6vw] md:px-[10vw]">
        {/* Mobile hero - full screen */}
        <div className="md:hidden min-h-screen flex flex-col items-center justify-center text-center gap-6 px-4 relative">
          {/* Animated gradient orb background */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#D9A441]/10 rounded-full blur-3xl animate-pulse"></div>
          
          <img src="/luthfi.jpg" alt="Luthfi Ardinata" className="w-44 h-44 rounded-2xl object-cover border-2 border-[#D9A441]/40 shadow-lg shadow-[#D9A441]/20 relative z-10 transition-transform duration-300 hover:scale-105" />
          
          <div className="relative z-10 space-y-3">
            <h1 className="text-[#D9A441] font-extrabold text-[2.5rem] leading-tight animate-fade-in">
              Seamless Software<br/>Creator
            </h1>
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-[#D9A441] to-transparent mx-auto"></div>
          </div>
          
          <div className="relative z-10 space-y-2">
            <p className="text-base text-[#eee]">
              <strong className="text-[#D9A441] font-semibold">Luthfi Ardinata F</strong>
            </p>
            <p className="text-sm text-[#eee]/90">Fullstack Software Engineer</p>
            <p className="text-xs text-[#eee]/60 flex items-center justify-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-[#D9A441] rounded-full animate-pulse"></span>
              Based in Yogyakarta · Working Worldwide
            </p>
          </div>
          
          <p className="text-sm text-[#eee]/80 max-w-xs relative z-10 leading-relaxed">
            From concept to code — crafting seamless digital experiences.
          </p>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-[#D9A441]/60 uppercase tracking-wider">Scroll</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#D9A441]/60">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </div>
        
        {/* Desktop hero preserved */}
        <div className="hidden md:block">
          <p className="text-[#D9A441] font-extrabold text-[132px] absolute  top-[10vh]">Seamless</p>
          <p className="text-[#D9A441] font-extrabold text-[112px] absolute top-[28vh] ">Software</p>
          <p className="text-[#D9A441] font-extrabold text-[112px] absolute top-[21vh] left-[61vw]">Creator</p>
          <img src="/luthfi.jpg" alt="Luthfi Ardinata" className="w-[30%] absolute bottom-0 left-[36.5%] z-[-2]" />
          <p className="absolute bottom-[10vw]"> <strong>Luthfi Ardinata F</strong> <br /> Fullstack  Software Engineer </p>
          <p className="absolute bottom-[15vw] left-[75vw]"> <strong>Based in Yogyakarta</strong><br />Working Worldwide </p>
          <p className="absolute bottom-[5vw] left-[75vw]"> From concept to code <br />— crafting seamless digital experiences.</p>
          <div className="h-screen mb-[20vh]"></div>
        </div>
        
        {/* About */}
        <div id="about" className="mt-[8vh] md:mt-[15vh] mb-[10vh] md:mb-[15vh] flex flex-col md:flex-row">
          <h2 className="text-[#D9A441] text-xl md:text-[24px] w-full md:w-[32%] mb-4 md:mb-0 font-semibold uppercase tracking-wide">About Me</h2>
          <div className="w-full md:w-[68%]">
            <p className="text-[1.1rem] leading-[1.7] md:text-[46px] md:leading-[1.3] font-extrabold text-left md:text-justify">
              <span className="md:inline hidden">&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</span>Luthfi Ardinata is a committed <span className="text-[#D9A441]">software engineer</span> crafting seamless digital experiences. Skilled in both frontend and backend development, brings ideas to life with clean, purposeful code.
            </p>
            <p className="mt-6 md:mt-[15vh] text-sm md:text-base text-[#eee]/90">Where precise code meets impactful design <br />— creating software that users love and businesses trust.</p>
          </div>
        </div>
      </div>

      {/* EXPERIENCES */}
      <div id="experience" className='relative w-full pt-10 md:pt-20 pb-12 md:pb-20'>
        <p className='hidden md:inline-block text-[140px] font-bold relative left-0 bg-[#d9a441] text-[#141414] pl-[8vw] pr-[2vw] italic leading-none mb-16'>Experiences</p>
        <p className='md:hidden text-3xl font-bold bg-[#d9a441] text-[#141414] px-6 py-2 italic mb-6 inline-block'>Experiences</p>
        <div className='px-[6vw] md:px-[10vw]'>
          <ExperienceSection />
        </div>
      </div>

      {/* PROJECTS */}
      <div id="projects" className="mt-[10vh] md:mt-[20vh] w-full md:h-screen mb-[10vh] md:mb-[15vh] relative">
        <p className='hidden md:block text-[220px] font-bold absolute right-0'>PROJECTS</p>
        <p className='md:hidden text-3xl font-bold bg-[#d9a441] text-[#141414] px-6 py-2 italic mb-4 inline-block'>Projects</p>
        <div className='border-[#D9A441] border-t border-b bg-[#141414] w-full h-[260px] md:h-[400px] md:absolute md:mt-[26vh]'>
          <FlowingMenu items={portofolios} />
        </div>
      </div>

      {/* SKILLS */}
      <div id="skills" className='relative w-full md:h-screen h-auto flex flex-col justify-center overflow-hidden mb-[10vh] md:mb-[15vh]'>
        <p className='hidden md:block text-[120px] font-bold absolute left-0 top-8 bg-[#d9a441] text-[#141414] py-[1vh] pl-[8vw] pr-[2vw] italic leading-none'>SKILLS</p>
        <p className='md:hidden text-3xl font-bold bg-[#d9a441] text-[#141414] px-6 py-2 italic mb-4 inline-block w-fit'>Skills</p>
        <div className='relative z-10 md:pt-56 md:pb-8 px-[6vw] md:px-0'>
          <SkillsSection />
        </div>
      </div>

      {/* Contact moved into Footer */}

      <Footer />
    </>
  );
}
