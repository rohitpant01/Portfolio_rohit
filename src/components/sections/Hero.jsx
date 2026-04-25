import { portfolioData } from '../../data/portfolioData';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center pt-10 px-6 relative overflow-hidden bg-bg-base">
      <div className="absolute -right-10 top-10 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,#D4EFE9_0%,transparent_70%)] -z-10 opacity-60"></div>
      <div className="absolute -left-10 bottom-10 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,#FDE8D4_0%,transparent_70%)] -z-10 opacity-60"></div>
      
      <div className="max-w-4xl w-full">
        <FadeIn delay={100}>
          <div className="flex items-center gap-3 text-xs font-medium tracking-[0.15em] uppercase text-primary mb-6">
            <span className="w-8 h-[1.5px] bg-primary"></span>
            {portfolioData.hero.eyebrow}
          </div>
        </FadeIn>
        
        <FadeIn delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display leading-[1.08] tracking-[-0.03em] text-text-primary mb-8">
            {portfolioData.hero.headlinePart1} <br />
            <em className="text-primary italic">{portfolioData.hero.headlineEm}</em>{portfolioData.hero.headlinePart2}
          </h1>
        </FadeIn>
        
        <FadeIn delay={300}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white shadow-lg flex-shrink-0">
              <img 
                src="/my_image.png" 
                alt="Rohit Pant" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl font-light leading-[1.8]">
              {portfolioData.hero.description}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="flex flex-wrap items-center gap-4">
            <Button to="/projects" primary className="rounded-full !px-8 !py-3 tracking-wide">See what I've built</Button>
            <Button to="/about" className="rounded-full !px-8 !py-3 bg-white border border-border-light hover:border-primary hover:text-primary tracking-wide transition-all shadow-sm">Read my story</Button>
          </div>
        </FadeIn>

        <FadeIn delay={500}>
          <div className="flex flex-wrap gap-8 md:gap-12 mt-12 md:mt-16 pt-8 border-t border-border-light">
            {portfolioData.hero.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-display text-3xl md:text-4xl font-semibold text-text-primary mb-1">{stat.num}</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-text-muted font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}