import Head from "next/head";
import { useState } from "react";

import styles from "@/pages/index.module.css";

export default function Home() {
    const [isBlurred, setIsBlurred] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const toggleBlur = () => {
        setIsBlurred(!isBlurred);
        setIsVisible(!isVisible);
    };

    return (
        <div className={styles.container} onClick={toggleBlur}>
            <Head>
                <title>No Bugs please</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h2>{isVisible ? "No bugs please!" : "No bugs here!"}</h2>
                <h1 className={styles.title}>
                    <div className={styles.emojiContainer}>
                        <span
                            className={
                                isBlurred ? styles.blurred : styles.unblurred
                            }
                        >
                            🐧🐙🐐🐸🍟😃👽🍄🍎
                        </span>
                        <span
                            className={
                                isBlurred ? styles.visible : styles.invisible
                            }
                            aria-hidden={!isBlurred}
                        >
                            🐛
                        </span>
                        <span
                            className={
                                isBlurred ? styles.blurred : styles.unblurred
                            }
                        >
                            🔒🍕🌵
                        </span>
                    </div>
                </h1>
            </main>
        </div>
    );
}
