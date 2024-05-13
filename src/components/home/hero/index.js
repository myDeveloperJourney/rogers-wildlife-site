import styles from "@/components/home/hero/Hero.module.css";

export default function Hero() {
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
                    <p>Found an orphaned or injured bird?</p>
                    <p>Please contact us at</p>
                    <a href="tel:1-682-260-9080">(972) 225-4000</a>
                </div>
            </div>
        </div>
    );
}
