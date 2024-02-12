import styles from "@/components/ui/burger_button/Burger.module.css";

export default function Burger({ isNavOpen, setNavOpen }) {
    const handleClick = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <nav className={isNavOpen ? styles.mobile_nav : null}>
            <button
                className={isNavOpen ? styles.clickedButton : styles.button}
                id={styles.mobile_button}
                onClick={handleClick}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
}
