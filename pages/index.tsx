import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>No Bugs please</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className={styles.title}>🐧🐙🐐🐸🍟😃👽🍄🍎🐛🔒🍕🌵</h1>
            </main>
        </div>
    );
}
