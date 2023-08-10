import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';

const NavBar = () => {

    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <nav className='nav__bar'>
            <Link href='/'>
                <div className="nav__bar__logo">
                    <Image src="/logo.png" alt="logo" width={128} height={77} />
                    Slinky GHE Design & Analytics
                </div>
            </Link>
            <ul>
                <li>
                    <Link
                        href="/about"
                        className={currentRoute === '/about' ? 'active' : ''}
                    > About us </Link>
                </li>
                <li>
                    <Link
                        href="/contact"
                        className={currentRoute === '/contact' ? 'active' : ''}
                    > Contact us </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;