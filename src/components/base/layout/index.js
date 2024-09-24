import { useState } from "react";
import Footer from "../footer";
import Navbar from "../navbar";

export default function Layout({ children }) {
    const [isNavOpen, setNavOpen] = useState(false);

    return (
        <div className="layout">
            <Navbar isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
            {children}
            <Footer />
        </div>
    );
}
