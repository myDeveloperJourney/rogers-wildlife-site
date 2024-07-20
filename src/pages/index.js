import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/base/layout";
import Hero from "@/components/home/hero";
import Title from "@/components/home/title_socials";
import Intro from "@/components/home/intro";
import Map from "@/components/home/map_actions";

<button type="button" zeffy-form-link="https://www.zeffy.com/embed/donation-form/949079ad-523d-417a-a441-e947ee0271f9?modal=true">Donate</button>

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
    return (
        <>
            <Head>
                <title>Home | Rogers Wildlife Rehabilitation Center</title>
                <meta name="description" content="Rogers Wildlife Rehabilitation Center is a 501c3 nonprofit wildlife rescue organization in the Dallas/Fort-Worth metroplex specializing in the rescue and rehabilitation of injured, sick and orphaned birds of all types. Our goal is to restore the health and independence of these precious creatures so that they may be released back into their natural habitat. Rogers Wildlife serves as a sanctuary for the remaining birds, as they are deemed non-releasable due to the extent of their injuries." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="favicon.ico" />
            </Head>
            <main className={`${inter.className}`}>
                <Hero />
                <Layout>
                    <Title />
                    <Intro />
                    <Map />
                </Layout>
            </main>
        </>
    );
}
