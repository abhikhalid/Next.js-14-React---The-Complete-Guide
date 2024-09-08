// 'use client'

import Link from "next/link";
import logoImg from '@/assets/logo.png';
import classes from '@/components/main-header/main-header.module.css';
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "./nav-link";
// import { usePathname } from "next/navigation";

export default function MainHeader() {
    // const path = usePathname();

    return(
    <>
    <MainHeaderBackground />
            
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <Image src={logoImg} alt="A plate with food on it" priority />
            NextLevel Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                            {/* <Link href="/meals" className={path.startsWith('/meals') ? classes.active : undefined}>Browse Meals</Link> */}

                            <NavLink href="/meals" >Browse Meals</NavLink>
                </li>
                <li>
                            {/* <Link href="/community" className={path ==='/community' ? classes.active : undefined}>Foodies Community</Link> */}
                            <NavLink href="/community">
                                Foodies Community
                            </NavLink>
                </li>
            </ul>
        </nav>

        </header>
        </>
    )
}