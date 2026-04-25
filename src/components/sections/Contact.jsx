import { portfolioData } from '../../data/portfolioData';
import FadeIn from '../ui/FadeIn';
import Button from '../ui/Button';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 px-6 bg-cream min-h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-3 text-xs font-medium tracking-[0.15em] uppercase text-primary mb-8">
            <span className="w-6 h-[1.5px] bg-primary"></span>
            Connect
            <span className="w-6 h-[1.5px] bg-primary"></span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-8 leading-[1.1] text-text-primary">
            {portfolioData.contact.title}
          </h2>
          
          <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl mx-auto leading-[1.8] mb-12">
            {portfolioData.contact.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
            <Button to="/projects" primary className="rounded-full !px-10 !py-4 tracking-wide shadow-sm">
              View My Work
            </Button>
            <a 
              href={`mailto:${portfolioData.contact.email}`} 
              className="px-10 py-4 rounded-full border border-border-light text-text-primary hover:border-primary hover:text-primary transition-all font-medium tracking-wide bg-white shadow-sm"
            >
              Contact Me
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm font-medium">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm font-medium">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              GitHub
            </a>
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.contact.email}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm font-medium"
            >
              <span className="text-xl leading-none">@</span>
              Gmail
            </a>
            <a href={`tel:${portfolioData.contact.phone}`} className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm font-medium">
              <Phone size={18} />
              {portfolioData.contact.phone}
            </a>
          </div>

          <div className="pt-8 border-t border-border-light">
            <p className="font-display italic text-lg text-primary">
              {portfolioData.contact.closingLine}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}