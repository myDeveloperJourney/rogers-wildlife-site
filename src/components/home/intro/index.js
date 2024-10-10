import styles from "@/components/home/intro/Intro.module.css";

export default function Intro() {
    return (
        <div className={styles.parent_container}>
            <div className={styles.inner_container}>
                <p>
                    <span className={styles.container_title}><strong>Rogers Wildlife Rehabilitation Center</strong></span> is a 501c3 nonprofit wildlife rescue
                    organization in the Dallas/Fort-Worth metroplex specializing in the rescue and rehabilitation of
                    injured, sick and orphaned Federally Protected migratory species. Our goal is to restore the health and independence of
                    these precious creatures so that they may be released back into their natural habitat. Rogers
                    Wildlife serves as a sanctuary for the remaining birds, as they are deemed non-releasable due to the
                    extent of their injuries.
                    <br />
                    <br />
                    Over the last 25 years, RWRC has provided medical treatment and care for more than 120,000 birds. 
                    The majority of birds that we receive come to us with life-threatening injuries as a result 
                    of animal attacks, nest displacement (orphaned), automobile strikes, natural/man-made disasters, or
                    abuse. RWRC is entirely dependent on dedicated volunteers and private donations, as it does not
                    receive any federal, state, or local government funding for its rehabilitation and conservation
                    efforts.
                </p>
            </div>
        </div>
    );
}
