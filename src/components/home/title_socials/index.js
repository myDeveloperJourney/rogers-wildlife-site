import styles from "@/components/home/title_socials/Title.module.css";

import Image from "next/image";

export default function Title() {
    return (
        <div className={styles.parent_container}>
            <div className={styles.inner_container}>
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
                <div className={styles.title_container}>
                    <h2>
                        Welcome to Rogers Wildlife <br /> Rehabilitation Center
                    </h2>
                </div>
            </div>
        </div>
    );
}
