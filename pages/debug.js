// pages/index.js
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import NewsList from '../components/NewsList'
import RelatedNews from '../components/RelatedNews'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import '../styles/globals.css'
import Meta from '../components/Meta'
import { client } from '../libs/client'

// SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};

// export const getStaticPaths = async () => {
//   const data = await client.get({ endpoint: "blog" });

//   const paths = data.contents.map((content) => `/blog/${content.id}`);
//   return {
//       paths,
//       fallback: false,
//   };
// };

export default function Home({ blogs }) {
  const itemId = 'sehk-bjrk';
  const blog = blogs.find(element => element.id === itemId) || {}; // デフォルト値を設定

  return (
    <div className={styles.container}>
      
      <Meta title="チャグのニュース" blog={blog} />
      <Header />

      <NewsList blogs={blogs} />
      <main className={styles.main}>

        <article className={styles.article}>
          <h2>{blog.title || 'タイトルがありません'}</h2>
          <p className={styles.publishedAt}>{blog.publishedAt || '日付がありません'}</p>
          <Image src="/thumbnail.jpg" alt="サムネイル" width={640} height={360} />
          <p dangerouslySetInnerHTML={{ __html: `${blog.body || ''}`}} className={styles.post}></p>
        </article>

        <RelatedNews />
      </main>

      <Footer />
    </div>
  );
}

