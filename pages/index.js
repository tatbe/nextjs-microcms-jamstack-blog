
import Link from "next/link";
import { client } from "../libs/client"



import Meta from "../components/Meta";
import styles from "../styles/Home.module.css"
import '../styles/globals.css';

// SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default function Home({ blogs }) {
    return (
        <div className={styles.container}>
            <Meta title="チャグのニュース" />
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


