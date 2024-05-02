import styles from "@/components/home/map_actions/map.module.css";
import Map from "@/components/ui/map";

import Image from "next/image";
import Link from "next/link";

export default function MapContainer() {
    return (
        <div className={styles.parent_container}>
            <div className={styles.inner_container}>
                <div className={styles.actions_container}>
                    <Link className={styles.margin_bottom} href="/how-to-help">
                        <Image src="/volunteerVector.svg" height={100} width={100} alt="volunteer image link" />
                    </Link>
                    <Link className={styles.margin_bottom} href="/how-to-help">
                        <Image src="/donateVector.svg" height={100} width={100} alt="donation image link" />
                    </Link>
                    <Link href="/contact-us">
                        <Image src="/contactVector.svg" height={100} width={100} alt="contact image link" />
                    </Link>
                </div>
                <Map />
            </div>
        </div>
    );
}
