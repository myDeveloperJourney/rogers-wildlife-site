import Head from "next/head";
import { useEffect } from "react";
import Layout from "@/components/base/layout";
import Hero from "@/components/home/hero";
import styles from "@/styles/pages/test-chatbot.module.css";

export default function TestChatBot() {
    useEffect(() => {
        // Dynamically inject the chatbot script
        const script = document.createElement("script");
        script.src = "https://beta.leadconnectorhq.com/loader.js";
        script.setAttribute("data-resources-url", "https://beta.leadconnectorhq.com/chat-widget/loader.js");
        script.setAttribute("data-widget-id", "68bf0925bb5dbfc4527a9a63");
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <Head>
                <title>AI Chat Bot Test Page</title>
                <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex, nocache" />
                <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex, nocache" />
                <meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex, nocache" />
            </Head>
            <Hero />
            <Layout>
                <main className={styles.testChatContainer}>
                    <h1 className={styles.testChatTitle}>AI Chat Bot Test Page</h1>
                    {/* The chatbot widget will be injected below by script */}
                </main>
            </Layout>
        </>
    );
}
