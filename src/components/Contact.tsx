import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Send, User, MessageSquare } from "lucide-react";
import { useGSAP } from "@gsap/react";
import TextInput from "./TextInput";
import TextArea from "./TextArea";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-header > *", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".contact-header",
                    start: "top 85%",
                },
            });

            gsap.from(".contact-content > *", {
                opacity: 0,
                y: 40,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".contact-content",
                    start: "top 80%",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleSend = (platform: "whatsapp" | "telegram") => {
        if (!name || !message) return;

        const fullMessage = `Hello, my name is ${name}. ${message}`;
        const encodedMessage = encodeURIComponent(fullMessage);

        if (platform === "whatsapp") {
            window.open(`https://wa.me/+963952463721?text=${encodedMessage}`, "_blank");
        } else {
            window.open(`https://t.me/jeeda_alsamman?text=${encodedMessage}`, "_blank");
        }
    };

    const isFormValid = name.trim() !== "" && message.trim() !== "";

    return (
        <section ref={sectionRef} id="contact" className="py-32 px-6 md:px-10 bg-[#000000] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="contact-header mb-20 text-center">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter italic">
                        Contact Me
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Tell me about your project. Fill out the form below and choose your preferred platform to send the message.
                    </p>
                </div>

                <div className="contact-content max-w-3xl mx-auto relative">
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#a51223]/10 blur-[120px] rounded-full"></div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/5 blur-[120px] rounded-full"></div>

                    <div className="relative p-8 md:p-12 bg-zinc-900/50 border border-white/10 rounded-[40px] backdrop-blur-xl space-y-10">
                        <div className="space-y-6">
                            <TextInput
                                id="contact-name"
                                label="Your Name"
                                required
                                icon={User}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="John Doe"
                            />

                            <TextArea
                                id="contact-message"
                                label="Your Message"
                                required
                                icon={MessageSquare}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Tell me about your project..."
                                rows={5}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* WhatsApp Button */}
                            <button
                                onClick={() => handleSend("whatsapp")}
                                disabled={!isFormValid}
                                className="group relative flex items-center justify-center gap-3 p-5 bg-emerald-500 text-white rounded-2xl font-black text-lg transition-all active:scale-95 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed overflow-hidden"
                            >
                                <div className="relative z-10 flex items-center gap-2">
                                    <MessageCircle className="w-6 h-6" />
                                    Send via WhatsApp
                                </div>
                                <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>

                            {/* Telegram Button */}
                            <button
                                onClick={() => handleSend("telegram")}
                                disabled={!isFormValid}
                                className="group relative flex items-center justify-center gap-3 p-5 bg-blue-500 text-white rounded-2xl font-black text-lg transition-all active:scale-95 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed overflow-hidden"
                            >
                                <div className="relative z-10 flex items-center gap-2">
                                    <Send className="w-6 h-6" />
                                    Send via Telegram
                                </div>
                                <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>
                        </div>

                        <p className="text-center text-zinc-500 text-sm font-medium flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                            Usually replies within a few hours
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
