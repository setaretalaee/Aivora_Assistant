import "../css/style.css";
import { loadComponent } from "./components.js";
import "../../components/navbar/navbar.js";


async function init() {


    document.querySelector("#app").innerHTML = `


        <div id="navbar"></div>


        <main>

            <div id="hero"></div>

            <div id="ai-demo-video"></div>

            <div id="ai-demo-showcase"></div>

            <div id="faq"></div>

            <div id="cta"></div>

            <div id="trusted"></div>

            <div id="features"></div>

            <div id="statistics"></div>

            <div id="solutions"></div>

            <div id="blog"></div>

            <div id="contact"></div>

            <div id="plan-cards"></div>

            
            
        </main>



        <div id="footer"></div>


    `;




    // Navbar

    await loadComponent(
        "#navbar",
        "/src/components/navbar/navbar.html"
    );

    
    await loadComponent(
        "#ai-demo-video",
        "/src/sections/ai-demo-video/ai-demo-video.html"
    );

    // Navbar Button

    await loadComponent(
        "#navbar-button",
        "/src/components/button/button.html"
    );

    // Hero Section

    await loadComponent(
        "#hero",
        "/src/sections/hero/hero.html"
    );



    // Trusted Companies Section

    await loadComponent(
        "#trusted",
        "/src/sections/trusted/trusted.html"
    );



    // Features Section

    await loadComponent(
        "#features",
        "/src/sections/features/features.html"
    );



    // AI Demo Showcase Section

    await loadComponent(
        "#ai-demo-showcase",
        "/src/sections/ai-demo-showcase/ai-demo-showcase.html"
    );


    await loadComponent(
        "#solutions",
        "/src/sections/solutions/solutions.html"
    );


    await loadComponent(
        "#blog",
        "/src/sections/blog/blog.html"
    );

    
    await loadComponent(
        "#contact",
        "/src/sections/contact/contact.html"
    );

    
    await loadComponent(
        "#faq",
        "/src/sections/faq/faq.html"
    );

    await loadComponent(
        "#plan-cards",
        "/src/sections/plan-cards/plan-cards.html"
    );

    await loadComponent(
        "#footer",
        "/src/sections/footer/footer.html"
    );
    
    await loadComponent(
        "#cta",
        "/src/sections/cta/cta.html"
    );

    
    await loadComponent(
        "#statistics",
        "/src/sections/statistics/statistics.html"
    );
}



init();