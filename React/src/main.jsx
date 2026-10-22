import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Keep the existing section design styles together in one entry point.
import './sections/hero/hero.css';
import './sections/stats-bento/stats-bento.css';
import './sections/statistics/statistics.css';
import './sections/footer/footer.css';
import './sections/ai-demo-showcase/ai-demo-showcase.css';
import './sections/plan-cards/plan-cards.css';
import './sections/faq/faq.css';
import './sections/contact/contact.css';
import './sections/blog/blog.css';
import './sections/solutions/solutions.css';
import './sections/ai-demo-video/ai-demo-video.css';
import './sections/features/features.css';
import './sections/trusted/trusted.css';
import './components/navbar/navbar.css';
import './components/button/button.css';
import './assets/css/style.css';

createRoot(document.getElementById('root')).render(<App />);
