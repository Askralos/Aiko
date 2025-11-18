"use client";

import "./Hero.css";

const Hero = ({ heroRef }) => {
    return (
        <section ref={heroRef} className="hero-container">
            <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            >
                <source src="/videos/aiko_bg.mp4" type="video/mp4" />
            </video>
        </section>
    );
};

export default Hero;
