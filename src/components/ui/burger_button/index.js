import styles from "@/components/ui/burger_button/Burger.module.css";

export default function Burger({ isNavOpen, setNavOpen }) {
    const handleClick = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <nav className={styles.mobile_nav}>
            <button
                className={isNavOpen ? styles.clickedButton : styles.button}
                id={styles.mobile_button}
                onClick={handleClick}
            >
                {isNavOpen ? <p>Close</p> : <p>Menu</p>}
            </button>
        </nav>
    );
}
