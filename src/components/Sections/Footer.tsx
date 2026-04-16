

const Footer = () => {
    return (
        <footer className="pt-24 pb-10 px-8 border-t bg-[#111111] border-white/5 ">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div>
                    <h2 className="text-7xl font-black mb-8">JEEDA</h2>
                    <p className="text-white/50 max-w-xs">
                        Crafting digital experiences that blend high-fashion aesthetics with technical precision.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-24">
                    <div className="flex flex-col gap-4">
                        <span className="text-xs uppercase tracking-widest text-white/30 font-bold">(Social)</span>
                        <a href="mailto:jeedaalsamman@gmail.com" className="hover:text-white/70 transition-colors font-bold">jeedaalsamman@gmail.com</a>
                        <a href="https://www.instagram.com/jeeda_samman?igsh=Z3V6cHkwMHJsZGlk&utm_source=qr" className="hover:text-white/70 transition-colors font-bold">Instagram</a>
                        <a href="https://www.behance.net/jeedadesigns?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleARK9x9leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaeO7Toqx-nc4MYXwGgXjBDVkXwlwTkz_7V-TmYjQA7gdt1vsGLMCKQn6NrSVg_aem_cPrNCa0KgoVSXOeSssVk6Q" className="hover:text-white/70 transition-colors font-bold">Behance</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-xs uppercase tracking-widest text-white/30 font-bold">(navigation)</span>
                        <a href="/" className="hover:text-white/70 transition-colors font-bold">Home</a>
                        <a href="#project" className="hover:text-white/70 transition-colors font-bold">Project</a>
                        <a href="#contact" className="hover:text-white/70 transition-colors font-bold">Contact Me</a>
                    </div>
                </div>
            </div>
            <div className="mt-24 pt-8 border-t border-white/5 flex justify-between text-xs text-white/20 uppercase tracking-widest">
                <span>© 2026 Jeeda Portfolio</span>
                <span>Graphic Design </span>
            </div>
        </footer>
    )
}

export default Footer