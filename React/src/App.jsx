import { useEffect } from 'react';
import { gsap } from 'gsap';
import Navbar from './components/navbar/Navbar.jsx';
import HeroSection from './sections/hero/HeroSection.jsx';
import AiDemoVideoSection from './sections/ai-demo-video/AiDemoVideoSection.jsx';
import AiDemoShowcaseSection from './sections/ai-demo-showcase/AiDemoShowcaseSection.jsx';
import FaqSection from './sections/faq/FaqSection.jsx';
import StatsBentoSection from './sections/stats-bento/StatsBentoSection.jsx';
import CtaSection from './sections/cta/CtaSection.jsx';
import TrustedSection from './sections/trusted/TrustedSection.jsx';
import FeaturesSection from './sections/features/FeaturesSection.jsx';
import StatisticsSection from './sections/statistics/StatisticsSection.jsx';
import SolutionsSection from './sections/solutions/SolutionsSection.jsx';
import BlogSection from './sections/blog/BlogSection.jsx';
import ContactSection from './sections/contact/ContactSection.jsx';
import PlanCardsSection from './sections/plan-cards/PlanCardsSection.jsx';
import FooterSection from './sections/footer/FooterSection.jsx';
import aiVideoUrl from './assets/videos/AiVideo.mp4?url';

function usePageInteractions() {
  useEffect(() => {
    // The nav keeps its original radio-style UI, but now scrolls to React sections.
    const navInputs = [...document.querySelectorAll('#navbar .nav-links input[name="nav"]')];
    const navTargets = ['features', 'plan-cards', 'blog', 'contact'];
    const navHandlers = navInputs.map((input, index) => {
      const onChange = () => {
        document.getElementById(navTargets[index])?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      };
      input.addEventListener('change', onChange);
      return () => input.removeEventListener('change', onChange);
    });

    // Contact form feedback is local only; connect this form to an API to send messages.
    const contactForm = document.querySelector('#contact .ai-contact-right form');
    let contactResetTimer;
    const contactButton = contactForm?.querySelector('button');
    const originalContactButtonMarkup = contactButton?.innerHTML;
    const onContactSubmit = (event) => {
      event.preventDefault();
      if (!contactButton) return;
      contactButton.textContent = 'Sent ✓';
      contactButton.disabled = true;
      window.clearTimeout(contactResetTimer);
      contactResetTimer = window.setTimeout(() => {
        contactButton.innerHTML = originalContactButtonMarkup || 'Send Message';
        contactButton.disabled = false;
        contactForm.reset();
      }, 2500);
    };
    contactForm?.addEventListener('submit', onContactSubmit);

    // Footer subscription form also stays local until an email provider is connected.
    const newsletterForm = document.querySelector('#footer .footer-brand-field');
    const newsletterButton = newsletterForm?.querySelector('button');
    let newsletterResetTimer;
    const originalNewsletterButtonText = newsletterButton?.textContent;
    const onNewsletterSubmit = (event) => {
      event.preventDefault();
      if (!newsletterButton) return;
      newsletterButton.textContent = 'Subscribed ✓';
      newsletterButton.disabled = true;
      window.clearTimeout(newsletterResetTimer);
      newsletterResetTimer = window.setTimeout(() => {
        newsletterButton.textContent = originalNewsletterButtonText || 'Subscribe';
        newsletterButton.disabled = false;
        newsletterForm.reset();
      }, 2500);
    };
    newsletterForm?.addEventListener('submit', onNewsletterSubmit);

    // Reveal cards as they enter the viewport.
    let blogObserver;
    if ('IntersectionObserver' in window) {
      blogObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            blogObserver?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      document.querySelectorAll('#blog .blog-card').forEach((card) => blogObserver.observe(card));
    } else {
      document.querySelectorAll('#blog .blog-card').forEach((card) => card.classList.add('show'));
    }

    // Re-use the entrance motion with the hero now mounted as a React component.
    const heroTimeline = gsap.timeline({ defaults: { duration: 0.8, ease: 'power3.out' } });
    heroTimeline
      .from('.hero-typing-pill', { y: -24, opacity: 0 })
      .from('.hero-typing-title', { y: 42, opacity: 0 }, '-=0.5')
      .from('.hero-typing-sub', { y: 28, opacity: 0 }, '-=0.45')
      .from('.hero-typing-actions', { y: 20, opacity: 0, scale: 0.97 }, '-=0.35')
      .from('.hero-typing-meta', { y: 16, opacity: 0 }, '-=0.35');

    // Animated focus word in the solutions section.
    const focusElement = document.querySelector('#solutions #tf');
    let focusFrame = 0;
    let focusResizeHandler;
    if (focusElement) {
      const words = ['Open', 'slow', 'down', 'ship'];
      const spans = words.map((word, index) => {
        const span = document.createElement('span');
        span.textContent = word;
        if (index === 0) span.classList.add('focused');
        focusElement.appendChild(span);
        return span;
      });
      const focusBox = document.createElement('div');
      focusBox.className = 'tf-box';
      focusBox.innerHTML = '<i></i>';
      focusElement.appendChild(focusBox);

      let currentIndex = 0;
      let lastSwap = performance.now();
      const positionBox = () => {
        const currentWord = spans[currentIndex];
        if (!currentWord) return;
        const wordRect = currentWord.getBoundingClientRect();
        const parentRect = focusElement.getBoundingClientRect();
        focusBox.style.transform = `translate(${wordRect.left - parentRect.left - 8}px, ${wordRect.top - parentRect.top - 6}px)`;
        focusBox.style.width = `${wordRect.width + 16}px`;
        focusBox.style.height = `${wordRect.height + 12}px`;
      };
      const tick = (now) => {
        if (now - lastSwap > 1500) {
          spans[currentIndex].classList.remove('focused');
          currentIndex = (currentIndex + 1) % spans.length;
          spans[currentIndex].classList.add('focused');
          spans.forEach((span, index) => {
            span.style.filter = index === currentIndex ? 'blur(0px)' : 'blur(7px)';
          });
          positionBox();
          lastSwap = now;
        }
        focusFrame = window.requestAnimationFrame(tick);
      };
      focusFrame = window.requestAnimationFrame(tick);
      focusResizeHandler = positionBox;
      window.addEventListener('resize', focusResizeHandler);
      window.requestAnimationFrame(positionBox);
    }

    const solutionCards = [...document.querySelectorAll('#solutions .solution-card')];
    const cardMoveHandlers = solutionCards.map((card) => {
      const onMouseMove = (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        card.style.background = `radial-gradient(350px circle at ${x}px ${y}px, rgba(124,140,255,.25), rgba(255,255,255,.04))`;
      };
      card.addEventListener('mousemove', onMouseMove);
      return () => card.removeEventListener('mousemove', onMouseMove);
    });

    let solutionObserver;
    if ('IntersectionObserver' in window) {
      solutionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-visible');
            solutionObserver?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      solutionCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 150}ms`;
        solutionObserver.observe(card);
      });
    }

    return () => {
      navHandlers.forEach((cleanup) => cleanup());
      contactForm?.removeEventListener('submit', onContactSubmit);
      newsletterForm?.removeEventListener('submit', onNewsletterSubmit);
      window.clearTimeout(contactResetTimer);
      window.clearTimeout(newsletterResetTimer);
      blogObserver?.disconnect();
      solutionObserver?.disconnect();
      cardMoveHandlers.forEach((cleanup) => cleanup());
      window.cancelAnimationFrame(focusFrame);
      if (focusResizeHandler) window.removeEventListener('resize', focusResizeHandler);
      heroTimeline.kill();
    };
  }, []);
}

export default function App() {
  usePageInteractions();

  return (
    <>
      <div id="navbar"><Navbar /></div>
      <main>
        <div id="hero"><HeroSection /></div>
        <div id="ai-demo-video"><AiDemoVideoSection videoUrl={aiVideoUrl} /></div>
        <div id="ai-demo-showcase"><AiDemoShowcaseSection /></div>
        <div id="faq"><FaqSection /></div>
        <div id="stats-bento"><StatsBentoSection /></div>
        <div id="cta"><CtaSection /></div>
        <div id="trusted"><TrustedSection /></div>
        <div id="features"><FeaturesSection /></div>
        <div id="statistics"><StatisticsSection /></div>
        <div id="solutions"><SolutionsSection /></div>
        <div id="blog"><BlogSection /></div>
        <div id="contact"><ContactSection /></div>
        <div id="plan-cards"><PlanCardsSection /></div>
      </main>
      <div id="footer"><FooterSection /></div>
    </>
  );
}
