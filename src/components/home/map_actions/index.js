import styles from "@/components/home/map_actions/map.module.css";
import Map from "@/components/ui/map";

import Image from "next/image";

export default function MapContainer() {
    return (
        <div className={styles.parent_container}>
            <div className={styles.inner_container}>
                <div className={styles.actions_container}>
                    <a className={styles.margin_bottom} href="/how-to-help">
                        <Image src="/btn-volunteer.svg" height={100} width={100} alt="volunteer image link" />
                    </a>
                    <a className={styles.margin_bottom} href="/how-to-help">
                        <Image src="/btn-donate.svg" height={100} width={100} alt="donation image link" />
                    </a>
                    <a href="/contact-us">
                        <Image src="/btn-contact.svg" height={100} width={100} alt="contact image link" />
                    </a>
                </div>
                <Map />
            </div>
        </div>
    );
}
