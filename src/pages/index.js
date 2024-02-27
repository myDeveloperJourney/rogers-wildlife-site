import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/base/layout";
import Hero from "@/components/home/hero";
import Title from "@/components/home/title_socials";
import Intro from "@/components/home/intro";
import Map from "@/components/home/map_actions";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | Rogers Wildlife Rehabilitation Center</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
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
