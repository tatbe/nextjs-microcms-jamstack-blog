import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const PrivacyPolicy = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>プライバシーポリシー | チャグのニュース</title>
            </Head>
            <header>
                <h1>プライバシーポリシー</h1>
            </header>
            <main>
                <section>
                    <h2>個人情報の収集と利用</h2>
                    <p>当サイトでは、ユーザーがサービスを利用する際に、名前、メールアドレス等の個人情報を収集することがあります。</p>
                    <p>これらの情報は、お問い合わせへの対応、情報の提供、サービスの向上のために利用し、これらの目的以外では利用しません。</p>
                </section>
                <section>
                    <h2>個人情報の第三者への開示・提供の禁止</h2>
                    <p>当サイトでは、ユーザーの同意を得ることなく、第三者に個人情報を開示・提供することはありません。</p>
                    <p>ただし、法令に基づく場合など、個人情報を開示する必要が生じた場合は、その限りではありません。</p>
                </section>
                <Link href="/">
                    ホームに戻る
                </Link>
            </main>
        </div>
    );
};

export default PrivacyPolicy;
