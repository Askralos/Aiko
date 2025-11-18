"use client";

import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Loader from "./components/Loader/Loader";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(CustomEase);
const ease = CustomEase.create("custom", "M0,0 C0.25,0 0.75,1 1,1");

export default function Home() {
    const container = useRef(null);
    const navRef = useRef(null);
    const loaderRef = useRef(null);
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.to(
                ".title",
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    stagger: 0.4,
                    ease: ease,
                },
                0.5
            );

            tl.to(".title", {
                delay: 0.5,
                stagger: 0.3,
                y: "100%",
                opacity: 0,
                ease: ease,
                onComplete: () => {
                    document.querySelector(".title-container-wrapper").remove();
                },
            });

            tl.to(
                loaderRef.current,
                {
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.inOut",
                },
                ">"
            );

            tl.set(loaderRef.current, {
                display: "none",
            });

            tl.from(
                navRef.current,
                {
                    y: -40,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.out",
                },
                ">"
            );

            tl.from(
                heroRef.current,
                {
                    opacity: 0,
                    scale: 1.05,
                    duration: 1,
                    ease: "power3.out",
                },
                "-=0.3"
            );
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={container}>
            <Loader loaderRef={loaderRef} />
            <Nav navRef={navRef} />
            <Hero heroRef={heroRef} />
        </div>
    );
}
