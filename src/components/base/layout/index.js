import { useState, useEffect, useCallback } from "react";
import Footer from "../footer";
import Navbar from "../navbar";

export default function Layout({ children }) {
    const [isNavOpen, setNavOpen] = useState(false);
    const [isMobileScreen, setIsMobileScreen] = useState(false);

    // Debounced function to handle scroll and touchmove events
    const handleScroll = useCallback(() => {
        if (isNavOpen) {
            setNavOpen(false);
        }
    }, [isNavOpen]);

    useEffect(() => {
        // Function to handle media query change
        const mediaQueryChangeHandler = (e) => {
            setIsMobileScreen(e.matches);
        };

        // Initialize and set up media query listener
        const mediaQuery = window.matchMedia("(max-width: 1176px)");
        mediaQuery.addEventListener("change", mediaQueryChangeHandler);
        mediaQueryChangeHandler(mediaQuery); // Initialize state based on current screen size

        // Set up event listeners for scroll and touchmove events
        window.addEventListener("wheel", handleScroll, { passive: true });
        window.addEventListener("touchmove", handleScroll, { passive: true });

        // Cleanup event listeners
        return () => {
            mediaQuery.removeEventListener("change", mediaQueryChangeHandler);
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("touchmove", handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className="layout">
            <Navbar isNavOpen={isNavOpen} setNavOpen={setNavOpen} isMobileScreen={isMobileScreen} />
            {children}
            <Footer />
        </div>
    );
}
