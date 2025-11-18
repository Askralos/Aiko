"use client";

import "./Nav.css";
import Link from "next/link";

const Nav = ({ navRef }) => {
    return (
        <nav ref={navRef}>
            <div className="logo">Aiko</div>
            <div className="nav-links">
                <Link href="/">Accueil, </Link>
                <Link href="/collections">Collections, </Link>
                <Link href="/a-propos">A propos, </Link>
                <Link href="/contact">Contact</Link>
            </div>
            <div className="nav-button">
                <Link href="/">Let&apos;s Go</Link>
            </div>
        </nav>
    );
};

export default Nav;
