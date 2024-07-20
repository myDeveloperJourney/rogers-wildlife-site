import Head from "next/head";
import { useEffect } from "react";
import styles from "./donate-button.module.css";

export default function DonateButton(props) {
    useEffect(() => {
        const formLinkAttr = "zeffy-form-link";
        const iframeId = "zeffy-iframe";
        const hiddenStyle = `
            display: none;
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 10000;
            transition: opacity 0.25s ease-in-out;
            opacity: 0;
        `;

        function cacheBustUrl(url) {
            const parsedUrl = new URL(url);
            const searchParams = new URLSearchParams(parsedUrl.search);
            searchParams.append("cachebust", Date.now());
            parsedUrl.search = searchParams.toString();
            return parsedUrl.toString();
        }

        const iframes = document.querySelectorAll('iframe[src^="https://www.zeffy.com/"], iframe[src^="https://app.simplyk.io/"]');
        iframes.forEach(iframe => {
            iframe.src = cacheBustUrl(iframe.src);
        });

        const formLinks = document.querySelectorAll(`[${formLinkAttr}]`);
        if (formLinks.length > 0) {
            const formGroups = {};

            formLinks.forEach(link => {
                const formUrl = link.getAttribute(formLinkAttr);
                if (formUrl) {
                    if (!formGroups[formUrl]) {
                        formGroups[formUrl] = [];
                    }
                    formGroups[formUrl].push(link);
                }
            });

            const overlay = document.createElement("div");
            Object.assign(overlay, {
                style: `
                    display: none;
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 10000;
                    transition: opacity 0.25s ease-in-out;
                    opacity: 0;
                `,
                ariaHidden: "true"
            });
            document.body.append(overlay);

            Object.keys(formGroups).forEach(formUrl => {
                const iframeContainer = document.createElement("div");
                Object.assign(iframeContainer, { style: hiddenStyle, ariaHidden: "true" });

                const iframe = document.createElement("iframe");
                Object.assign(iframe, {
                    title: "Form powered and secured by Zeffy",
                    style: "width: 100%; height: 100%; border: none; border-radius: 4px;",
                    src: cacheBustUrl(formUrl),
                    allow: "payment"
                });
                iframeContainer.append(iframe);

                const mediaQuery = window.matchMedia("(min-width: 769px)");
                function adjustIframeContainer(e) {
                    if (e.matches) {
                        Object.assign(iframeContainer.style, {
                            top: "5%",
                            bottom: "5%",
                            left: "10%",
                            right: "10%"
                        });
                    } else {
                        Object.assign(iframeContainer.style, {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0
                        });
                    }
                }

                function showOverlay() {
                    overlay.style.display = "block";
                    overlay.ariaHidden = "false";
                    iframeContainer.style.display = "block";
                    iframeContainer.ariaHidden = "false";
                    setTimeout(() => {
                        overlay.style.opacity = 1;
                        iframeContainer.style.opacity = 1;
                    }, 1);
                }

                function hideOverlay() {
                    overlay.style.opacity = 0;
                    iframeContainer.style.opacity = 0;
                    setTimeout(() => {
                        overlay.style.display = "none";
                        overlay.ariaHidden = "true";
                        iframeContainer.style.display = "none";
                        iframeContainer.ariaHidden = "true";
                    }, 250);
                }

                mediaQuery.addEventListener("change", adjustIframeContainer);
                adjustIframeContainer(mediaQuery);

                document.body.append(iframeContainer);

                overlay.addEventListener("click", hideOverlay);

                formGroups[formUrl].forEach(link => {
                    link.addEventListener("click", () => {
                        showOverlay();
                        iframe.contentWindow.postMessage({ id: iframeId, open: true }, "*");
                    });
                });

                window.addEventListener("keydown", event => {
                    if (event.key === "Escape") hideOverlay();
                });

                window.addEventListener("message", event => {
                    if (event.isTrusted && event.data && event.data.id === iframeId && event.data.close) {
                        hideOverlay();
                    }
                }, false);
            });
        }
    }, []);

    return (
        <button className={styles.button} type="button" zeffy-form-link="https://www.zeffy.com/embed/donation-form/949079ad-523d-417a-a441-e947ee0271f9?modal=true">
            Make A Donation
        </button>
    );
}
