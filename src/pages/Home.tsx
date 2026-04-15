import Hero from "../components/Hero"
import InfiniteTicker from "../components/InfiniteTicker"
import Pricing from "../components/Pricing"
import Process from "../components/Process"
import Projects from "../components/Projects"
import Services from "../components/Services"
import StaggeredMenu from "../components/StaggeredMenu";



const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
    { label: 'Services', ariaLabel: 'View our services', link: '#services' },
    { label: 'Process', ariaLabel: 'Our process', link: '#process' },
    { label: 'Pricing', ariaLabel: 'Our pricing', link: '#pricing' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
];


const Home = () => {
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
            <Pricing />
        </>
    )
}

export default Home