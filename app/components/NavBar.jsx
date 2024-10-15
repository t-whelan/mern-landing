import React from 'react';
import Link from 'next/link';
import './Navbar.css';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <Image src="/velisa.jpg" alt="Velisa Africa" className="logo" width={50} height={50} />
            </Link>
            <h1 className='text-4xl font-mono'>Velisa Africa</h1>
            <ul>
                <li className='font-sans'><Link href="/">Home</Link></li>
                <li className='font-sans'><Link href="#about">About</Link></li>
                <li className='font-sans'><Link href="/#faq">FAQ</Link></li> {/* Changed 'to' to 'href' */}
                <li className='font-sans'><Link href="#contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
