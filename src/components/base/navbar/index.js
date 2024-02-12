import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import Burger from "../../ui/burger_button";
import NavDrawer from "../navbar_drawer";
import styles from "./Navbar.module.css";

function NavLink({ linkText, path, isScrollLink }) {
    const router = useRouter();

    const isActive = (pathname) => (router ? router.pathname === pathname : false);

    const linkStyles = {
        borderBottom: isActive(path) ? "2px solid #fff" : "none",
        cursor: "pointer",
    };

    const handleNavigation = (e, destination) => {
        e.preventDefault();

        if (router.pathname === "/" && destination.startsWith("#")) {
            history.pushState(null, null, destination);

            const id = destination.substring(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            router.push("/").then(() => {
                window.location.hash = destination;
            });
        }
    };

    return isScrollLink ? (
        <li style={linkStyles} onClick={(e) => handleNavigation(e, path)}>
            {linkText}
        </li>
    ) : (
        <li style={linkStyles}>
            <Link href={path}>{linkText}</Link>
        </li>
    );
}

export default function Navbar({ isMobileScreen, setNavOpen, isNavOpen }) {
    return (
        <>
            <nav className={styles.navbar}>
                {isMobileScreen ? (
                    <>
                        <Burger isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
                    </>
                ) : (
                    <>
                        <ul>
                            <NavLink linkText="About Us" path="/about" isScrollLink={false} />
                            <NavLink linkText="Fence Types" path="/fence-types" isScrollLink={false} />
                        </ul>
                        <Link href="/">
                            <Image
                                src="/images/logo.svg"
                                alt="logo"
                                width={isMobileScreen ? 90 : 150}
                                height={isMobileScreen ? 90 : 150}
                                priority={true}
                            />
                        </Link>
                        <ul>
                            <NavLink linkText="Contact" path="#contact" isScrollLink={true} />
                            <NavLink linkText="Services" path="#services" isScrollLink={true} />
                        </ul>
                    </>
                )}
                <NavDrawer isMobileScreen={isMobileScreen} setNavOpen={setNavOpen} isNavOpen={isNavOpen} />
            </nav>
        </>
    );
}
