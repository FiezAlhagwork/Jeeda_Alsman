import { useEffect } from "react";
import Contact from "../components/Sections/Contact";
import Hero from "../components/Sections/Hero";
import InfiniteTicker from "../components/Sections/InfiniteTicker";
import Process from "../components/Sections/Process";
import Projects from "../components/Sections/Projects";
import Services from "../components/Sections/Services";
import StaggeredMenu from "../components/ui/StaggeredMenu";

// #region agent log
const debugLog = (location: string, message: string, data: Record<string, unknown> = {}, hypothesisId = "H4", runId = "baseline") =>
  fetch('http://127.0.0.1:7581/ingest/8463f0b1-f683-491b-8f2f-0d087b1379d5',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'58f0d5'},body:JSON.stringify({sessionId:'58f0d5',runId,hypothesisId,location,message,data,timestamp:Date.now()})}).catch(()=>{});
// #endregion




const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Services', ariaLabel: 'View our services', link: '#services' },
    { label: 'projects', ariaLabel: 'View our services', link: '#project' },
    { label: 'Process', ariaLabel: 'Our process', link: '#process' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
    { label: 'instagram', link: 'https://www.instagram.com/jeeda_samman?igsh=Z3V6cHkwMHJsZGlk&utm_source=qr' },
    { label: 'Behance', link: 'https://www.behance.net/jeedadesigns?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleARK9x9leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaeO7Toqx-nc4MYXwGgXjBDVkXwlwTkz_7V-TmYjQA7gdt1vsGLMCKQn6NrSVg_aem_cPrNCa0KgoVSXOeSssVk6Q' },
    // { label: 'LinkedIn', link: 'https://linkedin.com' }
];


const Home = () => {
    useEffect(() => {
        // #region agent log
        debugLog("src/pages/Home.tsx:31", "home-mounted", {
            sectionCount: 6,
            timeSinceNavigationStart: Math.round(performance.now()),
        }, "H4");
        // #endregion
    }, []);

    return (
        <>
            <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials
                displayItemNumbering={true}
                menuButtonColor="#ffffff"
                openMenuButtonColor="#ffffff"
                changeMenuColorOnOpen={true}
                colors={['#000000', '#a51223']}
                logoText="JEDDA"
                accentColor="#a51223"
                isFixed={true}
            />

            <Hero />
            <Services />
            <InfiniteTicker />
            <Projects />
            <Process />
            <Contact />
        </>
    )
}

export default Home