import styles from "@/components/base/navbar_drawer/Drawer.module.css";
import Link from "next/link";

const navitemStyles = {
    height: "6rem",
    fontSize: "8vmin",
    textTransform: "uppercase",
    padding: "1.5rem",
    fontWeight: "bold",
    letterSpacing: "0.5rem",
    textDecoration: "none",
    transition: "color 0.80s linear",
    color: "var(--background)",
    cursor: "pointer",
    fontFamily: "var(--font-sans)",
};

const links = [
    {
        slug: "/",
        text: "Home",
    },
];

export default function NavDrawer({ isNavOpen, setNavOpen }) {
    return (
        <div className={isNavOpen ? styles.modal_parent : styles.modal_closed}>
            <div className={isNavOpen ? styles.div_parent : styles.modal_closed}>
                {links.map((link, idx) => (
                    <Link key={idx} onClick={() => setNavOpen(!isNavOpen)} style={navitemStyles} href={link.slug}>
                        {link.text}
                    </Link>
                ))}
            </div>
        </div>
    );
}
