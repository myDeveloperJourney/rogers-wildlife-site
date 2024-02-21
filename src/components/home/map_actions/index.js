import styles from "@/components/home/map_actions/map.module.css";
import Map from "@/components/ui/map";

import Image from "next/image";

export default function MapContainer() {
    return (
        <div className={styles.parent_container}>
            <div className={styles.actions_container}>
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
            <Map />
        </div>
    );
}
