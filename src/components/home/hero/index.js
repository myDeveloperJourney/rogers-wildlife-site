import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/components/home/hero/Hero.module.css";

export default function Hero() {
    const router = useRouter();
    const excludedPaths = ["/how-to-help"];
    const [isOnHelpPage, setIsOnHelpPage] = useState(false);

    useEffect(() => {
        if (excludedPaths.includes(router.pathname)) {
            setIsOnHelpPage(true);
        }
    }   , [router.pathname]);

    return (
        <div className={styles.container_parent}>
            <div className={styles.container_inner_parent}>
                <div className={styles.text_container}>
                    <div className={styles.text_inner_container}>
                        <p className={`${styles.text_header} ${styles.text_head_left}`}>Rogers</p>
                        <p className={`${styles.text_header} ${styles.text_head_right}`}>Wildlife</p>
                        <p className={styles.text_inc}>Rehabilitation Center</p>
                    </div>
                </div>
                <div className={styles.sub_header_container}>
                    {!isOnHelpPage && (
                        <button className={styles.button} type="button" zeffy-form-link="https://www.zeffy.com/embed/donation-form/949079ad-523d-417a-a441-e947ee0271f9?modal=true">
                            Make A Donation
                        </button>
                    )}
                    <p>Found an orphaned or injured bird?</p>
                    <p>Please contact us at</p>
                    <a href="tel:1-972-225-4000">(972) 225-4000</a>
                </div>
            </div>
        </div>
    );
}
