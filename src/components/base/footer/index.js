import styles from "@/components/base/footer/Footer.module.css";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
    const linkObjs = [
        { name: "Home", path: "/" },
        { name: "Our Story", path: "/" },
        { name: "In the News", path: "/" },
        { name: "Found a Bird?", path: "/" },
        { name: "How to Help", path: "/" },
        { name: "Photot Gallery", path: "/" },
        { name: "Educational Birds", path: "/" },
        { name: "Contact Us", path: "/" },
    ];

    const links = linkObjs.map((obj) => {
        return (
            <Link key={obj.name} href={obj.path}>
                {obj.name}
            </Link>
        );
    });

    return (
        <div className={styles.parent_container}>
            <div className={styles.socials_container}>
                <a>
                    <Image src="/tiktok.svg" height={100} width={100} alt="social media image" />
                </a>
                <a>
                    <Image src="/tiktok.svg" height={100} width={100} alt="social media image" />
                </a>
                <a>
                    <Image src="/tiktok.svg" height={100} width={100} alt="social media image" />
                </a>
            </div>
            <footer className={styles.footer}>
                <div>{links}</div>
                <div>
                    <p>Rogers Wildlife Rehabilitation Center - 1430 E Cleveland Rd, Hutchins, TX 75141</p>
                </div>
                <div>
                    <p>
                        Phone:972-225-4000 <a href="rogerswildlife@yahoo.com">rogerswildlife@yahoo.com</a>
                    </p>
                </div>
                <div>
                    <p>Copyright 2016 Rogers WIldlife Rehabilitation Center. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
