import Container from "@/components/Container";
import TitleHero from "@/components/TitleHero";
import SocialLinks from "@/components/SocialLinks";
import Skills from "@/components/Skills";
// import Photo from "@/components/Photo";
// import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <div className="bg-bodyColor max-h-screen text-white/80">
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-y-4 lg:gap-y-0">
      <TitleHero />
      <div className="flex flex-col gap-5 md:gap-8 md:mt-16">
        {/* <div className="flex flex-row items-center justify-center mt-20">
          <Statistics />
        </div> */}
        <div className="flex flex-col items-center gap-5 md:gap-8 text-center order-3 md:order-none">
          <p className="w-auto md:max-w-[800px] text-white/50 text-[18px] leading-6">
            I am a dedicated software developer with expertise in object-oriented programming, web development, and database design. 
          </p>
          <p className="w-auto md:max-w-[800px] text-white/50 text-[18px] leading-6">
            As a graduate of Niagara College&apos;s Computer Programming and Analysis program, I have acquired hands-on experience in collaborative development, crafting functional software, and designing efficient web applications and databases.
          </p>
          <p className="w-auto md:max-w-[800px] text-white/50 text-[18px] leading-6">
            Outside of work, I actively expand my technical knowledge through personal coding projects and stay current with industry advancements by engaging with professional literature and resources.
          </p>
        </div>
        <div className="pb-8 order-2 md:order-none">
          <Skills />
        </div>
      </div>
      <div className="sticky bottom-8 hidden md:block left-full">
        <SocialLinks/>
      </div>
    </Container>
  </div>
    // <div className="bg-bodyColor text-white/80">
    //   <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
    //     <Photo />
    //     <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start md:mt-20">
    //       <div> 
    //         <h1 className="text-lightSky text-5xl md:text-7xl tracking-normal">Ben Allen</h1>
    //         <h2 className="text-3xl mb-2 text-white">Software Developer</h2>
    //       </div>
    //       <p className="w-auto md:max-w-[500px] text-white/50 font-thin leading-6">
    //         I am a software developer with experience in a variety of programming languages and technologies, including object-oriented programming, web development, and database design.
    //       </p>
    //       <p className="w-auto md:max-w-[500px] text-white/50 font-thin leading-6">
    //         As a recent graduate of the Computer Programming and Analysis program at Niagara College. During my time in the program, I have gained hands-on experience in team-based development, object-oriented programming, and building functional programs, web pages and databases.
    //       </p>
    //       <p className="w-auto md:max-w-[500px] text-white/50 font-thin leading-6">
    //       In my free time, I enjoy exploring new technologies through personal coding projects, deepening my understanding of software development principles, and staying informed by reading industry-related articles and books.
    //       </p>
    //       <SocialLinks/>
    //       <Statistics />
    //     </div>
    //   </Container>
    // </div>
    
  );
}
