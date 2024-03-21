import Image from "next/image";
import Header from "../../components/Header";
import Meta from "../../components/Meta";
import NewsList from "../../components/NewsList";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.css"
import '../../styles/globals.css';
import RelatedNews from "../../components/RelatedNews";
import Footer from "../../components/Footer";
import Link from "next/link";
import TwitterShareButton from "../../components/TwitterShareButton";
import { useEffect, useState } from "react";

// SSG
export const getStaticProps = async (context) => {
    const itemId = context.params.id;
    const data = await client.get({ endpoint: "blog" });
  
    return {
      props: {
        blogs: data.contents,
        itemId: itemId,
      },
    };
  };

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });

    const paths = data.contents.map((content) => `/blog/${content.id}`);
    return {
        paths,
        fallback: false,
    };
};

export default function Blog({ blogs, itemId }) {
    const blog = blogs.find(element => element.id === itemId) || {};
    const category = blog.category;
    
    // XポストReferenceError: window is not defined対策
    const [url, setUrl] = useState('');
    useEffect(() => {
        if (typeof window !== "undefined") {
            setUrl(`${window.location.origin}/blog/${blog.id}`);
        }
    }, [blog.id]);

    return (
        <div className={styles.container}>
            <Meta title="チャグのニュース" blog={blog} />
            {/* <Header /> */}
            <Link href="/" className={styles.headerLink}>
                <header className={styles.header}>
                <h1>チャグのニュース</h1>
                </header>
            </Link>
            {/*  */}

            <div className={styles.contentArea}>
                <main className={styles.main}>
                <section className={styles.newsList}>
                    {/* <NewsList blogs={blogs} /> */}
                    <h2>最新ニュース</h2>
                    {blogs ? blogs.slice(0, 5).map((blog) => (
                        <Link key={blog.id} href={`/blog/${blog.id}`}>
                            <article key={blog.id} className={styles.newsItem}>
                                <h3>{blog.title}</h3>
                            </article>
                        </Link>
                    )) : <p>ブログがありません。</p>}
                    {/*  */}
                </section>

                {/* メインエリア */}
                <article className={styles.mainArticle}>
                    {/* サムネ */}
                    <div className={styles.newsHeader}>
                        <div className={styles.newsThumbnail}>
                            <Image src={blog.thumbnail?.url || '/default-thumbnail.jpg'} alt="ニュースサムネイル" layout="fill" objectFit="cover" />
                        </div>
                        <h2 className={styles.newsTitle}>{blog.title || 'タイトルがありません'}</h2>
                    </div>
                    {/* 投稿日 */}
                    <p>{blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('ja-JP') : '日付がありません'}</p>
                    
                    {/* Ｘポストボタン */}
                    {url && <TwitterShareButton 
                        title={blog.title} 
                        url={url} 
                        hashtags="チャグのニュース"
                    />}

                    {/* 本文 */}
                    <div className={styles.post} dangerouslySetInnerHTML={{ __html: blog.body || '' }} />
                </article>

                    {/* <RelatedNews /> */}
                    <section className={styles.relatedNews}>
                        <h3>関連ニュース</h3>
                        <ul>
                            {/* 同カテゴリーの最新10件まで表示 */}
                            {blogs ? blogs
                                .filter(blog => blog.category === category) // 'ニュース'に一致するブログのみをフィルタリング
                                .slice(0, 10) // 最初の10件のみを取得
                                .map((blog) => (
                                <li key={blog.id} className={styles.newsItem}>
                                    <Link href={`/blog/${blog.id}`}>
                                            <div className={styles.newsImage}>
                                                <Image
                                                    src={blog.thumbnail?.url || '/default-thumbnail.jpg'}
                                                    alt={blog.title || 'デフォルトタイトル'}
                                                    width={100}
                                                    height={100}
                                                    objectFit="cover"
                                                />
                                            </div>
                                            <span className={styles.newsText}>{blog.title}</span>
                                    </Link>
                                </li>
                            )) : <p>ブログがありません。</p>}
                        </ul>
                    </section>
                    {/*  */}
                </main>
                
                {/* <section className={styles.sideArea}>
                    <div className={styles.advertisementArea}>
                        <h3>広告</h3>
                        <p>ここに広告を表示します。</p>
                    </div>
                </section> */}
            </div>

            {/* <Footer /> */}
            <footer className={styles.footer}>
                © 2024 チャグのニュース
            </footer>
            {/*  */}
        </div>
    );
}


